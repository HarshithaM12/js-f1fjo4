/*function getCountryData(countryName){
  return fetch(`https://restcountries.com/v2/name/${countryName}`);
}

function getNeighCountryData(countries){
  const arr = [];
  for(country of countries){
    let p = getCountryData(country)
    .then(res => res.json());
    arr.push(p);
  }
  return Promise.all(arr);
  }

getCountryData('usa')
.then(res => res.json())
.then(data => {
  console.log(data); 
 return getNeighCountryData(data[0].borders);
})
.then(data => 
  console.log(data));*/

function getCountryData(countryName) {
  return fetch(`https://restcountries.com/v2/name/${countryName}`);
}

getCountryData('usa')
  .then((res) => res.json())
  .then((countryData) => {
    console.log(countryData[0]);
  })
  .catch((err) => console.log(err));



function add(a,b){
return a + b;
}
