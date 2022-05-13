document.querySelector('.serarch-btn').addEventListener('click', getFetch)
let choice = document.querySelector('input').value 

function getFetch() {
    const url = `https://api.shrtco.de/v2/shorten?url=${choice}/very/long/link.html`

    fetch(url)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
            const link = document.createElement('h6')
            link.innerHTML = choice
            const ul = document.createElement('ul')
            ul.classList.add('return-area')
            const li = document.createElement('li')
            const btn = document.createElement('button')
            btn.innerHTML = 'Copy'
            li.textContent = data.result.full_short_link
            document.querySelector('.results').appendChild(ul)
            document.querySelector('.return-area').appendChild(link)
            document.querySelector('.return-area').appendChild(li)
            document.querySelector('.return-area').appendChild(btn)
        })
        .catch((err) => {
            console.log(`error ${err}`)
        })
}
