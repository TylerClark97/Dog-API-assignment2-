'use scrict'

let numberOfDogs = 3; 

function updateDogNumber(){
    numberOfDogs = document.getElementById("dogQuantity").value; 
    console.log(numberOfDogs); 
}

function getDogImages(){
    fetch(`https://dog.ceo/api/breeds/image/random/${numberOfDogs}`)
    .then( response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert('you done messed up!')); 
}

function displayResults(responseJson){
    console.log('displayResults running'); 
    console.log(responseJson); 
    $('.results').removeClass('hidden');
    $('.image').empty(); 

    for (let i = 0; i < numberOfDogs; i++)
    {
        $('.image').append(`<img src="${responseJson.message[i]}" class="results-img">`)
    }
}


function watchForm(){
    $('form').submit( function(event){
        updateDogNumber(); 
        event.preventDefault(); 
        getDogImages(); 
    });
}

$(function (){
    console.log('app loaded! waiting for submit');
    watchForm(); 
})