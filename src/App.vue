<script setup>
import { supabase } from '@/supabase';
import { RouterLink, RouterView } from 'vue-router';
import Navbar from '@/components/NavbarComponent.vue'
</script>
<template>
  <div class="top-0">
    <Navbar></Navbar>
  </div>
  <div class="mt-7">
    <RouterView />
  </div>
</template>