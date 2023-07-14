var organizationid = localStorage.getItem("loginid");
const myform = document.querySelector("#certificate-form");
myform.addEventListener('submit', (x) => {
  x.preventDefault();
  console.log(myform);
  // debug
  let sendForm = new FormData(myform);
  console.log(sendForm);
  fetch(`http://localhost:5070/api/Certificate/CreateCertificate/${organizationid}`,
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
        window.alert(value.message);
      }
      else {
        window.alert(value.message);
      }
    })
    .catch((res) => {
      window.alert(res)
    })

})
