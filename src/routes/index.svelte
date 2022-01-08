<script lang='ts' >

   
   import type {Anime} from '$lib/handlerAPI'
   import Card from "$lib/highlightCard.svelte";
   export let data: Anime[];

</script>

<script context="module" lang="ts">
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

<div class="sm:px-10 sm:py-10 ">
   <!-- the list section -->
   <div class="sm:bg-white sm:dark:bg-gray-800 shadow-2xl lg:container mx-auto sm:p-5 rounded-2xl md:content-center">
      <div class="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-1 sm:gap-4"  id="gridWrapper">
         {#each data as bruh}
            
            <Card image={bruh.thumbnail} name={bruh.title} nameJpn={bruh.titleJPN} score={bruh.scoreUser} status={bruh.status} type={bruh.type} episodes={bruh.episodes} episodesFinished={bruh.episodesFinished}>

            </Card>
         {/each}
      </div>
   </div>
</div>

