//if user types keyword in search bar we have to fetch our images and show them on the screen. we are going to use a fetch api from unsplash.com click on new api

//here we are going to install the api key inside a variable

const accessKey = "4HHun0A_Wzj1L9sHJ_WJa14R-4ZknJDIxCHx1NgWdXY";

//now that i have the access key we have to take all the important elements from the html and store theose elements inside variables in the dc script file. need to target the search element and the search results from the html and display results to the image container. also need to target the show more button in the html to show more images when a search result happens.

//first store the input section

const formEl = document.querySelector("form");
//next work with the input section for search bar using the search input id from html
const inputEl = document.getElementById("search-input");
//now have to get the image container
//target the class name .search-results from the html
const searchResults = document.querySelector(".search-results");
//next to import the show more button that currently isnt displayed.
const showMore = document.getElementById("show-more-button");

//above was importing all the important elements from the html

let inputData = "";
let page = 1;

//now on to function
//next the input data is stored inside the input section so if a user types a keyword the search bar the api will take that keyword and based on that keyword the api will fetch images from unsplash.com so will need to add a dynamic url. so add a const variable called url using backticks
async function searchImages() {
    inputData = inputEl.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

    //create a variable for the response and fetch data from inside url variable
    const response = await fetch(url);
    //then we need to get that data and convert that data into a json format
    const data = await response.json();
    //now to convert the json data into images and create a response variable
    const results = data.results;

    if (page === 1){
        searchResults.innerHTML = "";
    }
    //to display images one at a time need to map resultsv ariable. have to push all the data inside the search results template from html. everytime a new image is searched have to generate new boxes for new images and for those images gonna use pre built templates created in html. use const to create a container to hold the images. use const imageWrapper to create the div using document.createElement. then push the class name of search result into the created div by using imageWrapper.classlist.add to add the class name of search result. then inside of search result in html there is an image element. so use const to create another variable. so use const image = document.createElement('img')
    //below will attach itself to the search-result div
    results.map((result) => {
       const imageWrapper = document.createElement("div");
       imageWrapper.classList.add("search-result");
       const image = document.createElement("img");
       //now to add data inside the src and alt section from html so target the img.src
       image.src = result.urls.small;
       image.alt = result.alt_description;
       //to handle the anchor tag
       const imageLink = document.createElement("a");
       //inside the anchor tag from html have a href and target section
       imageLink.href = result.links.html;
       //for the image link the target is the href and will get results from links.html
       imageLink.target = "_blank";
       //to push the text inside the link
       imageLink.textContent = result.alt_description;
       //text content will be getting from result.alt_description

       //now to append the elements above inside the html page so using appendChild
       imageWrapper.appendChild(image);
       imageWrapper.appendChild(imageLink);
       searchResults.appendChild(imageWrapper);
    });

    page++; //if page number shows images more than one then will diplay the more button so user can go to page number two
    if(page > 1){
      showMore.style.display = "block";
      //inside stylesheet display is none on show-more button. now its sayign if results are greater than one the show more button will display as block
    }

}

//with all the above the page still wont work unless adding an event listener targeting the form element created at the top. add an event listener called submit button and pass the event to do that create an arrow function. to prevent the default event

formEl.addEventListener("submit", (event) => {
    event.preventDefault()
    page = 1;
    //now call the search image function from above
    formEl.addEventListener("submit", (event) => {
        event.preventDefault()
        page = 1;
        searchImages();
    });

    showMore.addEventListener("click", () => {
       searchImages();
    });
});
