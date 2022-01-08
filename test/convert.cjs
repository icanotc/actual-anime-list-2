const animes = require('./tempanime.json')
const fetch = require('cross-fetch')

let animeArray = []

let rateLimit = async (timeDelayed) => {
    return new Promise(resolve => setTimeout(resolve, timeDelayed))
}

let convert = async (animes) => {
    for (const anime of animes) {
    
        //console.log(anime.name)

        let url = `https://api.jikan.moe/v3/search/anime?q=${anime.name}`
        let response = await fetch(url)
        //console.log(response.status)
        let data = await response.json()
        let animeData = data.results[0]
        //console.log(animeData)

        let animeStruct = {
            linkMAL: animeData.url,
            rating: anime.rating,
            status: anime.status,
            progress: animeData.episodes
        }
        console.log(animeStruct)
        animeArray.push(animeStruct)
        await rateLimit(4000)
    }
}

convert(animes)

console.log(animeArray)