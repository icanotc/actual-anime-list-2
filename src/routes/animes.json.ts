//this would pack the data and send an anime object to the frontend
//this does not read or fetch the api

import animes from '../../static/anime.json'
import {manageAnimes} from '../lib/manageData'
import {promises as fs} from 'fs'


export let get = async () => {
    console.log('get loading')
    await manageAnimes()
    console.log('get loading finished, reading now')
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