//Superhero API
const SHaccess_token = '10223986795873203';
const SHapi_url = 'https://superheroapi.com/api.php/'+SHaccess_token+'/search/';

// https://superheroapi.com/api.php/10223986795873203/70/image
// https://superheroapi.com/
// https://superheroapi.com/ids.html
// https://comicvine.gamespot.com/api/documentation

//Comicvine API
const CVaccess_token ='e298ac2c9f4737d651ae9c89bae70bd5d1f285da';
const CVapi_url = 'http://comicvine.gamespot.com/api/'+CVaccess_token+'/search/';

const InFaves = './images/green_check_mark.png';
const notInFaves = './images/red_x_mark.png';

function checkLocalStorage(){
    if (localStorage.getItem('myFaves')==null){
        localStorage.setItem('myFaves', JSON.stringify(Array()));
    }
}

checkLocalStorage();

const searchBar = document.getElementById('query-data');
searchBar.addEventListener('keyup', (e)=> {
    const queryStr = e.target.value;
    console.log("Search for a comicbook character ", queryStr);
    if (queryStr.length < 2){      
        document.getElementById('results').innerHTML = 'For a more robust search, please Enter at least 3 letters.';
    }
    else{
        queryHero(queryStr);
    }
});

async function queryHero(queryStr){
    
    // Superhero API Call
    let response = await fetch(SHapi_url+queryStr);
    if (response.ok) { 
        showData(await response.json());
    }
    else {
        alert("HTTP-Error: " + response.status);
    }
}

function showData(data){
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
            results.appendChild(getHero(element));
        });
    }
}

function getHero(data){
    var cardContainer = document.createElement('DIV');
    cardContainer.className = 'card-container center';
    cardContainer.id = data.id;
    var srcFaves;
    var faves = JSON.parse(localStorage.getItem('myFaves'));
    if(faves.indexOf(data.id) !== -1){
        srcFaves = InFaves;
    }
    else{
        srcFaves = notInFaves;
    }
    cardContainer.innerHTML = `
        <div class="panel card-img-container">
            <img src="${data.image.url}">
        </div>
        <div id="details_btn" class="card-name">${data.name}</div>
        <div class="card-btns">
            <img id="add_fav_btn" src="${srcFaves}" width="25">
        </div>
    `
    return cardContainer;
}

document.addEventListener('click', (event) => {
    if(event.target.id == 'details_btn'){
        var id = event.target.parentNode.id;
        window.open('./profile.html'+'?id='+id, "_self");
    }
    
    else if(event.target.id == 'add_fav_btn'){
        var id = event.target.parentNode.parentNode.id;
        var faves = JSON.parse(localStorage.getItem('myFaves'));
        if (faves.indexOf(id) != -1){
            faves = faves.filter((item) => item!=id);
            localStorage.setItem('myFaves',JSON.stringify(faves));
            event.target.src = notInFaves;
            AlertMe('failure','Oh no! Not in favorites');
        }
        else{
            faves.push(id);
            localStorage.setItem('myFaves',JSON.stringify(faves));
            event.target.src = InFaves;
            AlertMe('success','Yey! Added to favorites');
        }
    }
});

function AlertMe(type, message){
    var element = document.getElementsByClassName(type);
    element[0].innerHTML = message;
    element[0].style.visibility = "visible"
    setTimeout(() => {
        element[0].style.visibility = "hidden";
    }, 1500);
}

function spotlight(data){
    var id = 654;
    document.getElementById('data-container1').name = data.id;
    var image = document.getElementById('image1');
    image.firstElementChild.src = `${data.image.url}`;
    // var faves = JSON.parse(localStorage.getItem('myFaves'));
    // if(faves.indexOf(data.id) != -1){
    //     image.lastElementChild.src = InFaves;
    // }
    // else{
    //     image.lastElementChild.src = notInFaves;
    // }
    var combat = document.getElementsByClassName('combat1');
    combat[0].innerHTML = `${data.powerstats.combat}`;
    combat[0].style = `width: ${data.powerstats.combat}%;`;
    var strength = document.getElementsByClassName('strength1');
    strength[0].innerHTML = `${data.powerstats.strength}`;
    strength[0].style = `width: ${data.powerstats.strength}%;`;
    var power = document.getElementsByClassName('power1');
    power[0].innerHTML = `${data.powerstats.power}`;
    power[0].style = `width: ${data.powerstats.power}%;`;
    var speed = document.getElementsByClassName('speed1');
    speed[0].innerHTML = `${data.powerstats.speed}`;
    speed[0].style = `width: ${data.powerstats.speed}%;`;
    var intelligence = document.getElementsByClassName('intelligence1');
    intelligence[0].innerHTML = `${data.powerstats.intelligence}`;
    intelligence[0].style = `width: ${data.powerstats.intelligence}%;`;
    var durability = document.getElementsByClassName('durability1');
    durability[0].innerHTML = `${data.powerstats.durability}`;
    durability[0].style = `width: ${data.powerstats.durability}%;`;
    document.getElementById('biography1').innerHTML = formatJSONData(data.biography);
    document.getElementById('connections1').innerHTML = formatJSONData(data.connections);
    document.getElementById('appearance1').innerHTML = formatJSONData(data.appearance);
}