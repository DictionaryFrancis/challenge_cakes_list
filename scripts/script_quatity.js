//Selecting all buttons with the class
const cartButtons = document.querySelectorAll('.btn-cart');

const minusButtons = document.querySelectorAll('.btn-decrement');
const plusButtons = document.querySelectorAll('.btn-increment');
const quantities = document.querySelectorAll('#quantity-1');




// Iterating over all the buttons and adding a click event to each
cartButtons.forEach((btn, index) => {
    // forEach is used to loop through each element in the cartButtons NodeList
    // The btn represents each individual button in the list, and index represents the position of that button in the array
    btn.addEventListener('click', (e) => {
        e.preventDefault(); // 

        const quatityElement = document.querySelectorAll('.btn-cart-quantity')[index]
        const cartButton = btn

        quatityElement.classList.toggle('show')
        
        // Hide the '.btn-cart' element while the quantity is visible
        if (quatityElement.classList.contains('show')) {
            cartButton.style.visibility = 'hidden';
        } else {
            cartButton.style.visibility = 'visible';
        }


        console.log(`Button clicked for item ${index + 1}`); // Logs the index of the clicked button
    });


    plusButtons[index].addEventListener('click', () => {
        let quantityValue = parseInt(quantities[index].textContent)
        if (quantityValue < 9) {
            quantityValue++;
            quantities[index].textContent = quantityValue
        }
        console.log(`Quantity increased for item ${index + 1}: ${quantityValue}`);
    })

    minusButtons[index].addEventListener('click', () => {
        let quantityValue = parseInt(quantities[index].textContent)
        if (quantityValue > 1) {
            quantityValue--;
            quantities[index].textContent = quantityValue
        } else {
            // If it less than 1, back to show 'Add to Cart'
            const quatityElement = document.querySelectorAll('.btn-cart-quantity')[index]
            quatityElement.classList.remove('show')
            cartButtons[index].style.visibility = 'visible'
        }
        console.log(`Quantity increased for item ${index + 1}: ${quantityValue}`);
    })

});


