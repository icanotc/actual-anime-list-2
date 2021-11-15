//this packages data to things that we need to store in folder, including userdata
//we dont put this directly to the front end
//instead we'll put this under folders and store them, then the frontend handler would serve them
import { animeDBFolder } from "./manageData"
import { rateLimit } from "./utils"

export interface Anime {
    title: string,
    titleJPN: string,
    episodes: number,
    score: number,
    userScore: number,
    image_path: string,
    data_path: string
    synopsis: String,
    type: String,
    status: string,
    start_date: string, 
}


export let fetchAPI = async (id: string, delay: number) => {

    let url = `https://api.jikan.moe/v3/anime/${id}`
    await rateLimit(delay)
    let response = await fetch(url)
    let json = await response.json()

    let imagePath = `static/animedb/${json.url.split('/')[5]}-${json.url.split('/')[5]}`
    let animeData: Anime = {
        title: json.title,
        titleJPN: json.title_japanese,
        episodes: json.episodes,
        score: json.score,
        userScore: json.user_score,
        image_path: imagePath,
        data_path: `${imagePath}/data.json`,
        synopsis: json.synopsis,
        type: json.type,
        status: json.status,
        start_date: json.start_date, 
    }
    console.log(animeData)
    return animeData
}

export let fetchImageData = async (id: String, delay: number) => {
    //please use await delay when you are calling this function (ok nvm)


    let url = `https://api.jikan.moe/v3/anime/${id}/pictures`
    await rateLimit(delay)
    let response = await fetch(url)
    let json = await response.json()

    let animeImage: any[] = json.pictures
    return animeImage
}

export let fetchImage = async (url: any, delay: number) => {
    //await rateLimit(delay)
    //console.table(url)
    let data = await fetch(url.large);
    let image = (await data.blob()).stream();
    //console.log(image)
    return image
}

