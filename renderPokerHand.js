
function renderPokerHand(pokerHand) {
    // HINT: You can use <img /> tags that point to the card images in the /cards folder
    var hand=pokerHand.map(function(i){
        return `
            <div style='margin:5px;' class="text-center">
                <img src="cards/${i.value}${i.suit}.png" width="70">

            </div>
    `
        
    })

    return `
    <div class='d-flex flex-row mt-5'>

    ${hand.join('')}
    </div>
    
    
    
    `
    
    

}

function pokerHand() {
    var content = document.getElementById('content');

    var pokerHandAbstraction = [
        {
            value: "K",
            suit: "C"
        },
        {
            value: "K",
            suit: "D"
        },
        {
            value: "9",
            suit: "S"
        },
        {
            value: "2",
            suit: "H"
        },
        {
            value: "9",
            suit: "H"
        }
    ];

    content.innerHTML = renderPokerHand(pokerHandAbstraction);

}