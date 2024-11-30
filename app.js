async function getJokes() {
    const url = 'https://jokes-always.p.rapidapi.com/family'
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'c69351b574msh163e72957691147p11682bjsn6c03e6a3afae',
            'x-rapidapi-host': 'jokes-always.p.rapidapi.com'
        }
    };
    let response = await fetch(url, options)
    let result = await response.json()
    document.getElementById('para').innerText = result.data
}

getJokes()
document.getElementById('btn').addEventListener('click', () => {
    getJokes()
})

