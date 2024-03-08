const form = document.querySelector("form"),
        usernameField = form.querySelector(".username-field"),
        usernameInput = usernameField.querySelector(".username"),
        emailField = form.querySelector(".email-field"),
        emailInput = emailField.querySelector(".email"),
        passField = form.querySelector(".create-password"),
        passInput = passField.querySelector(".password"),
        cPassField = form.querySelector(".confirm-password"),
        cPassInput = cPassField.querySelector(".cPassword");


    // Username Validation
    function createUsername() {
       if (usernameInput.value.length <= 3) {
        console.log("Username is too short!")
        document.getElementById('username-error').innerText = 'Username is too short!'
        return usernameField.classList.add("invalid");
       }
       usernameField.classList.remove("invalid");

       if (usernameInput.value.length >= 14) {
        console.log("Username is too long!");
        document.getElementById('username-error').innerText = 'Username is too long!'
        return usernameField.classList.add('invalid');
       }
       usernameField.classList.remove('invalid');
    }


    // Email Validation
    function checkEmail() {
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!emailInput.value.match(emailPattern)){
           return emailField.classList.add("invalid");
        }
        emailField.classList.remove("invalid");
    }

    // Hide and show password
    const eyeIcons = document.querySelectorAll(".show-hide");
    // console.log(eyeIcons);

    eyeIcons.forEach(eyeIcon => {
        eyeIcon.addEventListener("click", () => {
            const pInput = eyeIcon.parentElement.querySelector("input"); // getting parent element of eye icon and selecting the password input
            if (pInput.type === "password") {
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return (pInput.type = "text");
            }
            eyeIcon.classList.replace("bx-show", "bx-hide");
                pInput.type = "password";
        })
    })

    // Password Validation
    function createPass() {
        // const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/ // String only allowing small and capitalized letters and numbers
        if (!passInput.value.match(passPattern)) {
            return passField.classList.add("invalid"); // adding invalid class if password input value do not match with passPattern
        }
        passField.classList.remove("invalid"); // removing invalid class if password input value matched with passPattern
    }

    //  Confirm Password Validation 

    function confirmPass() {
        if (passInput.value !== cPassInput.value || cPassInput.value === "") {
            return cPassField.classList.add("invalid");
        }
        cPassField.classList.remove("invalid");
    }

    // Calling Function on Form Submit
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        createUsername();
        checkEmail();
        createPass();
        confirmPass();

        // Calling function on keyup
        usernameInput.addEventListener("keyup", createUsername);
        emailInput.addEventListener("keyup", checkEmail);
        passInput.addEventListener("keyup", createPass);
        cPassInput.addEventListener("keyup", confirmPass);

        if (
        !usernameField.classList.contains("invalid") &&
        !emailField.classList.contains("invalid") &&
        !passField.classList.contains("invalid") &&
        !cPassField.classList.contains("invalid")
         ) {
            alert("You have now signed up!")
        }
    });