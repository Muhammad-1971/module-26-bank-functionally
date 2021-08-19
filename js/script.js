 document.getElementById('sumbmitButton').addEventListener('click',function(){

  const input_name = document.getElementById('inputName');
  const inputName = input_name.value;
  const input_password = document.getElementById('currentPassword');
  const inputPassword = input_password.value;

  if(inputName == 'mlwbd1952@gmail.com' && inputPassword == '123456su'){
    window.location.href = 'user-page/index.html'
  }
  
})


