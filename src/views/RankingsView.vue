<script setup>
    import {fetchPoints} from '@/api/points';
    import {fetchTeams} from '@/api/teams';
import { onMounted } from 'vue';


    onMounted(async () => {
        const points = await fetchPoints();
        console.log(points);
        const teams = await fetchTeams();
        console.log(teams);
    });

</script>
<template>
 <p>ca marche</p>
</template>