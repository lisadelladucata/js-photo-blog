// DOM ELEMENTS 
const imgElm = document.querySelectorAll('.img')
const infoElm = document.querySelectorAll('.info')

console.log(infoElm , imgElm)

axios.get('https://jsonplaceholder.typicode.com/photos?_limit=6')
  .then(function (response) {
    let counter = 0
    const info = response.data
    info.forEach(function (info) {
    infoElm[counter].innerHTML = `<div class="info">
                                    <p>${info.title}</p>
                                </div>`;
    imgElm[counter].innerHTML = `<div class="img">
                                    <img src="${info.url}" alt="prova">
                                </div>`;
    counter++;
  });

  const overlayCard = document.querySelectorAll(".col")
  const hidden = document.querySelector('.hidden')
  const overlayBtn = document.querySelector(".btn-overlay")
  const ImgProveOverlay = hidden.querySelector('img')

  overlayCard.forEach((overlayCard) => {
    overlayCard.addEventListener("click", () =>{
      const overlayImg = overlayCard.querySelector(".img img").src;
      ImgProveOverlay.src = overlayImg;

      hidden.style.display = 'block';
    })
  });
  overlayBtn.addEventListener("click", () => {
    hidden.style.display= 'none'
  });
  });