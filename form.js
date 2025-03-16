const rValue = document.getElementById("rate-range");
const range = document.getElementById("rating");

range.addEventListener('input', displayRating);

function displayRating() {
    rValue.innerHTML = range.value;
}

const pw = document.querySelector("#password");
const pw2 = document.querySelector("#password2");
const passwordMessage = document.querySelector("#password-message");

pw.addEventListener("keydown", handlePWKeyPress);
pw2.addEventListener("keydown", handlePW2KeyPress);

//pw2.addEventListener("focus", function () {
//if (pw.value !== pw2.value) {
//passwordMessage.textContent = "** Password must be at least 8 characters and only contain letters and numbers. **";
// }
//});

function handlePWKeyPress(event) {
    const pwValue = pw.value;
    const pwPattern = /^[a-zA-Z0-9]{8,}$/;
    if (event.key === "Enter" || event.key === "Tab") {
        if (!pwValue.match(pwPattern)) {
            passwordMessage.style.display = "block";
            passwordMessage.textContent = "** Password must be at least 8 characters and only contain letters and numbers. **";
            pw.value = "";
            pw.backgroundColor = "red";
            event.preventDefault();
            pw.focus();
            pw2.disabled = true;
        } else {
            passwordMessage.style.display = "none";
            pw.style.backgroundColor = "";
            pw2.disabled = false;
            pw2.focus();
        }

    }
}
// This should be refactored.
function handlePW2KeyPress(event) {
    const pw2Value = pw2.value;

    if (event.key === "Enter" || event.key === "Tab") {
        if (pw.value !== pw2Value) {
            passwordMessage.style.display = "block";
            pw2.style.backgroundColor = "#fff0f3";
            pw2.value = "";
            passwordMessage.textContent = "❗Passwords DO NOT MATCH!";
            passwordMessage.style.visibility = "visible";

            event.preventDefault();
            pw2.focus();
        } else {
            passwordMessage.style.display = "none";
            pw2.style.backgroundColor = "#fff";
            pw2.style.color = "#000";
        }
    }
}