<script>
   import { mode } from "$lib/darkModeState"
   import Navbar from "$lib/navbar.svelte";
   import Status from '$lib/status.svelte'

   export let data;
</script>


<script context="module">
   export const load = async ({fetch}) => {
      let data = await fetch('animes.json')
      //console.log(await data.json())
      let accData = await data.json()
      console.log(accData)
      return {
         props: { data: accData}
      }
   }
</script>
{data}
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
            <div class="" id="gridWrapper"></div>
         </div>
      </div>
   </div>
</div>
 <!--[if lt IE 7]>
 <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="#">upgrade your browser</a> to improve your experience.</p>
 <![endif]-->