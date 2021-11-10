//this would pack the data and send an anime object to the frontend
//this does not read or fetch the api
import { rateLimit } from '../lib/utils'
import animes from '../../static/anime.json'
import {manageAnimes} from '../lib/manageData'
import {promises as fs} from 'fs'
let url = 'https://api.jikan.moe/v3/'


export let get = async () => {
    await manageAnimes()
    //so all the images & data are updated lmao
    let dataArray = []
    for (const anime of animes.anime) {
        let rawData = await fs.readFile(`static/animedb/${anime.linkMAL.split('/')[4]}-${anime.linkMAL.split('/')[5]}/data.json`, 'utf-8')
        let data = JSON.parse(rawData)
        dataArray.push(data)
    }
    
    return {
        body: {
            dataArray
        }
    }
}





console.log('bruh')