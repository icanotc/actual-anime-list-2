

<script>
//this is going to make a reactive card element

export let image, name, nameJpn, score, status, type, episodes, episodesFinished


</script>

<div>
    <div class="mx-4">

        <div class="overflow-hidden rounded-xl mx-4">
            <img src={image} alt={name + " image"}>
        </div>
        
        <div class="">
            <h1 class="text-2xl font-bold">{name}</h1>
            <h2 class="text-xl font-bold">{nameJpn}</h2>
            <p class="text-gray-600">{status}</p>
            <p class="text-gray-600">{type}</p>
            <p class="text-gray-600">{episodes}</p>
            <p class="text-gray-600">{episodesFinished}</p>
            <p class="text-gray-600">{score}</p>
        </div>
    </div>

</div>