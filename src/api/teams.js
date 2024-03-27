
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


export const updateTeamMembers = async (teamId, members) => {
  const { data, error } = await supabase
    .from('teams')
    .update({ members })
    .eq('id', teamId)
  if (error) {
    console.error('Error updating team members : ',error)
  }
  return data
}