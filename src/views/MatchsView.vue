<script setup>
import {useRouter} from 'vue-router';
import {fetchMatchs} from '@/api/matchs';
import { onMounted,ref } from 'vue';

const { push: routerPush } = useRouter();

const matchList = ref([]);


onMounted (async () => {
    matchList.value = await fetchMatchs()
})

</script>
<template>
    <h1 class="text-center p-5">
        Matchs
    </h1>
    <div v-if="matchList">
        <div v-for="match in matchList" v-id="match.id">
            <div id="matchs" class = " border-2 p-3  w-1/2 mx-auto text-center rounded-md">
                <!--<p>11H04 - Volleyball</p>
                <p>SpaceX vs Meta</p>
                <p>8-10</p>-->
                <!--{{matchList}}-->
            </div>
        </div>
        <div class = "w-1/2 mx-auto text-center">
            <button class="m-5 border-2 border-green-500 rounded-md p-3"  @click=" routerPush({ name: 'matchCreation' });">Create a match</button>
        </div>
    </div>
    <div v-else>
        Chargement ...
    </div>
</template>