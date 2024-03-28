import { ref } from 'vue'
import { defineStore } from 'pinia'
import { supabase } from '@/supabase'

export const useUserStore = defineStore('user', () => {
  const user = ref(null)

  async function fetchUserTeam(userId){
    if(!userId) {
        user.value = null
        return
    }
    const {data,error} = await supabase.from('users').select('*').eq('leader',userId).single()
    
    if(error){
        console.error('Error fetching user profile : ',error)
    }
    else{
        user.value = data
    }
  }


  return { user, fetchUserTeam }
})
