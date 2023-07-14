const myform = document.querySelector('#sign-up-form');
myform.addEventListener('submit', (x) => {
    x.preventDefault();
    console.log(myform);

    let sendForm = new FormData(myform);
    console.log(sendForm)
    fetch(`http://localhost:5070/api/Organization/CreateOrganization`,
        {
            method: "POST",
            body: sendForm,

        })
        .then((res) => {
            console.log(res);
            return res.json();
        })
        .then(function (value) {
            console.log(value.status);
            if (value.status == true) {
                localStorage.setItem('registrationid', value.data.id);
                location.href = "login.html"
            }
            else {
                window.alert(value.message);
            }

        })
        .catch((res) => {
            window.alert(res)

        })

})

let checkingForPassword = (confirmpassword) => {
    if (confirmpassword != password.value) {
        error.innerText = "Password not match"
    }
    else {
        error.innerText = ""
    }
}

