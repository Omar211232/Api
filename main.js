var myhttp = new XMLHttpRequest;
myhttp.open('GET', `https://api.themoviedb.org/3/trending/movie/week?api_key=f1aca93e54807386df3f6972a5c33b50`);
myhttp.send();
var trendingMovies = [];

myhttp.addEventListener('readystatechange', function () {
    if (myhttp.readyState == 4 && myhttp.status == 200) {
        trendingMovies = JSON.parse(myhttp.response).results; 
        displayItems();

    }
})

function displayItems() {
    var cartona = ``;
    for (var i = 0; i < trendingMovies.length; i++) {
        cartona += ` 
    <div class="col-md-3"> 
                <div class="post">  
                    <img src='https://image.tmdb.org/t/p/w500${trendingMovies[i].backdrop_path}' class='w-100'/>
                    <h4>${trendingMovies[i].title}</h4> 
                    <p>${trendingMovies[i].overview}</p> 

                </div> 

            </div> `
    } 
    document.getElementById('rowData').innerHTML=cartona ;  

}


