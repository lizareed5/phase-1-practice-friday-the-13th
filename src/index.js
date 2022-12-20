document.addEventListener('DOMContentLoaded', () => {
    fetchMovies()
    addBloodDrops()
})

const url = "http://localhost:3000/movies"
const movieCollection = document.querySelector("#movie-info")
const movieList = document.querySelector("#movie-list")
const bloodForm = document.querySelector("#blood-form")
let bloodDrop = document.querySelector("#blood-amount")
let totalBlood = document.querySelector("#amount")

function renderMovie(movie){
    let movieImg = document.querySelector("#detail-image")
    let yearReleased = document.querySelector("#year-released")
    movieImg.src = movie.image
    title.innerText = movie.title
    yearReleased.innerText = movie.release_year
    description.innerText = movie.description
    amount.innerText = movie.blood_amount

    watched.addEventListener('click', (e) => {
        if (movie.watched === false) {
            watched.innerText = "Watched"
            movie.watched = true
        } else {
            watched.innerText = "Unwatched"
            movie.watched = false
        }
        fetch(`${url}/${movie.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                watched:movie.watched
            })
        }
        )
    })
}
function fetchMovies() {
    fetch(url)
    .then((response) => response.json())
    .then(data => {
       renderMovie(data[0])
        data.forEach(movie => {
            let img = document.createElement('img')
            img.src = movie.image
            img.addEventListener('click', (e) => {
                renderMovie(movie)
            })
            movieList.appendChild(img)
        })
    })
}

const addBloodDrops = (e) => {
bloodForm.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('blood clicked')
    console.log(e.bloodDrop.innerText)
    // let id = e.target.id
    })
}
    // let btnTarget = e.target.previousElementSibling
    // let numDrops = parseInt(btnTarget.innerText.split(' ')[0]) + 1
    //add the code to increase the number of blood drops when the button is submitted

    // fetch(`${url}/${id}`, {
    //     method: 'PATCH',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Accept': 'application/json',
    //     },
    //     body: JSON.stringify({
    //         totalBlood: numDrops
    //     })
    // })
   
