//this would pack the data and send an anime object to the frontend
//this does not read or fetch the api
import { rateLimit } from '../lib/utils'
import animes from '../../static/anime.json'
import {manageAnimes} from '../lib/manageData'
let url = 'https://api.jikan.moe/v3/'

export let get = async () => {
    await manageAnimes()

    //console.log(animes)
    // for(const anime of animes.anime){
    //     let id: String = anime.linkMAL.split('/')[4]
    //     let data: String = await fetch(url + 'anime/' + id).then(res => res.json())
    //     console.log("=======================================================")
    //     console.log(data)
    //     console.log("=======================================================")
    //     await rateLimit(4000)

    // }
    
    return {
        body: {
            "animes": []
        }
    }
}





console.log('bruh')