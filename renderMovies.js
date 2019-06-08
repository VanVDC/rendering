
function renderMovies(movies) {
    
    var whole=movies.map(function(i){

        return `
        <div style="background-color:gray; "class="d-flex text-center mt-5">
            
            <img src='${i.poster}' alt='movies poster'>

            <div style="color:white;"> 
            
            <h1>${i.title}</h1>

            <p>${i.year}</p>

            <h2>IMDB: ${i.imdbRating}/10</h2>
            <h2>Rotten Tomatoes: ${i.rottenTomatoesRating*100}%</h2>


            
            
            </div>
            

        </div>
    `

    })

    return whole.join('');
        
      
    
    


   
}

function movies() {
    var content = document.getElementById('content');

    var moviesAbstraction = [
        {
            title: "The Dark Knight",
            year: 2008,
            imdbID: "tt0468569",
            poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
            imdbRating: 9,
            rottenTomatoesRating: 0.94
        },
        {
            title: "The Dark Knight Rises",
            year: 2012,
            imdbID: "tt1345836",
            poster: "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_SX300.jpg",
            imdbRating: 8,
            rottenTomatoesRating: 0.82
        },
        {
            title: "The Incredibles",
            year: 2004,
            imdbID: "tt0317705",
            poster: "https://m.media-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@._V1_SX300.jpg",
            imdbRating: 9,
            rottenTomatoesRating: 0.91
        }
    ]

    content.innerHTML = renderMovies(moviesAbstraction);

}