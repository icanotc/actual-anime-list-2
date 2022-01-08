

<script>
//this is going to make a reactive card element

export let image, name, nameJpn, score, status, type, episodes, episodesFinished

import StatusTag from "./statusTag.svelte";

if(status == 'finished'){
    episodesFinished = episodes
}
</script>

<div class="flex flex-col sm:p-2 "> 
    <div class="flex flex-row space-x-2 w-full bg-white dark:bg-gray-800 rounded-2xl shadow-xl sm:bg-none sm:shadow-none sm:rounded-none p-2" aria-label="anime block">
        <div class="grow" aria-label="anime image">
            <img class="justify-center overflow-hidden rounded-xl w-full" src={image} alt={name + " image"}>
        </div>
        <div class="flex flex-col shrink " aria-label="right side info">
            <div class="flex flex-col sm:hidden">
                <h1 class="text-xl font-bold dark:text-gray-50">{name}</h1>
                <h2 class="text-lg font-bold dark:text-gray-50">{nameJpn}</h2>
            </div>
            <div class="flex flex-row space-x-1 sm:flex-col sm:space-y-1 sm:space-x-0 sm:w-24 sm:h-full w-full">
                <!-- <StatusTag status={status}></StatusTag> -->
                
                <div class="p-2 sm:p-4 h-full justify-center items-center flex bg-gray-200 dark:bg-gray-500 rounded-lg grow">
                    <div class="flex flex-col items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-current dark:stroke-white" fill="none" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                        </svg>
                        <p class="text-gray-600 text-lg dark:text-gray-50">{type}</p>
                    </div>
                </div>
                
                <div class="p-2 sm:p-4 h-full justify-center items-center flex bg-gray-200 dark:bg-gray-500 rounded-lg grow">
                    <div class="flex flex-col items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-current dark:stroke-white" fill="none" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                        <p class="text-gray-600 text-lg dark:text-gray-50">{episodesFinished}/{episodes}</p>
                    </div>
                </div>
                
                <div class="p-2 sm:p-4 h-full justify-center items-center flex bg-gray-200 dark:bg-gray-500 rounded-lg grow">
                    <div class="flex flex-col items-center" title="the pp system goes from 69 to 169, it stands for pnice points, the sussier the better. ">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-current dark:stroke-white" fill="none" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                        <p class="text-gray-600  dark:text-gray-50">{score}/169</p>
                        <p class="text-gray-600  dark:text-gray-50">pp</p>
                    </div>
                </div>
            </div>
        </div>
        
    </div>

    <div class="sm:flex sm:flex-col hidden ">
        <h1 class="text-xl font-bold dark:text-gray-50">{name}</h1>
        <h2 class="text-lg font-bold dark:text-gray-50">{nameJpn}</h2>
    </div>
</div>