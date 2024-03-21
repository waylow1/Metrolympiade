<script setup>
import { supabase } from '@/supabase'
import { RouterLink, RouterView } from 'vue-router';
import Navbar from '@/components/NavbarComponent.vue'
</script>
<template>
  <Navbar></Navbar>
  <RouterView />
</template>