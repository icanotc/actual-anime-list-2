<script lang="ts">
   import { mode } from "$lib/darkModeState"
   import Navbar from "$lib/navbar.svelte";
   import Status from '$lib/status.svelte'
   import type {Anime} from '$lib/handlerAPI'
   import Card from "$lib/card.svelte";
   export let data: Anime[];

</script>

<script context="module">
   export const load = async ({fetch}) => {
      let data = await fetch('animes.json')
      //console.log(await data.json())
      let accData = await data.json()
      console.log("at fetch")
      console.log(accData.dataArray)

      return {
         props: { data: accData.dataArray }
      }
   }

</script>
<div class="{$mode}">
   <div id="background" class="bg-gray-200 dark:bg-gray-900 min-h-screen ">
      <Navbar></Navbar>
      <div class="lg:pl-10 lg:pr-10 pt-10 pb-10">
         <!-- the status chart section -->
         <div class="bg-white dark:bg-gray-800 lg:container shadow-2xl rounded-2xl mx-auto mb-10">
            <!-- <img class="object-cover rounded-2xl w-full sm:h-128 h-64" src="/src/chika.jpg"> -->
            <div class="flex flex-row rounded-2xl w-full h-auto">
               <div class="flex-auto max-w-128">
                  <Status></Status>
               </div>
            </div>
         </div>
         <!-- the list section -->
         <div class="bg-white dark:bg-gray-800 shadow-2xl lg:container mx-auto p-5 rounded-2xl">
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  "  id="gridWrapper">
               {#each data as bruh}
                  
                  <Card image={bruh.thumbnail} name={bruh.title} nameJpn={bruh.titleJPN} score={bruh.scoreUser} status={bruh.status} type={bruh.type} episodes={bruh.episodes} episodesFinished={bruh.episodesFinished}>

                  </Card>
               {/each}
            </div>
         </div>
      </div>
   </div>
</div>
