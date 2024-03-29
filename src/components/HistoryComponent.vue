<script setup>
import { fetchMatchsFromATeam } from '@/api/points'
import { fetchTeams } from '@/api/teams'
import { ref, watch } from 'vue'


const props = defineProps({
    teamId: String
});

const myMatchsData = ref([]);

const fetchData = async () => {
    myMatchsData.value = await fetchMatchsFromATeam(props.teamId);
    const allTeam = await fetchTeams();
    myMatchsData.value.forEach(match => {
        match.time = match.time.substring(0, 5);
        match.team1 = Object.values(allTeam).find(team => team.id === match.team1)?.name || 'Équipe mystérieuse';
        match.team2 = Object.values(allTeam).find(team => team.id === match.team2)?.name || 'Équipe mystérieuse';
    });
}

watch(() => props.teamId, async (newValue, oldValue) => {
    if (newValue !== oldValue) {
        if (newValue) {
            await fetchData();
        } else {
            myMatchsData.value = [];
        }
    }
});


</script>
<template>
    <div v-if="myMatchsData">
        <div v-for="(match, index) in myMatchsData" :key="index" class="py-2">
            <div class="flex">
                <p class="text-neutral-400 p-1">{{ match.time }}</p>
                <div v-if="match.team1_score < match.team2_score" class="p-1 flex">
                    <p style="color: #FF3E3E;">{{ match.team1_score }}</p>
                    <p> - </p>
                    <p style="color: #34A1FF;">{{ match.team2_score }}</p>
                </div>
                <div v-else-if="match.team1_score > match.team2_score" class="p-1 flex">
                    <p style="color: #34A1FF;">{{ match.team1_score }}</p>
                    <p> - </p>
                    <p style="color: #FF3E3E;">{{ match.team2_score }}</p>
                </div>
                <p v-else class="p-1">{{ match.team1_score }} - {{ match.team2_score }}</p>
            </div>
            <p>{{ match.team1 }} - {{ match.team2 }}</p>
        </div>
    </div>
    <div v-else>
        <p>Chargement...</p>
    </div>
</template>