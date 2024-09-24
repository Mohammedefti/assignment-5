// const balance = document.getElementById('account-balance').innerText;
// const collected = document.getElementById('total-collection').innerText;


// document.getElementById('donation-amount').addEventListener('click', function(event){
//     event.preventDefault();
    // const newbalance = parseFloat(balance);
    // console.log(newbalance);
// const amount = document.getElementById('donation-amount').value;
// const balance1 = parseFloat(balance);
// const balance2 = parseFloat(collected);
// const new1 = 0;
// const new2 = 0;

    // getInputFieldValueById();
    // const donateMoney = getInputFieldValueById();
    // console.log('add money value', donateMoney)

//     const donateMoney = getInputFieldValueById('input-donation');
    
//     if ((typeof amount)!== String && !isNaN(amount)){
//         // return alert('Your donation is not valid');
//     } else{
// new1= balance1 - amount;
// new2 = balance2 +amount;
// new1 = document.getElementById('account-balance ').innerText;
// new2 = document.getElementById('total-collection ').innerText;

//     }
// })




document.getElementById('show-donation').addEventListener('click', function () {
  showSectionById('content-1');
  
  
  
})

document.getElementById('show-transaction').addEventListener('click', function () {
  showSectionById('content-2');
})




