// input and get value
  function getInputValue(inputId){
    const inputValue =document.getElementById(inputId);
    const inputvalueText =inputValue.value;
    const inputValueAmount = parseFloat(inputvalueText)
    inputValue.value = '';
    return inputValueAmount;
    
  }
  
// withdraw and deposit total 
  function getBalanceValue(balanceId, amount){
    const balanceTotal = document.getElementById(balanceId);
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
 
    balanceTotal.innerText = previousBalanceTotal + amount;
    return balanceTotal;
  }
// validation withdraw amont in negative
 function balanceValidation (){
  const balanceTotal = document.getElementById('TotalBalance');
  const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText);
  return previousBalanceTotal;
 }
 
//  total balacne amount
  function TotalBalance(totalAmount,isAdd){
    const balanceTotal = document.getElementById('TotalBalance');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    const previousBalanceTotal= balanceValidation ()
    if(isAdd == true){
      balanceTotal.innerText =previousBalanceTotal + totalAmount;
    }
    else{
      balanceTotal.innerText = previousBalanceTotal-totalAmount;
    }
    return balanceTotal.innerText;
  }




//deposit calculation:
document.getElementById('depositButton').addEventListener('click',function(){
  // get and input deposit:
 /*  const depoistInput =document.getElementById('depoistInput');
  const depositAmountText = depoistInput.value;
  const depositAmount = parseFloat(depositAmountText); */

    // return amount in function:
  
  //get current deposit :
  // const depoistTotal = document.getElementById('depositAmount');
  // const depoistTotalText = depoistTotal.innerText;
  // const previousDepoistTotal = parseFloat(depoistTotalText);
// total deposit amonunt :

// depoistTotal.innerText = depositAmount + previousDepoistTotal;
  



  // balance total deposit:
 
  // const balanceTotal = document.getElementById('TotalBalance');
  // const balanceTotalText = balanceTotal.innerText;
  // const previousBalanceTotal = parseFloat(balanceTotalText);
  const depositAmount = getInputValue('depoistInput');
  if(depositAmount>0){
    getBalanceValue('depositAmount',depositAmount);
    TotalBalance(depositAmount,true);
  }
  
  
 
})



// withdraw calculation:

document.getElementById('withdrawButton').addEventListener('click',function(){
  // get and input deposit:
 /*  const withdrawInput =document.getElementById('withdrawInput');
  const withdrawAmountText = withdrawInput.value;
  const WithdrawAmount = parseFloat(withdrawAmountText); */
   //return amount in function:
  
  //get current deposit :
  // const withdrAmount = document.getElementById('withdrawAmount');
  // const withdrawTotalText = withdrAmount.innerText;
  // const previouswithDrawTotal = parseFloat(withdrawTotalText);

  // // total deposit amonunt :
  // withdrAmount.innerText = withdrawAmountTotal + previouswithDrawTotal;

 

   // balance total deposit:

  // const balanceTotal = document.getElementById('TotalBalance');
  // const balanceTotalText = balanceTotal.innerText;
  // const previousBalanceTotal = parseFloat(balanceTotalText); 
  const withdrawAmountTotal = getInputValue('withdrawInput');
  const previousBalanceTotal= balanceValidation ()

  if(withdrawAmountTotal>0 && withdrawAmountTotal<previousBalanceTotal){
    getBalanceValue('withdrawAmount',withdrawAmountTotal);
  TotalBalance(withdrawAmountTotal, false);
  }

 
})
 