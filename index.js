var forms = document.querySelectorAll("form");
var mailformat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Email validation function
function ValidateEmail(name) {
  var email = document.forms[name]["email"];
  if (name === "form1") {
    var error = document.getElementById("error-message1");
  } else {
    var error = document.getElementById("error-message2");
  }
  !email.value.match(mailformat) ? addError(email, error) : removeError(email, error);    //email validation toggle
}

// Add error function
function addError(email, error) {
  email.classList.add("redBorder");
  error.innerHTML = "Please check your email";
}

// Remove error function
function removeError(email, error) {
  email.classList.remove("redBorder");
  error.innerHTML = " ";
}


// Event Listener
forms.forEach(form => {
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    ValidateEmail(this.name);
  });
});
