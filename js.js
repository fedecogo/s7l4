// riferimenti all html
const loadImgBtn = document.getElementById('Load-btn');
const secImgBtn = document.getElementById('Sec-btn');
const row = document.getElementById('row');


const getApi = function (query) {
    fetch('https://api.pexels.com/v1/search?query=' + query, {
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
            row.innerHTML = ''
            im.photos.forEach(photo => {const newCol = document.createElement('div')
            newCol.classList.add('col', 'col-md-4')
            newCol.innerHTML = `
                <div class="card mb-4 shadow-sm">
                    <img
                    src="${photo.src.medium}"
                    class="bd-placeholder-img card-img-top"
                    />
                    <div class="card-body">
                    <a href="./detail.html?imageId=${photo.id}"><h5 class="card-title">Lorem Ipsum</h5></a>
                    <p class="card-text">
                        This is a wider card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.
                    </p>
                    <div
                        class="d-flex justify-content-between align-items-center"
                    >
                        <div class="btn-group">
                        <button
                            type="button"
                            class="btn btn-sm btn-outline-secondary"
                        >
                            View
                        </button>
                        <button
                            type="button"
                            class="btn btn-sm btn-outline-secondary"
                        >
                            Edit
                        </button>
                        </div>
                        <small class="text-muted">${photo.id}</small>
                    </div>
                    </div>
                </div>
                `
            row.appendChild(newCol)
            const allTheEditButtons = document.querySelectorAll(
                '.card .btn:nth-of-type(2)'
              )
              allTheEditButtons.forEach((button) => {
                button.innerText = 'Hide'
                button.addEventListener('click', function (e) {
                  e.target.closest('.col').remove()
                })
              })  
                
            });
        })
        .catch((err) => {
            console.log('Si è verificato un errore:', err);
        });
};



loadImgBtn.addEventListener('click', () => getApi('motorbike'))
secImgBtn.addEventListener('click', () => getApi('weed'))

const searchForm = document.getElementById('custom-search')
searchForm.addEventListener('submit', function (e) {
  e.preventDefault()
  // dovrei prendere il valore attuale della barra di ricerca,
  // e lanciare la funzione getImages con il suo contenuto
  // cerchiamo il valore della barra search
  const searchBar = document.getElementById('search-field')
  const searchValue = searchBar.value
  getApi(searchValue)
})



