
function renderCircles(circles) {
    // HINT: You probably need to write a for loop!
    //       Or, if you're feeling fancy, use .map() 
    
    var whole=circles.map (function(i){  
        return `
       <div style="width:${i.radius*2}px;height:${i.radius*2}px; background-color:${i.color}; border-radius:50%"; class="text-center mt-5">
           
        </div>
    ` 
    });
    return whole.join('');

}

function circles() {
    var content = document.getElementById('content');

    var circlesAbstraction = [
        {
            radius: 50,
            color: "#FF00FF"
        },
        {
            radius: 30,
            color: "#FF99AA"
        },
        {
            radius: 60,
            color: "#0000FF"
        },
        {
            radius: 10,
            color: "#000000"
        },
    ];

    content.innerHTML = renderCircles(circlesAbstraction);

}