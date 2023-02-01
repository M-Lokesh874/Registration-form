//It validates the form
function formValidation() {
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var password = document.getElementById("password").value;
    var conform_password = document.getElementById("conform_password").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    var address = document.getElementById("address").value;

    const inputs = document.querySelectorAll('.input');
    const select = document.querySelector('select');
    const checkbox = document.querySelector('input[type="checkbox"]');

    var letters = /^[A-Za-z]+[ A-Za-z]{1,20}$/;
    var mobileRegex = /^\d{10}$/;
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var addressRegex = /^[a-zA-Z0-9\s,'-]*$/;

    if (password == "") {
        document.getElementById("password_error").innerHTML = "Please enter password";
        document.getElementById('password').style.borderColor = "red";
        return false;
    } else {
        document.getElementById("password_error").innerHTML = "";
    }

    if (conform_password == "") {
        document.getElementById("confirm_password_error").innerHTML = "Please enter confirm password";
        document.getElementById('confirm_password').style.borderColor = "red";
        return false;
    } else {
        document.getElementById("confirm_password_error").innerHTML = "";
    }

    if (inputs[2].value !== inputs[3].value) {
        alert('Password and confirm password do not match');
        return false;
    }

    if (select.value === '') {
        alert('Please select gender');
        return false;
    }

    if (!checkbox.checked) {
        alert('Please agree to terms and conditions');
        return false;
    }
    alert("successfully registered")
    return true;
}

function firstName() {
    var firstname = document.getElementById("firstname").value;
    var letters = /^[A-Za-z]+[ A-Za-z]{1,20}$/;
    console.log(this.firstname.value);
    if (firstname == "") {
        document.getElementById("firstname_error").innerHTML = "pls enter first name";
        document.getElementById('firstname').style.borderColor = "red";
        return false;
    } else if (!letters.test(firstname)) {
        document.getElementById("firstname_error").innerHTML = "enter valid first name";
        document.getElementById('firstname').style.borderColor = "red";
    } else {
        document.getElementById("firstname_error").innerHTML = "";
        document.getElementById('firstname').style.borderColor = "green";
    }
}

function lastName() {
    var lastname = document.getElementById("lastname").value;
    var letters = /^[A-Za-z]+[ A-Za-z]{1,20}$/;
    console.log(this.lastname.value);
    if (lastname == "") {
        document.getElementById("lastname_error").innerHTML = "pls enter last name";
        document.getElementById('lastname').style.borderColor = "red";
        return false;
    } else if (!letters.test(lastname)) {
        document.getElementById("lastname_error").innerHTML = "enter valid last name";
    } else {
        document.getElementById("lastname_error").innerHTML = "";
        document.getElementById('lastname').style.borderColor = "green";
    }
}

function mail() {
    var email = document.getElementById("email").value;
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    console.log(this.email.value);
    if (email == "") {
        document.getElementById("email_error").innerHTML = "Please enter email";
        return false;
    } else if (!emailRegex.test(email)) {
        document.getElementById("email_error").innerHTML = "enter valid mail";
        document.getElementById('email').style.borderColor = "red";
        return false;
    } else {
        document.getElementById("email_error").innerHTML = "";
        document.getElementById('email').style.borderColor = "green";
    }
}

function phoneNumber() {
    var mobile = document.getElementById("mobile").value;
    var mobileRegex = /^\d{10}$/;
    console.log(this.mobile.value);
    if (mobile == "") {
        document.getElementById("mobile_error").innerHTML = "Please enter mobile number";
        return false;
    } else if (!mobileRegex.test(mobile)) {
        document.getElementById("mobile_error").innerHTML = "enter valid mobile number";
        document.getElementById('mobile').style.borderColor = "red";
        return false;
    } else {
        document.getElementById("mobile_error").innerHTML = "";
        document.getElementById('mobile').style.borderColor = "green";
    }
}

function addressValidation() {
    var address = document.getElementById("address").value;
    var addressRegex = /^[a-zA-Z0-9\s,'-]*$/;
    console.log(this.address.value);
    if (address == "") {
        document.getElementById("address_error").innerHTML = "Please enter address";
        return false;
    } else if (!addressRegex.test(address)) {
        document.getElementById("address_error").innerHTML = "enter valid address";
        document.getElementById('address').style.borderColor = "red";
        return false;
    } else {
        document.getElementById("address_error").innerHTML = "";
        document.getElementById('address').style.borderColor = "green";
    }
}



