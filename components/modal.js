
const menu = {
    "HamnMush" : 22, 
    "PizzanWine" : 30, 
    "PepperoninPizza" : 15, 
    "PastanCherry" : 18, 
    "ChickenFet" : 20, 
    "ShrimpPast" : 27,
}

//atach an event listener to each iamge
document.querySelectorAll('.selected').forEach((img) => {
    //add an event listenet to each class img and take its ID
    img.addEventListener('click', (event) => {
        let imageId = event.target.id;
        // get the image clicked
        let clickedImage = event.target.src;
        // find the ID and push it into the function showModal
        showModal(imageId, clickedImage);
    });
});



function showModal(imageID, clickedImage) {
    console.log('Image clicked: ', imageID, clickedImage);

    // Create containers for the form elements
    const form = document.getElementById('formModal');
    const modal_container = document.getElementById("modal-container");
    const close = document.getElementById("close");
    const modalImage = document.getElementById("modal-image");

    // Add the clickedImage as the modal image
    modalImage.src = clickedImage;
    // Make the modal visible
    modal_container.classList.add('show');

    // Flag to track if close button was clicked
    let closeClicked = false;

    // Close the modal when the close button is clicked
    close.addEventListener('click', (event) => {
        event.stopPropagation();  // Prevent form submission
        closeClicked = true; // Set flag to indicate close was clicked
        modal_container.classList.remove('show');  // Close the modal
    });

    // Close the modal if you click outside the modal content (not the form or close button)
    modal_container.addEventListener('click', (event) => {
        if (event.target === modal_container) {
            modal_container.classList.remove('show');
        }
    });

    // Take the filled-out form information when the form is submitted
    form.addEventListener('submit', (event) => {
        if (closeClicked) {
            return;  // If close was clicked, don't call submit logic
        }
        
        event.preventDefault();  // Prevent form submission so we can check values

        // Get the selected radio button (crust)
        let crust = document.getElementById('crust').value;

        // Get the selected toppings
        const toppings = [];
        document.querySelectorAll('input[name="toppings"]:checked').forEach((checkbox) => {
            toppings.push(checkbox.value);
        });

        // Check if at least one topping is selected
        if (toppings.length === 0) {
            alert("Please select at least one topping.");
            return;  // Stop the function from submitting the form
        }

        // Take all of the user data to then make calculations
        addtoCart(imageID, crust, toppings);

        // Close the modal after successful form submission
        modal_container.classList.remove('show');
    });
}



// function that stores all user input. will be updated to add informaiton to cart.
function addtoCart(imageID, crust, toppings) {
    console.log(imageID);
    let price = menu[imageID]; 
    if (toppings.length > 1) {
        price += 2; 
    }

    console.log( price, crust, toppings);

}














