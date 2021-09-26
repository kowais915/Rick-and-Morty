
const name = document.getElementById('name');
const status = document.getElementById('status');
const loc = document.getElementById('location');
const gender = document.getElementById('gender');
const image = document.getElementById('image');





const data = prompt("Enter name: ");

getChar(data).then(data=>{

console.log(data);

name.innerText += " " + data.name;
status.innerText += " " + data.status;
loc.innerText += " " + data.location.name;
gender.innerText += " " + data.gender;
image.setAttribute("src", data.image);



}).catch(err=>{
    console.log(err);
});