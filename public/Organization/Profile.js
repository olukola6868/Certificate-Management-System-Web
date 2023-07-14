var id = localStorage.getItem("loginid");

var logo = document.getElementById("Logo");
var oName = document.getElementById("name");
var oDescription = document.getElementById("description");
var city = document.getElementById("city");
var state = document.getElementById("state");
var localGovernment = document.getElementById("lg");
var Address = document.getElementById("Address")
var phoneNumber = document.getElementById("phone");
var Email = document.getElementById("email");
var cac = document.getElementById("CAC")

function getNoteByid(){
    fetch(`http://localhost:5070/api/Organization/Detail/${id}`)
    .then(data => data.json())
    .then(response => {
        console.log(response)
        oName.value = response.data.organizationName;
        oDescription.value = response.data.organizationDescription;
        city.value = response.data.city;
        state.value = response.data.state;
        localGovernment.value = response.data.localGovernment;
        Address.value = response.data.address;
        phoneNumber.value = response.data.phoneNumber;
        Email.value = response.data.emailAddress;
        logo.innerHTML = `<img src="http://127.0.0.1:5501/wwwroot/Logo/${response.data.logo}" alt="Logo" style="border-radius: 50%; height: 50px; width: 50px;">`
        cac.innerHTML = `<img src="http://127.0.0.1:5501/wwwroot/CAC/${response.data.cac}" alt="CAC">`
    })
}
getNoteByid();



const myform = document.querySelector("#update-form");
myform.addEventListener('submit', (x) => {
  x.preventDefault();
  console.log(myform);

  let sendForm = new FormData(myform);
  console.log(sendForm.get("organizationname"));

  fetch(`http://localhost:5070/api/Organization/UpdateOrganization/${id}`,
    {
      method: "PUT",
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


