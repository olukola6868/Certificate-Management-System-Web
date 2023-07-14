
`use strict`
var baseUrl = "http://localhost:5070/api/";
const postRequest = async (url, data) => {
    const fetchBody = {
        headers:{
            "content-Type" : "application/json"
        },
        method: "POST",
        body: JSON.stringify(data)
    }
    const fetching = await fetch(`${baseUrl}${url}`, fetchBody);
    return fetching.json();
}


const getRequest = async (url) => {
    const fetching = await fetch(`${baseUrl}${url}`);
    return fetching.json();
}
