// Call for removing class.
document.getElementById("btn-donate").addEventListener('click', function () {
  //console.log("frature Loaded");
  hiddenClass("content-1");
  addClass("history-container");
  // Toggle button:
  document.getElementById("btn-history").classList.remove('border-none');
  document.getElementById("btn-donate").classList.add('bg-[#B4F461]');
  document.getElementById("btn-donate").classList.add('bg-[#B4F461]');
  document.getElementById("btn-history").classList.remove('bg-[#B4F461]');
  

})
//Call for adding class.
document.getElementById("btn-history").addEventListener('click', function () {
  hiddenClass("history-container");
  addClass("content-1");
  //Toggle button:
  document.getElementById("btn-history").classList.add('bg-[#B4F461]');
  document.getElementById("btn-donate").classList.remove('bg-[#B4F461]');
  document.getElementById("btn-history").classList.add('border-none');

})





// input call for card1
document.getElementById("donation-button-1").addEventListener('click', function () {


  const card1Value = getInputFieldValue("input-donation-1");
   document.getElementById("input-donation-1").value = "";
  if (card1Value === 'null' || card1Value == 0 || isNaN(card1Value) || card1Value < 0 || card1Value == "") {
      alert("Invalid Input.Please try again.");
     
  }
  else {

      const currentBalance = document.getElementById("account-balance").innerText;
      if (parseFloat(card1Value) > parseFloat(currentBalance)) {
          alert("Insufficient Balance! Cannot donate.");
      }
      else {
          //console.log(parseFloat(card1Value));
          updateBalance(card1Value);
          // Update Self Card balance:
          const selfCardBalance = document.getElementById("total-collection-1").innerText;
          document.getElementById("total-collection-1").innerText = parseFloat(selfCardBalance) + parseFloat(card1Value);
          // Transection history added:
          historyAdded(card1Value, "donated for Flood at Noakhali, Bangladesh");
          openModal();
          
      }

  }







})


// Input call for card2
document.getElementById("donation-button-2").addEventListener('click', function () {
  const card2Value = getInputFieldValue("input-donation-2");
  document.getElementById("input-donation-2").value = "";
  if (card2Value === 'null' || card2Value == 0 || isNaN(card2Value) || card2Value < 0 || card2Value == "") {
      alert("Invalid Input.Please try again.");
  }
  else {
      const currentBalance = document.getElementById("account-balance").innerText;
      if (parseFloat(card2Value) > parseFloat(currentBalance)) {

          alert("Insufficient Balance! Cannot donate.");

      }
      else {


          updateBalance(card2Value);

          // Update Self Card balance:
          const selfCardBalance = document.getElementById("total-collection-2").innerText;
          // console.log(selfCardBalance);
          document.getElementById("total-collection-2").innerText = parseFloat(selfCardBalance) + parseFloat(card2Value);

          // Transection history added:
          historyAdded(card2Value, "donated for Flood Relief in Feni,Bangladesh");
          openModal();
      }

  }



})

// Input call for card3
document.getElementById("donation-button-3").addEventListener('click', function () {
  const card2Value = getInputFieldValue("input-donation-3");
  document.getElementById("input-donation-3").value = "";
  if (card2Value === 'null' || card2Value == 0 || isNaN(card2Value) || card2Value < 0 || card2Value == "") {
      alert("Invalid Input.Please try again.");
  }
  else {
      const currentBalance = document.getElementById("account-balance").innerText;
      if (parseFloat(card2Value) > parseFloat(currentBalance)) {

          alert("Insufficient Balance! Cannot donate.");

      }
      else {


          updateBalance(card2Value);

          // Update Self Card balance:
          const selfCardBalance = document.getElementById("total-collection-3").innerText;
          // console.log(selfCardBalance);
          document.getElementById("total-collection-3").innerText = parseFloat(selfCardBalance) + parseFloat(card2Value);

          // Transection history added:
          historyAdded(card2Value, "Aid for Injured in the Quota Movement");
          openModal();
      }

  }



})