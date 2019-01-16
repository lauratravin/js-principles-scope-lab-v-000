// Write your solution in this file!
var customerName = 'bob';
const leastFavoriteCustomer = 'cat';

function upperCaseCustomerName(){
   return customerName = customerName.toUpperCase();
}

// function upperCaseCustomerName(){

  //  return customerName = 'BOB';  //works
  // return (customerName.toUpperCase());  //does not work, apparentrly to.UpperCase doesnt work at returning.
 //}


function setBestCustomer(){
    bestCustomer = 'not bob'  //has to be global scope
}

function overwriteBestCustomer(){
   bestCustomer = 'maybe bob';
   return bestCustomer;   //works with or not return bcos variable is global
}

function changeLeastFavoriteCustomer(){
    return  leastFavoriteCustomer = 'dog'
}
