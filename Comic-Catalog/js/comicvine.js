const cvAPI_key = "e298ac2c9f4737d651ae9c89bae70bd5d1f285da";
const cvAPI_url = "http://comicvine.gamespot.com/api"+cvAPI_key+"/";

// To find a list of volumes based on some text criteria:
// https://comicvine.gamespot.com/api/volumes/?api_key=YOUR-KEY&format=json&sort=name:asc&filter=name:Walking%20Dead
// To find a set of issues based on some text criteria:
// https://comicvine.gamespot.com/api/search/?api_key=YOUR-KEY&format=json&sort=name:asc&resources=issue&query=%22Master%20of%20kung%20fu%22
// To find a single issue based on an ID:
// https://comicvine.gamespot.com/api/issue/4000-14582/?api_key=YOUR-KEY&format=json

function getCVdata() {
    var rndID = Math.floor(Math.random * 10000) + 1;

    let res = await fetch (cvAPI_url + rndID);
    if (res.ok) { 
        getSearchQuery(await res.json());
    }
    else {
        alert("HTTP-Error: " + res.status);
    }
}


