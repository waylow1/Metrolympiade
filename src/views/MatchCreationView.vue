<script setup>
import { onMounted,ref } from 'vue'
import { fetchMyTeam, fetchTeams } from '@/api/teams' 
import {insertMatch} from '@/api/matchs'
import { useUserStore } from '@/stores/user';
import { storeToRefs } from 'pinia';


const teamlist = ref([])
const myTeam = ref('')
const opponentTeam = ref('');
const myTeamScore = ref(0)
const opponentTeamScore = ref(0)
const sport = ref('')
const time = ref('')

const { user } = storeToRefs(useUserStore())

onMounted(async () => {
    teamlist.value = await (fetchTeams())
    myTeam.value = await (fetchMyTeam("edbdadfa-82ee-4757-a4b0-ab6e77dbe958"))
})


const submit = () => {
    


    const match = {
      team1: myTeam.value.id,
      team2: opponentTeam.value.id,
      sport: sport.value,
      time: time.value,
      team1_score: myTeamScore.value,
      team2_score: opponentTeamScore.value,
    }


    const res = insertMatch(match) 
    opponentTeam.value = ''
    myTeamScore.value = 0
    opponentTeamScore.value = 0
    sport.value = ''
    time.value = ''
    if(res == -1){  
       alert("Erreur lors de la création du match")
    }
    else{
        alert("Le match a bien été créé")
    }

}



</script>

<template>
   <div class="flex flex-col items-center justify-center">
    <h1>Matchs</h1>
    
    <div class="space-y-6">
            <div>
                <select class="border-2 rounded-md w-full text-center">
                    <option :value="myTeam" > {{ myTeam.name }}</option>
                </select>
            </div>
            <div>
                <select v-model="opponentTeam" class="border-2 rounded-md w-full text-center">
                    <option v-for="team in teamlist" :key="team.id" :value="team">{{team.name}}</option>
                </select>
            </div>
            <div>
                <input  v-model="sport" class="border-2 rounded-md w-full text-center" type="text"/>
            </div>
            <div>
                <input type="time" v-model="time" class="border-2 rounded-md w-full text-center">
            </div>
        <div class="flex space-x-28">
            <div class="flex flex-col">
                <label for="myTeamScore">My team</label>
                <input id="myTeamScore" v-model="myTeamScore"  class="border-2 rounded-md size-16 text-center" type="number">
            </div>
            <div class="flex flex-col">
                <label for="opponentTeamScore">Team 2</label>
                <input id="opponentTeamScore" v-model="opponentTeamScore" class="border-2 rounded-md size-16 text-center" type="number">
            </div>
        </div>
        <button @click="submit" class="p-2 mt-4 bg-green-400 rounded-md">Create the Match</button>
    </div>
</div>
</template>