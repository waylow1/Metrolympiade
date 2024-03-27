import { ref } from 'vue'
import { defineStore } from 'pinia'
import { supabase } from '@/supabase'

export const useUserStore = defineStore('user', () => {
  const userTeam = ref(null)

  async function fetchUserTeam(userId){
    if(!userId) {
        userTeam.value = null
        return
    }
    const {data,error} = await supabase.from('team').select('*').eq('leader',userId).single()
    if(error){
        console.error('Error fetching user profile : ',error)
    }
    else{
        userTeam.value = data
    }
  }


  return { userTeam, fetchUserTeam }
})
