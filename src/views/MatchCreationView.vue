<script setup>
import { onMounted,ref } from 'vue'
import { fetchMyTeam, fetchTeams } from '@/api/teams' 
import {insertMatch} from '@/api/matchs'
import { useUserStore } from '@/stores/user';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';



const teamlist = ref([])
const myTeam = ref('')
const opponentTeam = ref('');
const myTeamScore = ref(0)
const opponentTeamScore = ref(0)
const sport = ref('')
const time = ref('')



const router = useRouter()

onMounted(async () => {
    const {user} = storeToRefs(useUserStore())
    teamlist.value = await(fetchTeams())
    myTeam.value =  await(fetchMyTeam(user.value.id))
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
        router.push({name: 'matchs'})
    }

}

</script>

<template>
   <div class="flex flex-col items-center justify-center">
    <h1>Match</h1>
    
    <div class="space-y-10 text-center">
            <div>
                <label for="myTeam"> Mon équipe </label>
                <select id="myTeam" class="border-2 rounded-md w-full text-center" style="color: #ff7b00;">
                    <option :value="myTeam" > {{ myTeam.name }}</option>
                </select>
            </div>
            <div>
                <label for="opponnentTeam"> Equipe adverse </label>
                <select id="opponnentTeam" v-model="opponentTeam" class="border-2 rounded-md w-full text-center" style="color: #ff7b00;">
                    <option v-for="team in teamlist" :key="team.id" :value="team">{{team.name}}</option>
                </select>
            </div>
            <div>
                <label for="sport"> Epreuve </label>
                <input  id="sport" v-model="sport" class="border-2 rounded-md w-full text-center" style="color: #ff7b00;" type="text"/>
            </div>
            <div>
                <label for="time"> Heure de la rencontre </label>
                <input id="time" type="time" v-model="time" class="border-2 rounded-md w-full text-center" style="color: #ff7b00;">
            </div>
        <div class="flex space-x-28">
            <div class="flex flex-col">
                <label for="myTeamScore">Mon score</label>
                <input id="myTeamScore" v-model="myTeamScore"  class="border-2 rounded-md size-16 text-center" style="color: #ff7b00;" type="number">
            </div>
            <div class="flex flex-col">
                <label for="opponentTeamScore">Score adverse</label>
                <input id="opponentTeamScore" v-model="opponentTeamScore" class="border-2 rounded-md size-16 text-center" style="color: #ff7b00;" type="number">
            </div>
        </div>
        <button @click="submit" class="p-2 mt-4 bg-green-400 rounded-md">Create the Match</button>
    </div>
</div>
</template>