
function renderRestaurants(restaurants) {
    // HINT: You can use <img /> tags that point to these playing card images: 
    // https://commons.wikimedia.org/wiki/Category:SVG_playing_cards

    var dollar='&dollar;'

    var whole=restaurants.map(function(i){
        return `
        <div style='margin:10px; background-color:gray; padding:20px;'class=" m-2 mt-5 mb-5">
           <h2>${i.name}</h2>
           <p style='color:lightgray;'>${i.type}</p>
           <h2 style="color:lightgreen;">${dollar.repeat(i.priceRating)}</h2>
        </div>
    `




    })



    return `
    
    <div style=' background:lightgray;'class="d-flex justify-content-center">

        ${whole.join('')}
    
    
    </div>`
   
}

function restaurants() {
    var content = document.getElementById('content');

    var restaurantsAbstraction = [
        {
            name: "McDonald's",
            type: "Fast Food",
            priceRating: 1
        },
        {
            name: "Gunshow",
            type: "Date Night Dining",
            priceRating: 5
        },
        {
            name: "Iron Age",
            type: "Korean BBQ",
            priceRating: 4
        },
    ];

    content.innerHTML = renderRestaurants(restaurantsAbstraction);

}