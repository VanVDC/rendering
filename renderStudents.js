
function renderStudents(students) {

    var whole=students.map(function(i){
        return `

        
        <div style=" border:solid; width:200px; background-color:${i.isPresent ? 'green' : 'red'};"class="w-responsive text-center mx-auto p-3 mt-0">

           <h3> ${i.name}</h3>
           <p >${i.isPresent ? 'Present' : 'Absent'}</p>
        
        </div>
    `
    })

    return`

    <div class="text-center" >
     <h1>Roll Call!</h1>  
      ${whole.join('')}
      
      </div> 
    
   
    
    `
    
}

function students() {
    var content = document.getElementById('content');

    var studentsAbstraction = [
        {
            name: "Kamilah",
            isPresent: true
        },
        {
            name: "Kim",
            isPresent: true
        },
        {
            name: "Stuart",
            isPresent: false
        },
        {
            name: "Ron",
            isPresent: true
        },
        {
            name: "Krissy",
            isPresent: false
        }
    ]

    content.innerHTML = renderStudents(studentsAbstraction);
}