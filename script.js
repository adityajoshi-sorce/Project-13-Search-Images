const accesskey = "uJOFFxI3XYMAEkKqB6uCTabrO6lWkY7QvKU9YSXKHWI";

const searchForm = document.getElementById("search-form")
const searchBox = document.getElementById("search-box")
const searchResult = document.getElementById("search-result")
const showMoreButtom = document.getElementById("show-more-button")

let keyword = "";
let page = 1;

async function searchImages(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    if(page === 1){
        searchResult.innerHTML = "";
    }

   const results = data.results;

   results.map((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;   // this two paramaers (urls and small) that taken from api key that are object in api.

        const imageLink = document.createElement("a")
        imageLink.href = result.links.html; // this two paramaers (links and html) that taken from api key that are object in api.

        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
   })

   showMoreButtom.style.display = "block";
}



searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImages()

});

showMoreButtom.addEventListener("click", ()=>{
    page++;
    searchImages()
})
