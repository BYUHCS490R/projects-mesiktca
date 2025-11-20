const missyform = document.getElementById("mesiktform");
missyform.addEventListener("submit", function(event) {event.preventDefault(); 
    const formData = {
    username: missyform.username.value,
    password: missyform.password.value,
    favnum: missyform.favnum.value,
    phonenum: missyform.phonenum.value,
    email: missyform.email.value,
    dob: missyform.dob.value,
    reason: missyform.reason.value,
    twostep: missyform.twostep.value,
    agree: missyform.agree.checked
  };
  const contact = missyform.querySelector('input[name="contact"]:checked');
formData.contact = contact ? contact.value : '';
  console.log(formData);
  if (!formData.username || !formData.password || !formData.phonenum || !formData.email || !formData.dob || !formData.reason || !formData.twostep || !formData.agree) {
    alert("Please ensure all fields are filled! Thanks!");
    return;
  }
  if (formData.password.length < 8) {
    alert("Password must contain at least 8 characters, thank you.");
    return;
  }
  if (formData.username.length < 4) {
    alert("Username must contain at least 4 characters, thank you.");
    return;
  }
const pin = parseInt(formData.favnum, 10);
if (pin < 1000 || pin > 9999) {
  alert("PIN requires a 4-digit number, 0000 is not accepted, thank you!");
  return;
}
const xhr = new XMLHttpRequest();
xhr.open("GET", "forms.json", true);
xhr.onload = function() {
  if (xhr.status === 200) {
    const response = JSON.parse(xhr.responseText);
    const successText = document.createElement("p");
    successText.textContent = response.message;
    missyform.parentNode.appendChild(successText);
    missyform.reset();
  }else {
    alert("Oops! Something went wrong!");
  }
};
xhr.send();
});