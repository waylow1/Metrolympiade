<script setup>
import {  supabase } from '@/supabase';




const fetchTeamData = async() =>{
    const { data, error } = await supabase.from('teams').select('*').eq('leader','edbdadfa-82ee-4757-a4b0-ab6e77dbe958');
    if(error){
        console.log('error', error);
    }
    else{
        return data;
    }
}

const teamData = fetchTeamData();

</script>

<template>
        <div v-if="teamData">
            <label for="NomEquipe">Nom de l'équipe :</label>
            <span> {{ teamData[""] }}</span>l
        </div>
        <div v-else>
            <span>Chargement...</span>
        </div>
</template>
