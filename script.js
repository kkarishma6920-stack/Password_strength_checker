const password = document.getElementById("password");
const strengthText = document.getElementById("strength-text");
const strengthBar = document.getElementById("strength");

password.addEventListener("input", () => {
    let value = password.value;
    let strength = 0;

    if (value.length >= 8) strength++;
    if (/[a-z]/.test(value)) strength++;
    if (/[A-Z]/.test(value)) strength++;
    if (/\d/.test(value)) strength++;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(value)) strength++;

    if (strength <= 2) {
        strengthText.innerText = "Strength: Weak ❌";
        strengthBar.style.width = "40%";
        strengthBar.style.background = "red";
    } 
    else if (strength <= 4) {
        strengthText.innerText = "Strength: Medium ⚠️";
        strengthBar.style.width = "70%";
        strengthBar.style.background = "orange";
    } 
    else {
        strengthText.innerText = "Strength: Strong ✅";
        strengthBar.style.width = "100%";
        strengthBar.style.background = "green";
    }
});
