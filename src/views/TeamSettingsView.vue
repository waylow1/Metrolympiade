<script setup>
import {  supabase } from '@/supabase';


const fetchTeamData = async() =>{
    const { data, error } = await supabase.from('teams').select('members,name').eq('leader','edbdadfa-82ee-4757-a4b0-ab6e77dbe958');
    if(error){
        console.log('error', error);
    }
    else{
        return data;
    }
}


const teamData = await fetchTeamData();

const membersList = teamData[0].members;

const teamName = teamData[0].name;

console.log(teamName);

</script>

<template>
        <div v-if="teamData">
            <label for="NomEquipe">Nom de l'équipe :</label>
            <span> {{ teamName }}</span>
            <div :v-for="members in membersList">
                <label for="NomMembre">Nom du membre :</label>
                <span> {{ members["name"] }}</span>
                <label for="EmailMembre">Email du membre :</label>
                <span> {{ members["email"] }}</span>
            </div>
        </div>
        <div v-else>
            <span>Chargement...</span>
        </div>
</template>
