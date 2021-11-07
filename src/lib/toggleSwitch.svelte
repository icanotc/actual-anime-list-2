<script>
    //console.log(writable)
    import {mode} from '$lib/darkModeState'
    mode.set("") //dark will apply the dark class, none is no class
    $: console.log($mode + "bruh")
    let changeMode = () => ($mode == "")? mode.set("dark") : mode.set('')
</script>

<div class="relative">    
    <div class="block bg-gray-300 dark:bg-gray-600 w-14 h-8 rounded-full" on:click="{changeMode}"></div>
    <div class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition transform-gpu" class:translate-x-full="{$mode == "dark"}" on:click="{changeMode}"></div>
</div>