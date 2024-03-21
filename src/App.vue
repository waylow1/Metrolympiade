<script setup>
import { supabase } from '@/supabase'
import { RouterLink, RouterView } from 'vue-router';
import Navbar from '@/components/Navbar.vue'
</script>
<template>
  <Navbar></Navbar>
  <RouterView />
</template>


