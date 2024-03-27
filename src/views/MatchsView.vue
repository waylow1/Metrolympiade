<script setup>
import {useRouter} from 'vue-router';


const { push: routerPush } = useRouter();
</script>
<template>
    <h1>
        Matchs
    </h1>
    <button @click=" routerPush({ name: 'matchCreation' });">Create a match</button>
</template>