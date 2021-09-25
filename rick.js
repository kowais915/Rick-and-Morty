const getRick = async()=>{


    const base  = "https://rickandmortyapi.com/api/character/1";
    const response = await fetch(base);
    const data = await response.json();


    console.log(data);
    return data;
}

getRick();