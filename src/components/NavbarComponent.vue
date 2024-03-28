<script setup>
import { loadScript } from "vue-plugin-load-script";
import { useRouter } from 'vue-router';
import { supabase } from '@/supabase';
import { ref } from 'vue';

const { push: routerPush } = useRouter();
const router = useRouter();
const loading = ref(false);

const logout = async ()=>{
    loading.value = true;
    await supabase.auth.signOut()
    router.push('/login')
}
loadScript("https://unpkg.com/@themesberg/flowbite@1.1.1/dist/flowbite.bundle.js")
  .then(() => {

  })
  .catch(() => {
    console.log("failed loading external script")
  });
</script>
<template>
  <div id="navbar" class="max-w-2xl mx-auto">
    <nav class="border-gray-200 px-2 mb-10">
      <div class="container mx-auto flex flex-wrap items-center justify-between">
        <div class="flex md:hover:bg-gray-900">
          <p class="text-3xl font-black" style="color: #ffffff;">M</p>
          <span class="self-center text-lg font-semibold whitespace-nowrap" style="color: #ff7b00;">etrolympiade</span>
        </div>
        <div class="flex md:order-2">
          <button data-collapse-toggle="mobile-menu-3" type="button"
            class="md:hidden text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center"
            aria-controls="mobile-menu-3" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"></path>
            </svg>
            <svg class="hidden w-6 h-6" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>
        <div class="hidden md:flex justify-between items-center w-full md:w-auto md:order-1" id="mobile-menu-3">
          <ul class="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
            <li>
              <button type="button" @click="routerPush({ name: 'teamSettings' })">
                <p class="hover:bg-gray-50 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-white md:p-0"
                  style="color: #ff7b00;"
                  aria-current="page">Team settings</p>
              </button>
            </li>
            <li>
              <button type="button" @click="routerPush({ name: 'rankings' })">
              <p class="text-white hover:bg-gray-50 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-gray-400 md:p-0">Ranking</p>
              </button>
            </li>
            <li>
              <button type="button" @click="routerPush({ name: 'matchs' })">
              <p class="text-white hover:bg-gray-50 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-gray-400 md:p-0">Match</p>
              </button>
            </li>
            <li>
              <button  type="button" @click="logout">
              <p class="text-white hover:bg-gray-50 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-gray-400 md:p-0">Logout</p>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
