

<script>
//this is going to make a reactive card element

export let image, name, nameJpn, score, status, type, episodes, episodesFinished

import StatusTag from "./statusTag.svelte";

if(status == 'finished'){
    episodesFinished = episodes
}
</script>

<div class="flex flex-col  p-2">
    <div class="flex flex-row space-x-2">
        <img class="flex justify-center overflow-hidden rounded-xl place-content-center w-32" src={image} alt={name + " image"}>
        <div class="flex flex-col">
            <StatusTag status={status}></StatusTag>
            <p class="text-gray-600">{type}</p>
            <p class="text-gray-600">{episodesFinished}/{episodes}</p>
            <p class="text-gray-600"></p>
            <p class="text-gray-600">{score}/169 pp</p>
        </div>
    </div>
    
    <div class="flex flex-col">
        <h1 class="text-xl font-bold">{name}</h1>
        <h2 class="text-lg font-bold">{nameJpn}</h2>
        
        
    </div>
</div>