const addressBarContent = new URLSearchParams(location.search)
const eventId = addressBarContent.get()
console.log(eventId) 

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
        })
        .catch((err) => {
            console.log('Si è verificato un errore:', err);
        });
};