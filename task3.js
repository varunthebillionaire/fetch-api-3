const fetchDataBtn = document.querySelector('#fetchdata');
const result = document.querySelector('#result');

async function getData() {
    result.innerHTML ="loading...";

    try{
        const response = await fetch("https://api.github.com/users/varunthebillionaire");
        const data = await response.json();
        result.innerText = `${data.type} has ${data.public_repos} public repos with name ${data.login}`;

    }catch(err){
        result.innerText ="Error.....";
    }
}

fetchDataBtn.addEventListener('click',getData);