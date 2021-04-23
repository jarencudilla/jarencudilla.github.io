//Superhero API
const SHaccess_token = '10223986795873203';
const SHapi_url = 'https://superheroapi.com/api.php/'+SHaccess_token+'/';

//Comicvine API
const CVaccess_token ='e298ac2c9f4737d651ae9c89bae70bd5d1f285da';
const CVapi_url = 'http://comicvine.gamespot.com/api';

const InFaves = './images/green_check_mark.png';
const notInFaves = './images/red_x_mark.png';

async function getFaves(){
    const id = getID();
    const data = await getInfo(id);
    createProfilepage(data);
    // spotlight(data);
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

function getID(){
    const url = location.search;
    return url.substring(url.indexOf('=')+1);
}

function createProfilepage(data){
    document.getElementById('data-container').name = data.id;
    var image = document.getElementById('image');
    image.firstElementChild.src = `${data.image.url}`;
    // var faves = JSON.parse(localStorage.getItem('myFaves'));
    // if(faves.indexOf(data.id) != -1){
    //     image.lastElementChild.src = InFaves;
    // }
    // else{
    //     image.lastElementChild.src = notInFaves;
    // }
    var combat = document.getElementsByClassName('combat');
    combat[0].innerHTML = `${data.powerstats.combat}`;
    combat[0].style = `width: ${data.powerstats.combat}%;`;
    var strength = document.getElementsByClassName('strength');
    strength[0].innerHTML = `${data.powerstats.strength}`;
    strength[0].style = `width: ${data.powerstats.strength}%;`;
    var power = document.getElementsByClassName('power');
    power[0].innerHTML = `${data.powerstats.power}`;
    power[0].style = `width: ${data.powerstats.power}%;`;
    var speed = document.getElementsByClassName('speed');
    speed[0].innerHTML = `${data.powerstats.speed}`;
    speed[0].style = `width: ${data.powerstats.speed}%;`;
    var intelligence = document.getElementsByClassName('intelligence');
    intelligence[0].innerHTML = `${data.powerstats.intelligence}`;
    intelligence[0].style = `width: ${data.powerstats.intelligence}%;`;
    var durability = document.getElementsByClassName('durability');
    durability[0].innerHTML = `${data.powerstats.durability}`;
    durability[0].style = `width: ${data.powerstats.durability}%;`;

    document.getElementById('biography').innerHTML = formatJSONData(data.biography);
    document.getElementById('connections').innerHTML = formatJSONData(data.connections);
    document.getElementById('appearance').innerHTML = formatJSONData(data.appearance);
}

function formatJSONData(jsonData){
    var str='';
    for (var key in jsonData){
        str += 
            '<p><b>'+key.charAt(0).toUpperCase()+key.slice(1) +'</b> : '+ jsonData[key]+ '</p>';
    }
    return str;
}

// function spotlight(data){
//     document.getElementById('data-container1').name = data.id;
//     var image = document.getElementById('image1');
//     image.firstElementChild.src = `${data.image.url}`;
//     // var faves = JSON.parse(localStorage.getItem('myFaves'));
//     // if(faves.indexOf(data.id) != -1){
//     //     image.lastElementChild.src = InFaves;
//     // }
//     // else{
//     //     image.lastElementChild.src = notInFaves;
//     // }
//     var combat = document.getElementsByClassName('combat1');
//     combat[0].innerHTML = `${data.powerstats.combat}`;
//     combat[0].style = `width: ${data.powerstats.combat}%;`;
//     var strength = document.getElementsByClassName('strength1');
//     strength[0].innerHTML = `${data.powerstats.strength}`;
//     strength[0].style = `width: ${data.powerstats.strength}%;`;
//     var power = document.getElementsByClassName('power1');
//     power[0].innerHTML = `${data.powerstats.power}`;
//     power[0].style = `width: ${data.powerstats.power}%;`;
//     var speed = document.getElementsByClassName('speed1');
//     speed[0].innerHTML = `${data.powerstats.speed}`;
//     speed[0].style = `width: ${data.powerstats.speed}%;`;
//     var intelligence = document.getElementsByClassName('intelligence1');
//     intelligence[0].innerHTML = `${data.powerstats.intelligence}`;
//     intelligence[0].style = `width: ${data.powerstats.intelligence}%;`;
//     var durability = document.getElementsByClassName('durability1');
//     durability[0].innerHTML = `${data.powerstats.durability}`;
//     durability[0].style = `width: ${data.powerstats.durability}%;`;
//     document.getElementById('biography1').innerHTML = formatJSONData(data.biography);
//     document.getElementById('connections1').innerHTML = formatJSONData(data.connections);
//     document.getElementById('appearance1').innerHTML = formatJSONData(data.appearance);
// }