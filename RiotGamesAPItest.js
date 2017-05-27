document.addEventListener('DOMContentLoaded', bindButtons);

function bindButtons() {
	document.getElementById('formSubmit').addEventListener('click', function(event){

var req = new XMLHttpRequest();
var apiKey = 'RGAPI-1337dd9f-c21e-4cc8-970f-e5aca0f35820';
var URLhost = 'https://na1.api.riotgames.com//lol/summoner/v3/summoners/by-name/';
var summonerName = document.getElementById("searchQ").value;
var combinedURL = URLhost + summonerName + '?api_key=' + apiKey;


req.open("GET", combinedURL, true);

req.addEventListener('load',function(){
  if(req.status >= 200 && req.status < 400){
    var response = JSON.parse(req.responseText);
    console.log(response);
    formResponse(response); //added
  } else {
    console.log('Error in network request: ' + req.statusText);
  }
});
req.send();
event.preventDefault();
});

  document.getElementById('formSubmit').addEventListener('click', function(event){

var req = new XMLHttpRequest();
var apiKey = 'RGAPI-1337dd9f-c21e-4cc8-970f-e5aca0f35820';
var URLhost = 'https://na1.api.riotgames.com//lol/league/v3/positions/by-summoner/';
var summonerID = '76812932';
var combinedURL = URLhost + summonerID + '?api_key=' + apiKey;


req.open("GET", combinedURL, true);

req.addEventListener('load',function(){
  if(req.status >= 200 && req.status < 400){
    var response = JSON.parse(req.responseText);
    console.log(response);
    formResponse(response); 
  } else {
    console.log('Error in network request: ' + req.statusText);
  }
});
req.send();
event.preventDefault();
});


document.getElementById('regionSubmit').addEventListener('click', function(event){


var req = new XMLHttpRequest();
var apiKey = 'RGAPI-1337dd9f-c21e-4cc8-970f-e5aca0f35820';
var URLhost = 'https://na1.api.riotgames.com/lol/status/v3/shard-data';
var combinedURL = URLhost + '?api_key=' + apiKey;
console.log('combinedURL');

req.open("GET", combinedURL, true);

req.addEventListener('load',function(){
  if(req.status >= 200 && req.status < 400){
    var response = JSON.parse(req.responseText);
    console.log(response);
    regionResponse(response); 

  } else {
    console.log('Error in network request: ' + req.statusText);
  }
});
req.send();
event.preventDefault();
});
};

function formResponse(response) {
	document.getElementById('out-name').textContent = response.name;
	document.getElementById('out-id').textContent = response.id;
	document.getElementById('out-level').textContent = response.summonerLevel;
  document.getElementById('out-queue').textContent = response[0].queueType;
  document.getElementById('out-tier').textContent = response[0].tier;
  document.getElementById('out-rank').textContent = response[0].rank;
  document.getElementById('out-wins').textContent = response[0].wins;
  document.getElementById('out-losses').textContent = response[0].losses;
		console.log(response);

}

function regionResponse(response) {
  document.getElementById('out-region').textContent = response.name;
  document.getElementById('out-status').textContent = response.services[0].status;
}




 

