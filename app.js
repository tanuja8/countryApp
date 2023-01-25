const searchBtn= document.querySelector('.search-btn');
const inputBar= document.querySelector('.input-bar');
const result=document.querySelector('.result')

searchBtn.addEventListener('click',()=>{
fetch(`https://restcountries.com/v3.1/name/${inputBar.value}`)
.then(res => res.json())
.then((data) => displayCountries(data))
});
const displayCountries =(data ) =>{
    console.log(data)
    data.forEach((country) =>{
        const div=document.createElement("div");
        div.className="card";
        div.innerHTML=`<img src="${country.flags.png}" class="card-img-top" alt="...">
        <div class="card-body">
         <h2 class ="card.text">${country.name.common}</h2>
         </div>
        `;
        result.appendChild(div)
    });
};