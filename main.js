const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});



//password &cpassword &passwordcheck()

function passwordcheck(){
    let password=document.getElementById('password').value;
    console.log(password)
    let cpassword=document.getElementById('cpassword').value;
    console.log(cpassword)

    let message=document.getElementById('message');
    if(password.length !=0){
        if(password==cpassword){
            message.textContent="Password match"
            message.style.backgroundColor="green"
        }
        else{
            message.textContent="Password don't match "
            message.style.backgroundColor="red"
        }
    }
    else{
        alert("Form is be empty please fill")
        message.textContent=""
    }
}
