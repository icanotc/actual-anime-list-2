


<div class="relative p-2 flex flex-wrap" id="statusSection">
    <div class="flex-initial flex-grow relative w-40 h-40">
       <canvas id="statusChart"></canvas>
    </div>
    <div class="p-2 flex flex-col flex-grow space-y-4 ">
       <div class="flex flex-row h-10 w-40 bg-red-400 rounded-md">
          <div class="flex-grow p-2 text-gray-100">Finished</div>
          <div class="flex flex-grow-0 w-10 rounded-md bg-red-500 justify-center items-center text-gray-100" id="statusFinished"></div>
       </div>
       <div class="flex flex-row h-10 w-40 bg-blue-400 rounded-md">
          <div class="flex-grow p-2 text-gray-100">Watching</div>
          <div class="flex flex-grow-0 w-10 rounded-md bg-blue-500 justify-center items-center text-gray-100" id="statusWatching"></div>
       </div>
       <div class="flex flex-row h-10 w-40 bg-yellow-400 rounded-md">
          <div class="flex-grow p-2 text-gray-100">Planned</div>
          <div class="flex flex-grow-0 w-10 rounded-md bg-yellow-500 justify-center items-center text-gray-100" id="statusPlanned"></div>
       </div>
    </div>
    <div class="flex flex-col p-2 flex-grow space-y-4 w-60">
       <div class="flex flex-row h-16 w-60">
          <div class="flex-shrink-0 h-16 w-16 items-center justify-center">
             <div class="rounded-full border-4 border-green-400 h-16 w-16 items-center justify-center flex">
                <div class="dark:text-white" id="totalAnime"></div>
             </div>
          </div>
          <div class="dark:text-white text-gray-800 text-xl flex items-center justify-center pl-4">Total Anime</div>
       </div>
       <div class="flex flex-row h-16 w-60">
          <div class="flex-shrink-0 h-16 w-16 items-center justify-center">
             <div class="rounded-full border-4 border-green-400 h-16 w-16 items-center justify-center flex">
                <div class="dark:text-white" id="totalAnimeWatched"></div>
             </div>
          </div>
          <div class="dark:text-white text-gray-800 text-xl flex items-center justify-center pl-4">Total Anime Watched</div>
       </div>
    </div>
    <div class="ml-4 p-2 relative h-40 w-64 font-medium text-gray-900 border-2 rounded-2xl bg-blue-200 dark:bg-blue-600 dark:text-gray-100" >
       Welcome to icanc's anime list.
       This is a badly made anime list with tailwind and html.
       The scores are based on enjoyment.
       MyAnimeList, is bad.
    </div>
 </div>