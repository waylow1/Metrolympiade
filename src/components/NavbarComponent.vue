<script setup>
import { loadScript } from "vue-plugin-load-script";
  loadScript("https://unpkg.com/@themesberg/flowbite@1.1.1/dist/flowbite.bundle.js")
    .then(() => {
      
    })
    .catch(() => {
      console.log("failed loading external script")
    });
</script>
<template>
  <div class="mx-auto bg-gray-900">
    <nav class="p-2 border-gray-200 px-2 mb-10">
      <div class="container mx-auto flex flex-wrap items-center justify-between">
        <a href="#" class="flex">
          <p class="text-blue-700 text-3xl font-black">M</p>
          <span class="self-center text-lg font-semibold whitespace-nowrap">etrolypmiade</span>
        </a>
        <div class="flex md:order-2">
          
          <button
            data-collapse-toggle="mobile-menu-3"
            type="button"
            class="md:hidden text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center"
            aria-controls="mobile-menu-3"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            
          </button>
        </div>
        <div
          class="hidden md:flex justify-between items-center w-full md:w-auto md:order-1"
          id="mobile-menu-3"
        >
          <ul class="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
            <li>
              <a
                href="#"
                class="bg-blue-700 md:bg-transparent text-white block pl-3 pr-4 py-2 md:text-blue-700 md:p-0 rounded"
                aria-current="page"
                >Team settings</a
              >
            </li>
            <li>
              <a
                href="#"
                class="text-white hover:bg-gray-50 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0"
                >Ranking</a
              >
            </li>
            <li>
              <a
                href="#"
                class="text-white hover:bg-gray-50 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0"
                >Match</a
              >
            </li>
            <li>
              <a
                href="#"
                class="text-white hover:bg-gray-50 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0"
                >Logout</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
