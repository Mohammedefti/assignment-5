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

// active or inactive button
// function setActiveButton(activeButton, inactiveButton) {
//     const activeButton = document.getElementById('show-donation');
//     const inactiveButton = document.getElementById('show-transaction');
//     activeButton.classList.add('bg-[#B4F461]');
//     inactiveButton.classList.remove('bg-[#B4F461]')
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
            <dialog id="my_modal_5" class="modal modal-bottom  sm:modal-middle">
  <div class="modal-box flex flex-col justify-center items-center">
    <h3 class="text-3xl font-bold">Congrates!</h3>
    <img class="mt-4" src="assets/coin.png" alt=""></img>
    <p class="py-4">You Have Donated for Humankind</p>
    <p class="text-lg font-bold">Successfully</p>
    <div class="modal-action">
      <form method="dialog">
        {/* <!-- if there is a button in form, it will close the modal --> */}
        <a href="index.html" class="btn">Close confimation</a>
      </form>
    </div>
  </div>
</dialog>

            donationInput.value = ''; // Clear the input field
        } else {
            alert('Please enter a valid donation amount.'); // Alert if the input is invalid
        }
    });
}


