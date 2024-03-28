<script setup>
import { ref } from 'vue'
import { supabase } from '@/supabase';
import { useRouter } from 'vue-router'
import AppButton from '@/components/AppButton.vue';


const { push: routerPush } = useRouter();
const email = ref('');
const password = ref('');

const onSubmit = async () => {
  if (!email.value || !password.value) return;
  const { error } = await supabase.auth.signUp({
    email: email.value,
    password: password.value,
  });
  if (error) {
    alert("Une erreur s'est produite lors de l'inscription :", error.message);
  } else {
    alert("L'inscription a été réussie");
    routerPush({ name: 'rankings' });
  }
};
</script>

<template>
  <div class="rounded-lg shadow-2xl h-fit" style="background-color: #202127;">
    <div class="w-full flex justify-center pb-2">
      <p class="text-2xl p-3">Création de compte</p>
    </div>
    <form @submit.prevent="onSubmit" class="flex flex-col gap-2 p-4 mx-auto max-w-96">
      <div class="flex flex-col">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" class="p-2 text-white bg-black border-2 border-black border-b-gray-300 rounded-md ml-3 not-resizable-ta" required />
      </div>
      <div class="flex flex-col">
        <label for="password">Mot de passe</label>
        <input type="password" id="password" v-model="password" class="p-2 text-white bg-black border-2 border-black border-b-gray-300 rounded-md ml-3 not-resizable-ta" required />
      </div>
      <AppButton>
        C'est parti ! 
      </AppButton>
    </form>
    <button type="button" @click="routerPush({ name: 'login' })" class="w-full flex justify-center pb-2">
      <p style="color: #ff7b00;"> J'ai déjà un compte</p>
    </button>
  </div>
</template>