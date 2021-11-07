//this manages the folders for storing assets and json files of animes.
//the folders are named by id then the anime name with hyphens

import {promises as fs} from 'fs'
import {existsSync} from 'fs'
import animes from '../../static/anime.json'
import { fetchAPI } from './handlerAPI'
import { rateLimit } from './utils'
//check if the folder exists, if not create it

export let manageAnimes = async (): Promise<void> => {
    checkAnimeFiles()
}

const checkAnimeFiles = async (): Promise<void> => {
    const animeDBFolder = 'static/animedb'
    
    for(const anime of animes.anime){

        let id: String = anime.linkMAL.split('/')[4]
        let name: String = anime.linkMAL.split('/')[5]
        const animeFolder = `${animeDBFolder}/${id}-${name}`
        const animeData = `${animeFolder}/data.json`
        //this one is a file ^
        console.log("bruh folder")
        if(!(existsSync(animeFolder))){
            await fs.mkdir(animeFolder)
        }
        console.log("bruh file")
        //here its gonna check if the json file is there and if not its gonna crreat a json file that has data for that anime
        if(!(existsSync(animeData))){
            await rateLimit(1000)
            let data = await fetchAPI(id)
            
            try{
                await fs.writeFile(`${animeFolder}/data.json`, JSON.stringify(data, null, 4))
            }catch(err){
                console.log(err)
            }
            
        }

        
    }
}
