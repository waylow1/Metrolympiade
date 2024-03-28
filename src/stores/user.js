import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const user = ref(null)

  // Supprimez fetchUser et utilisez setUser directement
  function setUser(newUser) {
    user.value = newUser;
  }

  return { user, setUser }
})