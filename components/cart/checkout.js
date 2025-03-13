document.addEventListener('DOMContentLoaded', function () {
    const checkoutButton = document.getElementById('checkout-btn');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    const logElement = document.createElement('div'); // Create a log element
    logElement.className = 'log';
    if (cartItemsContainer.parentNode) {
        cartItemsContainer.parentNode.insertBefore(logElement, cartItemsContainer.nextSibling);
    }
    function log(message, type = 'info') {
        const entry = document.createElement('div');
        entry.className = `log-entry ${type}`;
        entry.textContent = message;
        logElement.appendChild(entry);
        logElement.scrollTop = logElement.scrollHeight;
    }

    function getImageUrl(itemImage) {
        const origin = window.location.origin;
        const fallbackImage = `${origin}/images/fallback.svg`;

        if (!itemImage) {
            return fallbackImage;
        }

        if (itemImage.startsWith('http://') || itemImage.startsWith('https://')) {
            return itemImage; // Already absolute
        }
        if (itemImage.startsWith('//')) {
            return `https:${itemImage}`;
        }
        return encodeURI(`${origin}/${itemImage}`);
    }

    // Function to update the cart display
    function updateCartDisplay() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cartItemsContainer.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'menu-item';
            itemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}" />
                <h3>${item.name}</h3>
                <p class="price">$${item.price} x ${item.quantity}</p>
            `;
            cartItemsContainer.appendChild(itemElement);
            total += item.price * item.quantity;
        });

        cartTotalElement.textContent = total.toFixed(2);
    }

    // Checkout button functionality
    if (checkoutButton) {
        checkoutButton.addEventListener('click', async (event) => {
            event.preventDefault(); // Prevent default link behavior

            // Disable the button and change text
            checkoutButton.disabled = true;
            checkoutButton.textContent = 'Processing...';

            const cart = JSON.parse(localStorage.getItem('cart')) || [];

            if (cart.length === 0) {
                alert('Your cart is empty!');
                checkoutButton.disabled = false;
                checkoutButton.textContent = 'Checkout';
                return;
            }

            try {
                log('Fetching Stripe publishable key...');
                const configResponse = await fetch('/api/config');
                if (!configResponse.ok) {
                    throw new Error(`Config API error: ${configResponse.status} ${configResponse.statusText}`);
                }

                const { publishableKey } = await configResponse.json();
                log(`Got publishable key: ${publishableKey.substring(0, 8)}...`, 'success');

                // Initialize Stripe with the publishable key
                const stripe = Stripe(publishableKey);

                // Get the current origin for absolute URLs
                const origin = window.location.origin;
                log(`Current origin: ${origin}`);

                const lineItems = cart.map(item => ({
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: item.name,
                            images: [getImageUrl(item.image)], // Use the helper function
                        },
                        unit_amount: Math.round(item.price * 100),
                    },
                    quantity: item.quantity,
                }));

                log('Creating checkout session...');
                log(`Request payload: ${JSON.stringify({ lineItems }, null, 2)}`);

                const response = await fetch('/api/create-checkout-session', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ lineItems }),
                });

                if (!response.ok) {
                    const errorDetails = await response.text();
                    throw new Error(`Failed to create checkout session: ${errorDetails}`);
                }

                const result = await response.json();
                const sessionId = result.sessionId;
                log(`Got session ID: ${sessionId}`, 'success');

                log('Redirecting to Stripe checkout...');
                const { error } = await stripe.redirectToCheckout({ sessionId });

                if (error) {
                    throw new Error(error.message);
                }
            } catch (error) {
                log(`Error: ${error.message}`, 'error');
                console.error('Fetch error:', error);
                alert(error.message || 'An unexpected error occurred.');
            } finally {
                // Re-enable the button
                checkoutButton.disabled = false;
                checkoutButton.textContent = 'Checkout';
            }
        });
    }

    // Initialize cart display
    updateCartDisplay();
});