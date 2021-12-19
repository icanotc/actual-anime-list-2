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

<div class="lg:pl-10 lg:pr-10 pt-10 pb-10">
   
   <!-- the list section -->
   <div class="bg-gray-100 dark:bg-gray-800 shadow-2xl lg:container mx-auto p-5 rounded-2xl">
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"  id="gridWrapper">
         {#each data as bruh}
            
            <Card image={bruh.thumbnail} name={bruh.title} nameJpn={bruh.titleJPN} score={bruh.scoreUser} status={bruh.status} type={bruh.type} episodes={bruh.episodes} episodesFinished={bruh.episodesFinished}>

            </Card>
         {/each}
      </div>
   </div>
</div>

