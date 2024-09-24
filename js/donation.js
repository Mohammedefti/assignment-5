
//Function for Remove class
function hiddenClass(id) {
  document.getElementById(id).classList.remove('hidden');
  
}
// Function for adding class
function addClass(id) {
  document.getElementById(id).classList.add("hidden");
}



// Receive Input from input field:
function getInputFieldValue(id) {
  const input = document.getElementById(id).value;
  //console.log(input);
  return input;
}
// Update balcnce:

 function updateBalance(cardValue) {
  const currentBalance = document.getElementById("account-balance").innerText;
  //console.log(currentBalance);

  const updateBalance = parseFloat(currentBalance) - parseFloat(cardValue);
  document.getElementById("account-balance").innerText = updateBalance;
 
}


// History Added:
function historyAdded(cardValue, location) {
  //console.log(cardValue);
  const div = document.createElement('div');
  div.style.background = 'white';
  div.style.width = '100%';
  div.style.height = 'auto';
  div.style.borderRadius = '10px';
  div.style.boxShadow = 'rgba(0, 0, 0, 0.16) 0px 1px 4px'
  div.style.alignItems = 'center';
  div.style.marginBottom = '10px';
  div.style.padding = '10px'
  

  const p = document.createElement('p');
  p.innerText = `${cardValue} Taka is ${location} \n Date: ${new Date}`;
  div.appendChild(p);
  document.getElementById('history-container').appendChild(div);
}
// Open Modal :
function openModal(){
  document.getElementById("call-modal").classList.remove("hidden")
  my_modal_1.showModal();
}