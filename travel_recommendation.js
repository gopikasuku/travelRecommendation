const btnSearch = document.getElementById('btnSearch');
const resultDiv = document.getElementById('result');
const btnreset = document.getElementById('btnreset');
function searchTravel(){
    const input = document.getElementById('conditionInput').value.toLowerCase();
    clearResultDiv();
    fetch('travel_recommendation_api.json')
      .then(response => response.json())
      .then(data => {
        const dataRandom = Object.keys(data).find(key => input.toLowerCase().search(key) > -1);
        const countries = data.countries.find(item => item.name.toLowerCase() === input);
        const temples = data.temples.find(item => item.name.toLowerCase() === input);
        const beaches = data.beaches.find(item => item.name.toLowerCase() === input);
        if (countries) {
          //const cities = countries.cities.join(', ');
          resultDiv.innerHTML += `<h2>${countries.name}</h2>`;
          for(i=0;i<countries.cities.length;i++){
            resultDiv.innerHTML += `<h3>${countries.cities[i].name}</h2>`;
            resultDiv.innerHTML += `<img src="${countries.cities[i].imageUrl}" alt="hjh">`;
            resultDiv.innerHTML += `<p><strong>Description:</strong> ${countries.cities[i].description}</p>`;
          }
          
        //   resultDiv.innerHTML += `<img src="${condition.imagesrc}" alt="hjh">`;

        //   resultDiv.innerHTML += `<p><strong>Symptoms:</strong> ${symptoms}</p>`;
        //   resultDiv.innerHTML += `<p><strong>Prevention:</strong> ${prevention}</p>`;
        //   resultDiv.innerHTML += `<p><strong>Treatment:</strong> ${treatment}</p>`;
        } 
        else if(temples){
            resultDiv.innerHTML += `<h2>${temples.name}</h2>`;
          
            resultDiv.innerHTML += `<h3>${temples.name}</h2>`;
            resultDiv.innerHTML += `<img src="${temples.imageUrl}" alt="hjh">`;
            resultDiv.innerHTML += `<p><strong>Description:</strong> ${temples.description}</p>`;
          
        }
        else if(beaches){
            resultDiv.innerHTML += `<h2>${beaches.name}</h2>`;
          
            resultDiv.innerHTML += `<h3>${beaches.name}</h2>`;
            resultDiv.innerHTML += `<img src="${beaches.imageUrl}" alt="hjh">`;
            resultDiv.innerHTML += `<p><strong>Description:</strong> ${beaches.description}</p>`;
          
        }
        else if(dataRandom){
            if(dataRandom == "temples"){
                resultDiv.innerHTML += `<h2>${dataRandom.name}</h2>`;
          
            resultDiv.innerHTML += `<h3>${dataRandom.name}</h2>`;
            resultDiv.innerHTML += `<img src="${dataRandom.imageUrl}" alt="hjh">`;
            resultDiv.innerHTML += `<p><strong>Description:</strong> ${dataRandom.description}</p>`;
          
            }
            if(dataRandom == "beaches"){
                resultDiv.innerHTML += `<h2>${dataRandom.name}</h2>`;
          
            resultDiv.innerHTML += `<h3>${dataRandom.name}</h2>`;
            resultDiv.innerHTML += `<img src="${dataRandom.imageUrl}" alt="hjh">`;
            resultDiv.innerHTML += `<p><strong>Description:</strong> ${dataRandom.description}</p>`;
          
            }
            if(dataRandom == "countries"){
                resultDiv.innerHTML += `<h2>${dataRandom.name}</h2>`;
                for(i=0;i<dataRandom.length;i++){
                  resultDiv.innerHTML += `<h3>${dataRandom.cities[i].name}</h2>`;
                  resultDiv.innerHTML += `<img src="${dataRandom.cities[i].imageUrl}" alt="hjh">`;
                  resultDiv.innerHTML += `<p><strong>Description:</strong> ${dataRandom.cities[i].description}</p>`;
                }
            }
        }
        else {
          resultDiv.innerHTML = 'Condition not found.';
        }
      })
      .catch(error => {
        console.error('Error:', error);
        resultDiv.innerHTML = 'An error occurred while fetching data.';
      });
  }
  btnSearch.addEventListener('click', searchTravel);
function clearResultDiv(){
    resultDiv.innerHTML = "";
}
btnreset.addEventListener('click',clearResultDiv );