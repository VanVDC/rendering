
function renderNametags(nametags) {
    
    var whole=nametags.map(function(i){
        
        
        return `
        <div class=" border text-center w-50 text-center mx-auto p-3 mt-2">
            <p style='color: white; background-color: blue;'>Hello, my name is:</p>
            ${i}
        </div>
    `



    })

    return whole.join('');
    
   
}

function nametags() {
    var content = document.getElementById('content');

    var nametagsAbstraction = [
       "Kamilah",
       "Kim",
       "Stuart",
       "Ron",
       "Krissy"
    ]

    content.innerHTML = renderNametags(nametagsAbstraction);

}