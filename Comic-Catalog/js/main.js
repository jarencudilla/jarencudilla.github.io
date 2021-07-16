const api_key = '10219361869334047';
const apiUrl = 'https://superheroapi.com/api.php/'+api_key+'/search/';


const searchQuery = document.getElementById('search-data'); searchQuery.addEventListener('keyup', (e)=> {
    const searchString = e.target.value;
    console.log("Querying Database: ",searchString);
    if (searchString.length < 2){    
        document.getElementById('results').innerHTML = 'Please input 3 or more letters for a better search experience';
    }
    else{
        searchHero(searchString);
    }
});

function getSpotlightHero(data) {
    let randomChar = data.id;
    randomChar = (Math.floor(Math.random() * 731) + 1) 
    document.getElementById('data-container1').name = randomChar;

    console.log(randomChar);

    var image = document.getElementById("image1");
    image.firstElementChild.src = `${data.image.url}`;

    var combat = document.getElementsByClassName('combat');
    combat[0].innerHTML = `${data.powerstats.combat}`;
    combat[0].style = `width: ${data.powerstats.combat}%;`;

    var durability = document.getElementsByClassName('durability');
    durability[0].innerHTML = `${data.powerstats.durability}`;
    durability[0].style = `width: ${data.powerstats.durability}%;`;

    var intelligence = document.getElementsByClassName('intelligence');
    intelligence[0].innerHTML = `${data.powerstats.intelligence}`;
    intelligence[0].style = `width: ${data.powerstats.intelligence}%;`;

    var power = document.getElementsByClassName('power');
    power[0].innerHTML = `${data.powerstats.power}`;
    power[0].style = `width: ${data.powerstats.power}%;`;

    var speed = document.getElementsByClassName('speed');
    speed[0].innerHTML = `${data.powerstats.speed}`;
    speed[0].style = `width: ${data.powerstats.speed}%;`;

    var strength = document.getElementsByClassName('strength');
    strength[0].innerHTML = `${data.powerstats.strength}`;
    strength[0].style = `width: ${data.powerstats.strength}%;`;

    document.getElementById('appearance').innerHTML = showData(data.appearance);
    document.getElementById('biography').innerHTML = showData(data.biography);
    document.getElementById('occupation').innerHTML = showData(data.work);
    document.getElementById('connections').innerHTML = showData(data.connections);

}

async function searchHero(searchString){
    
    let response = await fetch(apiUrl+searchString);
    if (response.ok) { 
        getSearchQuery(await response.json());
    }
    else {
        alert("HTTP-Error: " + response.status);
    }
}

function getSearchQuery(data){
    if(data.response=='error' || data.results.length === 0){
        document.getElementById('results').innerHTML = data.error;   
    }
    else{
       
        var results = document.getElementById('results');
        results.remove();

    
        var result_container = document.getElementById('result-container');
        var results = document.createElement('DIV');
        results.id = 'results';
        result_container.appendChild(results);
        
     
        data.results.forEach((element) => {
            results.appendChild(charProfile(element));
        });
    }
}


function charProfile(data){
    var cardContainer = document.createElement('DIV');
    cardContainer.className = 'card-container center';
    cardContainer.id = data.id;

    cardContainer.innerHTML = `
        <div class="card-img-container">
            <img src="${data.image.apiUrl}">
        </div>
        <div id="details_btn" class="card-name">${data.name}</div>
    `
    return cardContainer;
}

function customAlert(type, message){
    var element = document.getElementsByClassName(type);
    element[0].innerHTML = message;
    element[0].style.visibility = "visible"
    setTimeout(() => {
        element[0].style.visibility = "hidden";
    }, 1500);
}