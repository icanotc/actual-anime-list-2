<script lang="ts">

    export let status: string
    let setStatusColor = () => {
        switch (status) {
            case 'finished':
                return 'bg-green-300'
            case 'watching':
                return 'bg-blue-300'
            case 'planned':
                return 'bg-yellow-300'
            case 'dropped':
                return 'bg-red-300'
        }

    }
</script>

<div class='flex flex-row'>
    <div class="rounded-full font-bold text-gray-500 px-2 {setStatusColor()}">
        {status}
    </div>
</div>