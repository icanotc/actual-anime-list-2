<script>
import ToggleSwitch from "$lib/toggleSwitch.svelte";
</script>


<div class="navbar antialiased font-sans">
	<div class="bg-blue-200 dark:bg-blue-600">
	<div class=" mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
		<div class="flex items-center h-16">
			<a
				href="/"
				class="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100 px-3 py-2 rounded-md text-lg font-medium">
				icanc's anime list
			</a>
			<div class="hidden sm:block sm:ml-4">
				<div class="flex space-x-3 ">
					<a
						href="https://anime.vincentxie.net"
						class="bg-gray-400 text-gray-800 dark:bg-gray-900 dark:text-gray-400 transition hover:shadow-lg px-3 py-2 rounded-md text-sm font-medium">
						Anime List
					</a>
					<a
						href="https://vincentxie.net"
						class="bg-gray-300 text-gray-800 dark:bg-gray-700 dark:text-gray-400 transition hover:shadow-lg px-3 py-2 rounded-md text-sm font-medium">
						Home Page
					</a>
					<a
						href="https://icanc.space"
						class="bg-gray-300 text-gray-800 dark:bg-gray-700 dark:text-gray-400 transition hover:shadow-lg px-3 py-2 rounded-md text-sm font-medium">
						Blog
					</a>
				</div>
			</div>
			<div class="flex-1"></div>
			<ToggleSwitch></ToggleSwitch>
		</div>
		</div>
	</div>
</div>
