
const nameChar = document.getElementById('name');
const statusChar = document.getElementById('status');
const loc = document.getElementById('location');
const gender = document.getElementById('gender');
const image = document.getElementById('image');



const search = document.querySelector('form');

search.addEventListener('submit', (e)=>{

    const user = search.character.value.trim(); 

    getChar(user).then(data=>{

       
        console.log(data);
        
        nameChar.innerText += " " + data.name;
        statusChar.innerText += " " + data.status;
        loc.innerText += " " + data.location.name;
        gender.innerText += " " + data.gender;
        image.setAttribute("src", data.image);
        
        
        
        }).catch(err=>{
            console.log(err);
        });

        e.preventDefault();

       
})





// const data = prompt("Enter name: ");

