import animes from '../../static/anime.json';

interface AnimeStats {
    numberOfAnimes: number;
    numberOfEpisodes: number;
    averageScore: number;
    episodeStats: {
        planned: number;
        finished: number;
        dropped: number;
        onHold: number;
        watching: number;
    }
    
}

export let get = async () => {
    
    let stats: AnimeStats = {
        numberOfAnimes: animes.anime.length,
        numberOfEpisodes: 0,
        averageScore: calculateAverage(),
        episodeStats: calculateEpisodeStats(),

    }
    return {
        body: stats
    }

}

let calculateAverage = (): number => {
    let total = 0;
    let counter = 0
    for(const anime of animes.anime) {
        total += anime.rating;
        counter++;
    }
    return total / counter;
}

let calculateEpisodeStats = (): AnimeStats['episodeStats'] => {
    let stats: AnimeStats['episodeStats'] = {
        planned: 0,
        finished: 0,
        dropped: 0,
        onHold: 0,
        watching: 0
    }

    for(const anime of animes.anime) {
        console.log(anime.status)
        switch(anime.status) {
            case "planned":
                stats['planned']++;
                break;
            case "finished":
                stats['finished']++;
                break;
            case "dropped":
                stats['dropped']++;
                break;
            case "onHold":
                stats['onHold']++;
                break;
            case "watching":
                stats['onHold']++;
                break;
        }
    }

    return stats;
}