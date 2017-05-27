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
    formResponse(response); 
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

}


 

