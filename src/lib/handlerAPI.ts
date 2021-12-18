//this packages data to things that we need to store in folder, including userdata
//we dont put this directly to the front end
//instead we'll put this under folders and store them, then the frontend handler would serve them


import { rateLimit } from "./utils"
import type { UserAnime } from "./manageData"

export interface Anime {
    title: string,
    titleJPN: string,
    episodes: number,
    episodesFinished: number,
    score: number,
    scoreUser: number,
    thumbnail: string,
    image_path: string,
    synopsis: String,
    type: String,
    status: string,
    season: string, 
}



export let fetchAPI = async (id: string, userData: UserAnime, delay: number): Promise<Anime> => {
    let url = `https://api.jikan.moe/v3/anime/${id}`
    await rateLimit(delay)
    let response = await fetch(url).then(res => {
        if (res.ok) {
            return res
        }
        else {
            throw new Error(`${res.status} ${res.statusText}`)
        }
    })

    let jsonMAL = await response.json()
    console.log(userData)
    let dataPath = `static/animedb/${jsonMAL.url.split('/')[5]}-${jsonMAL.url.split('/')[5]}`
    let animeData: Anime = {
        title: jsonMAL.title,
        titleJPN: jsonMAL.title_japanese,
        episodes: jsonMAL.episodes, 
        episodesFinished: userData.progress,
        score: jsonMAL.score,
        scoreUser: userData.rating,
        thumbnail: jsonMAL.image_url,
        image_path: `${dataPath}/image`,

        synopsis: jsonMAL.synopsis,
        type: jsonMAL.type,
        status: userData.status,
        season: jsonMAL.premiered, 
    }
    //console.log(animeData)
    return animeData
}

export let fetchImageData = async (id: String, delay: number): Promise<any[]> => {
    //please use await delay when you are calling this function (ok nvm)


    let url = `https://api.jikan.moe/v3/anime/${id}/pictures`
    await rateLimit(delay)
    let response = await fetch(url).then(res => {
        if (res.ok) {
            return res
        }
        else {
            throw new Error(`${res.status} ${res.statusText}`)
        }
    })
    
    let json = await response.json()

    //let animeImage: any[] = json.pictures
    return json.pictures
}

export let fetchImage = async (url: any, delay: number): Promise<NodeJS.ReadableStream> => {
    //well, this one fetches the images from MAL, according to the jikan api
    await rateLimit(delay)
    //console.table(url)
    let data = await fetch(url.large);
    let image: NodeJS.ReadableStream = (await data.blob()).stream();
    //console.log(image)
    return image
}

