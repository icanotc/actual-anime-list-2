//this packages data to things that we need to store in folder, including userdata
//we dont put this directly to the front end
//instead we'll put this under folders and store them, then the frontend handler would serve them


export interface Anime {
    title: String,
    titleJPN: String,
    episodes: Number,
    score: Number,
    userScore: Number,
    image_url: String,
    synopsis: String,
    type: String,
    status: String,
    start_date: String, 
}


export let fetchAPI = async (id: String) => {

    let url = `https://api.jikan.moe/v3/anime/${id}`
    let response = await fetch(url)
    let json = await response.json()

    let animeData: Anime = {
        title: json.title,
        titleJPN: json.title_japanese,
        episodes: json.episodes,
        score: json.score,
        userScore: json.user_score,
        image_url: json.image_url,
        synopsis: json.synopsis,
        type: json.type,
        status: json.status,
        start_date: json.start_date, 
    }

    return animeData
}