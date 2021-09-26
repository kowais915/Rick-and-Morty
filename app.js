
const nameChar = document.getElementById('name');
const statusChar = document.getElementById('status');
const loc = document.getElementById('location');
const gender = document.getElementById('gender');
const image = document.getElementById('image');

const div = document.getElementById('charCard');



const search = document.querySelector('form');

search.addEventListener('submit', (e)=>{


    if(div.classList.contains('d-none')){

        div.classList.remove('d-none');
    }

    const user = search.character.value.trim(); 

    getChar(user).then(data=>{
        

       
        console.log(data);

     
        
        nameChar.innerText = "Name:  " + data.name;
        statusChar.innerText = "Status: " + data.status;
        loc.innerText = "Location: " + data.location.name;
        gender.innerText = "Gender: " + data.gender;
        image.setAttribute("src", data.image);
        
        
        
        }).catch(err=>{
            console.log(err);
        });



        e.preventDefault();

       
})





// const data = prompt("Enter name: ");

