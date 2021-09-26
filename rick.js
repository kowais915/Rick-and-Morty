const getChar = async(name)=>{

   
    const base  = "https://rickandmortyapi.com/api/character/";

    const query = `?name=${name}`
    const response = await fetch(base + query);
    const data = await response.json();


 
   return data.results[0];
}
