//this is just a bunch of functions that i made so i dont have to import npm packages


export let rateLimit = async (timeDelayed: number) => {
    return new Promise(resolve => setTimeout(resolve, timeDelayed))
}