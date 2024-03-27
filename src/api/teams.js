
import { supabase } from '@/supabase'

export const fetchTeams = async () => {
  const { data, error } = await supabase
    .from('teams')
    .select('*')
  if (error) {
    console.error('Error fetching teams : ',error)
  }
  return data
}

export const fetchMyTeam = async (userId) => {
  const { data, error } = await supabase
    .from('teams')
    .select('*')
    .eq('leader', userId).single()
   
  if (error) {
    console.error('Error fetching teams : ',error)
  }
  return data
}