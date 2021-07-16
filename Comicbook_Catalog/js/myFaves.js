const SHaccess_token = '10223986795873203';
const SHapi_url = "https://www.superheroapi.com/api.php/"+SHaccess_token+"/";

const InFaves = './images/green_check_mark.png';
const notInFaves = './images/red_x_mark.png';

function getFaves(){
    var faves = JSON.parse(localStorage.getItem('myFaves'));
    if(faves.length==0){
        document.getElementById('results').innerHTML = "Add your favourite characters";
        return;
    }
    document.getElementById('results').innerHTML = '';
    faves.forEach((id) => {
        getInfo(id);
    });
}

getFaves();

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




//async function call api 
async function getInfo(id){
    let response = await fetch(SHapi_url+id);
    if(response.ok){
        var jsonData = await response.json();
        console.log(jsonData);
        return jsonData;
    }
    else{
        alert("HTTP-Error: ",response.status);
    }
}

function createProfilepage(data){
    var cardContainer = document.createElement('DIV');
    cardContainer.className = 'card-container center';
    cardContainer.id = data.id;
    var srcFav;
    var faves = JSON.parse(localStorage.getItem('myFaves'));
    if(faves.indexOf(data.id) !== -1){
        srcFav = InFaves;
    }
    else{
        srcFav = notInFaves;
    }
    cardContainer.innerHTML = `
        <div class="card-img-container">
            <img src="${data.image.url}">
        </div>
        <div id="details_btn" class="card-name">${data.name}</div>
        <div class="card-btns">
            <img id="add_fav_btn" src="${srcFav}" width="25">
        </div>
        <div id="stats-container">
            <div id="stat-names">
                <span>Combat</span>
                <span>Strength</span>
                <span>Power</span>
                <span>Speed</span>
                <span>Intelligence</span>
                <span>Durability</span>
            </div>
            <div id="stat-bars">
                <div class="bar-container">
                    <div class="bar combat" style="width: ${data.powerstats.combat}%;">${data.powerstats.combat}</div>
                </div>
                <div class="bar-container">
                    <div class="bar strength" style="width: ${data.powerstats.strength}%;">${data.powerstats.strength}</div>
                </div>
                <div class="bar-container">
                    <div class="bar power" style="width: ${data.powerstats.power}%;">${data.powerstats.power}</div>
                </div>
                <div class="bar-container">
                    <div class="bar speed" style="width: ${data.powerstats.speed}%;">${data.powerstats.speed}</div>
                </div>
                <div class="bar-container">
                    <div class="bar intelligence" style="width: ${data.powerstats.intelligence}%;">${data.powerstats.intelligence}</div>
                </div>
                <div class="bar-container">
                    <div class="bar durability" style="width: ${data.powerstats.durability}%;">${data.powerstats.durability}</div>
                </div>
            </div>
        </div>
    `
    document.getElementById('results').appendChild(cardContainer);
}