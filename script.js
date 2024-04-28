//if user types keyword in search bar we have to fetch our images and show them on the screen. we are going to use a fetch api from unsplash.com click on new api

//here we are going to install the api key inside a variable

const accessKey = "4HHun0A_Wzj1L9sHJ_WJa14R-4ZknJDIxCHx1NgWdXY"

//now that i have the access key we have to take all the important elements from the html and store theose elements inside variables in the dc script file. need to target the search element and the search results from the html and display results to the image container. also need to target the show more button in the html to show more images when a search result happens.

//first store the input section

const formEl = document.querySelector("form")
//next work with the input section for search bar using the search input id from html
const inputEl = document.getElementById("search-input")
//now have to get the image container
//target the class name .search-results from the html
const searchResults = document.querySelector(".search-results")
//next to import the show more button that currently isnt displayed.
const showMore = document.getElementById("show-more-button")

//above was importing all the important elements from the html

let inputData = ""
let page = 1;

//now on to function
//next the input data is stored inside the input section so if a user types a keyword the search bar the api will take that keyword and based on that keyword the api will fetch images from unsplash.com so will need to add a dynamic url. so add a const variable called url using backticks
function searchImages(){
    inputData = inputEl.value;
    const url = `https://api.unslash.com/search/photos?page=${page}&query=${inputData}&client_id${accessKey}`
}
