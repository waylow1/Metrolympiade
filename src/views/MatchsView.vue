<script setup>
import {useRouter} from 'vue-router';
import {fetchMatchs} from '@/api/matchs';
import { onMounted,ref } from 'vue';

const { push: routerPush } = useRouter();

const matchList = ref([]);

onMounted (async () => {
    matchList.value = await fetchMatchs()
})

 function showMatchs(){
    var matchs= document.getElementById("matchs");

    matchList.array.forEach(match => {
        var div = document.createElement("div")

        var team1 = match.team1;
        var team2 = match.team2;
        var team1_score = match.team1_score;
        var team2_score = match.team2_score;
        var time = match.time;
        var sport = match.sport;
        div.appendChild(team1,team2,team1_score,team2_score,time,sport);
        matchs.appendChild(div);
    });
 }

 showMatchs();

</script>
<template>
    <h1 class="text-center p-5">
        Matchs
    </h1>
    <div id="matchs" flex justify-center>
        <div class = " border-2 p-3  w-1/2 mx-auto text-center rounded-md">
            <!--<p>11H04 - Volleyball</p>
            <p>SpaceX vs Meta</p>
            <p>8-10</p>
            {{matchList}}-->
        </div>
        <div class = "w-1/2 mx-auto text-center">
            <button class="m-5 border-2 border-green-500 rounded-md p-3"  @click=" routerPush({ name: 'matchCreation' });">Create a match</button>
        </div>
        
    </div>
</template>