// function getInputFieldValueById() {
//     const donateMoney = document.getElementById('input-donation').value;
//     return donateMoney;
// }

function getInputFieldValueById(id) {
    const inputValue = document.getElementById(id).value; 
    return inputValue;
}

// function showContent(sectionId) {
//     // hide all section
//     // / Hide all sections by adding the 'hidden' class
//       const sections = document.querySelectorAll('section');
//       sections.forEach(section => section.classList.add('hidden'));

//       // Show the clicked section by removing the 'hidden' class
//       const sectionToShow = document.getElementById(sectionId);
//       if (sectionToShow) {
//         sectionToShow.classList.remove('hidden');
//       }
// }

function showSectionById(id){
document.getElementById('content-1').classList.add('hidden');
document.getElementById('content-2').classList.add('hidden');
// show the section with provide id as parameter

document.getElementById(id).classList.remove('hidden');
}

// collected from a card
function handleDonation(inputId, totalCollectionId, buttonId) {
    // Get elements by their IDs
    const donationInput = document.getElementById(inputId);
    const totalCollection = document.getElementById(totalCollectionId);
    const donateButton = document.getElementById(buttonId);

    // Add event listener to the button
    donateButton.addEventListener('click', function() {
        const donationAmount = parseFloat(donationInput.value); // Get the entered donation amount
        const currentTotal = parseFloat(totalCollection.textContent); // Get the current total collection

        // Check if the donation amount is a valid number
        if (!isNaN(donationAmount) && donationAmount > 0) {
            const newTotal = currentTotal + donationAmount; // Add donation to the current total
            totalCollection.textContent = newTotal.toFixed(2); // Update total collection

            donationInput.value = ''; // Clear the input field
        } else {
            alert('Please enter a valid donation amount.'); // Alert if the input is invalid
        }
    });
}


