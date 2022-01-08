<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="theme-color" content="#BFDBFE">
    <title>icanc's anime list</title>
    <!-- <link rel="icon" href="static/favicon.png"> -->
    <meta name="description" content="icanc's anime list cuz he think all other ones sucks">
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<script>

    import { mode } from "$lib/darkModeState"
    import Navbar from "$lib/navbar.svelte";
</script>

<style global lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;

</style>


<div class="{$mode}">
    <div id="background" class="bg-gray-100 dark:bg-gray-900 min-h-screen ">
       <Navbar></Navbar>
       <div class="lg:pl-10 lg:pr-10 pt-10 pb-10">
            <slot></slot>       
        </div>
    </div>
</div>