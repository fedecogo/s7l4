// riferimenti all html
const loadImgBtn = document.getElementById('Load-btn');
const secImgBtn = document.getElementById('Sec-btn');
const row = document.getElementById('row');
const hideMe = function (event) {
    const card = event.target.closest('.card');
    if (card) {
        card.remove(); 
    }
};

const getApi = function () {
    fetch('https://api.pexels.com/v1/search?query=cars', {
        headers: {
            Authorization: 'Tuoj88ATFPoDwMSKMKZVn5RdVpTvvruuzNCV95N9mNdc9qexkjJTQXZT'
        }
    })
        .then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error('Errore nel contattare il server');
            }
        })
        .then((im) => {
            console.log(im)
            createCard(im.photos);
        })
        .catch((err) => {
            console.log('Si è verificato un errore:', err);
        });
};

const getSecApi = function () {
    fetch('https://api.pexels.com/v1/search?query=bike', {
        headers: {
            Authorization: 'Tuoj88ATFPoDwMSKMKZVn5RdVpTvvruuzNCV95N9mNdc9qexkjJTQXZT'
        }
    })
        .then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error('Errore nel contattare il server');
            }
        })
        .then((img_2) => {
            console.log(img_2)
            createCard(img_2.photos);
        })
        .catch((err) => {
            console.log('Si è verificato un errore:', err);
        });
};

const createCard = function (ima) {
    ima.forEach((img) => {
        const newCol = document.createElement('div');
    newCol.classList.add('col', 'col-4');

    const newCard = document.createElement('div');
    newCard.classList.add('card');
    newCard.innerHTML = `
        <img src="${img.src.large}" class="card-img-top">
        <div class="card-body d-flex flex-column justify-content-between">
        
           <a href="index.html" class="btn btn-outline-info mb-2">info</a>

           <button class="btn btn-outline-warning" onclick="hideMe(event)">hide</button>
            <p>${img.id}</p>
           </div>
    `;

    newCard.querySelector('.btn-outline-warning').addEventListener('click', hideMe);
    newCol.appendChild(newCard);
    const row = document.getElementById('row');
    row.appendChild(newCol);
    });
};

loadImgBtn.addEventListener('click', getApi);
secImgBtn.addEventListener('click', getSecApi);



