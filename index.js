// Write your solution in this file!
var customerName = 'bob';

function upperCaseCustomerName(){
   return  customerName.toUpperCase();
}

function setBestCustomer(){
    bestCustomer = 'not bob'  //has to be global scope
}

function overwriteBestCustomer(){
   bestCustomer = 'maybe bob';
   return bestCustomer;   //works with or not return bcos variable is global
}
