document.addEventListener('DOMContentLoaded', function () {
    const checkoutButton = document.getElementById('checkout-btn');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');

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

            const cart = JSON.parse(localStorage.getItem('cart')) || [];

            if (cart.length === 0) {
                alert('Your cart is empty!');
                return;
            }

            const lineItems = cart.map(item => ({
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: item.name,
                        images: [item.image],
                    },
                    unit_amount: Math.round(item.price * 100),
                },
                quantity: item.quantity,
            }));

            try {
                const response = await fetch('/create-checkout-session', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ lineItems }),
                });

                if (!response.ok) {
                    const errorDetails = await response.text();
                    console.error('Server error:', errorDetails);
                    throw new Error(`Failed to create checkout session: ${response.statusText}`);
                }

                const result = await response.json();
                const sessionId = result.sessionId;

                // Fetch the publishable key from the server
                const configResponse = await fetch('/config');
                const { publishableKey } = await configResponse.json();

                // Initialize Stripe with the publishable key
                const stripe = Stripe(publishableKey);

                console.log('Stripe Publishable Key:', publishableKey); // Log the publishable key
                console.log('Stripe Session ID:', sessionId); // Log the session ID

                console.log('Session ID before redirect:', sessionId);
                const { error } = await stripe.redirectToCheckout({ sessionId });

                if (error) {
                    console.error('Stripe Checkout error:', error);
                    alert(`Stripe Checkout Error: ${error.message}\nStack: ${error.stack}`);
                }
            } catch (error) {
                console.error('Fetch error:', error);
                alert(error.message || 'An unexpected error occurred.');
            }
        });
    }

    // Initialize cart display
    updateCartDisplay();
});