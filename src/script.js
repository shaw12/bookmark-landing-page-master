const submit = document.querySelector("#submit");
const email = document.querySelector("#inp");
const invalidText = document.querySelector("#err");
const validText = document.querySelector("#nrr");

function validEmail(event){
    event.preventDefault();
    if(email.validity.valid && email.value !== ""){
        email.style.borderColor = "#2ECC71";
        invalidText.style.display = "none";
        validText.style.display = "block";
        email.className = email.className + "good";  
        submit.disabled = true; 
        email.value = "";
    } 
    else{
        email.style.borderColor = "#ff5466";
        invalidText.style.display = "block";
        validText.style.display = "none";
        email.className = email.className + "move";  
        submit.disabled = true; 
    }
}

submit.addEventListener('click', validEmail);


/*validate email input
var email = document.querySelector(".email-input");
var contact = document.querySelector(".contact-btn");
var errorMessage = document.querySelector(".error-msg");

function ValidateEmail(mail) {

 	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {

		errorMessage.style.visibility = "hidden";
		return (true)
  }
    errorMessage.style.visibility = "visible";

    return (false)
	}

contact.addEventListener("click", function() {

	ValidateEmail();


});


//show the mobile side nav

document.querySelector(".menu-img").addEventListener("click", function() {

	document.querySelector(".mobile-nav").classList.add("active");
	

});

document.querySelector(".close").addEventListener("click", function() {

	document.querySelector(".mobile-nav").classList.remove("active");

});
*/