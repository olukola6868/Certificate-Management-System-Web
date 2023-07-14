function ApproveOrganization(id){
    window.alert(id)
    fetch(`http://localhost:5070/api/Organization/Approve/${id}`)
    .then(data => data.json())
    .then(response => window.alert(response.message))
}

// ApproveOrganization();   