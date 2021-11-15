//this manages the folders for storing assets and json files of animes.
//the folders are named by id then the anime name with hyphens
//this is calling the handlerAPI file

import {promises as fs} from 'fs'
import {existsSync, readdirSync} from 'fs'
import animes from '../../static/anime.json'
import { fetchAPI, fetchImageData, fetchImage } from './handlerAPI'
//check if the folder exists, if not create it
export const animeDBFolder = 'static/animedb'
let refresh: boolean = true


interface SimpleAnimePath {
    id: string,
    name: string,
    animeFolder: string,
    animeData: string,
    animeImage: string,
}

export const manageAnimes = async (): Promise<void> => {
    for(const anime of animes.anime){

        let animePath: SimpleAnimePath = {
            id: anime.linkMAL.split('/')[4],
            name: anime.linkMAL.split('/')[5],
            animeFolder: `${animeDBFolder}/${anime.linkMAL.split('/')[4]}-${anime.linkMAL.split('/')[5]}`,
            animeData: `${animeDBFolder}/${anime.linkMAL.split('/')[4]}-${anime.linkMAL.split('/')[5]}/data.json`,
            animeImage: `${animeDBFolder}/${anime.linkMAL.split('/')[4]}-${anime.linkMAL.split('/')[5]}/image`
        }
        checkFolder(animePath)
        checkAnimedbImages(animePath)
    }
}

const checkFolder = async (animePath: SimpleAnimePath): Promise<void> => {
    //this one is a file ^
    //console.log("bruh folder")
    if(!(existsSync(animePath.animeFolder))){
        await fs.mkdir(animePath.animeFolder)
    }
    //console.log("bruh file")
    //here its gonna check if the json file is there and if not its gonna crreat a json file that has data for that anime
    if(readdirSync(animePath.animeImage).length === 0 && refresh){
        let data = await fetchAPI(animePath.id, 3000)
        
        try{
            await fs.writeFile(`${animePath.animeFolder}/data.json`, JSON.stringify(data, null, 4))
        }catch(err){
            console.log(err)
        }
        
    }
}

const checkAnimedbImages = async (animePath: SimpleAnimePath): Promise<void> => {
    //this one is a folder
    if(!(existsSync(animePath.animeImage))){
        await fs.mkdir(animePath.animeImage)
    }
    //here its gonna check if there are all the right images under here
    if(!(existsSync(animePath.animeImage + "*.jpg")) && refresh){
        //console.log("bruh image")
        let data = await fetchImageData(animePath.id, 3000)
        
        for(const image of data){
            try{
                //console.log(image)
                //this gets the name of the image
                let accImg = await fetchImage(image, 3000)
                //console.log(accImg + "bruh")    
                let imgName = image.large.split('/')[image.large.split('/').length - 1]
                //console.log(imgName)
                await fs.writeFile(`${animePath.animeImage}/${imgName}`, accImg)
            }catch(err){
                //console.log(err)
            }
        }
        
         
    }
}