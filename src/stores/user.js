import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const storedUser = localStorage.getItem('user')
  const user =ref(null)
  if (storedUser) {
    try{
      user.value = JSON.parse(storedUser)
    }
    catch(error){
      console.log(error)
      localStorage.removeItem('user');
    }
  }
  function setUser(newUser) {
    localStorage.setItem('user', JSON.stringify(newUser));
  }

  return { user, setUser }
})