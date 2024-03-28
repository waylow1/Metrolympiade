<script setup>
import {useRouter} from 'vue-router';
import {fetchMatchs} from '@/api/matchs';
import {fetchTeams} from '@/api/teams';
import { onMounted,ref } from 'vue';

const { push: routerPush } = useRouter();

const matchList = ref([]);


onMounted (async () => {
    matchList.value = await fetchMatchs()
    const allTeam = await fetchTeams()
    matchList.value.forEach(match=>{
        match.team1 = Object.values(allTeam).find(team => team.id === match.team1)?.name || 'Équipe introuvable';
        match.team2 = Object.values(allTeam).find(team => team.id === match.team2)?.name || 'Équipe introuvable';
    });
    
});


</script>
<template>
    <h1 class="text-center text-2xl font-bold ">
        Matchs
    </h1>
    <div v-if="matchList">
        <div v-for="match in matchList" :key="match.id">
            <div id="matchs" class ="border-2 border-orange-500 p-3 m-6 w-1/2 mx-auto text-center rounded-md">
                <p>{{ match.time }}-{{ match.sport}}</p>
                <p>{{ match.team1 }} vs {{ match.team2 }}</p>
                <p>{{ match.team1_score }} - {{ match.team2_score }}</p>

                <!--<p>11H04 - Volleyball</p>
                <p>SpaceX vs Meta</p>
                <p>8-10</p>-->
                <!--{{matchList}}-->
            </div>
        </div>
        <div class = "w-1/2 mx-auto text-center">
            <button class="m-5 border-2 border-orange-500 rounded-md p-3"  @click=" routerPush({ name: 'matchCreation' });">Create a match</button>
        </div>
    </div>
    <div v-else>
        Chargement ...
    </div>
</template>