//Login Details
//Username: admin
//Password: admin123
const userName = "admin";
const passWord ="admin123";
//Submit Button
const subBtn = document.getElementById("Submit");
//Event listener
subBtn.addEventListener("click" , function(e){
  e.preventDefault();
  //Declaration of constants
  const formReg = document.getElementById("register");
  const user = document.getElementById("usernamesignup")
  const userNameInput = user.value;
  const pass = document.getElementById("passwordsignup");
  const passWordInput = pass.value;
//Conditional statements

  if(userName===userNameInput && passWord===passWordInput){
     const correctDIV = document.createElement("div");
     correctDIV.classList.add("correct");
     correctDIV.textContent="Correct Username and password";
     formReg.appendChild(correctDIV);

  }
  else{
    const wrongDIV = document.createElement("div");
    wrongDIV.classList.add("wrong");
    wrongDIV.textContent ="Incorrect Username and Password";
    formReg.appendChild(wrongDIV); 
  }
});
