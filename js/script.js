// DOM ELEMENTS 
const imgElm = document.querySelector('.img')
const infoElm = document.querySelector('.info')

axios.get('https://jsonplaceholder.typicode.com/photos?_limit=6')
  .then(function (response) {
    console.log(response.data)
    const info = response.data
    info.forEach(function (info) {
    infoElm.innerHTML += `<div class="info">
                            <p>${info.title}</p>
                        </div>`;
  });
  });