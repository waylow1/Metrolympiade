
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

export const updateTeamName = async (teamId, name) => {

    const {count,errorCountable} = await supabase.from('teams').select('*',{count:'exact'}).eq('name',name)
    if(count>0){
        alert("Ce nom d'équipe est déjà pris");
        return
    }
    if(errorCountable){
        console.error('Error fetching teams : ',errorCountable)
    }
  const { data, error } = await supabase
    .from('teams')
    .update({ name })
    .eq('id', teamId)
  if (error) {
    alert("Choisir un autre nom d'équipe");
  }
  return data
}

export const fetchTeamById = async(teamId)=>{
  const {data,error} = await supabase.from('teams').select('*').eq('id', teamId);
    if(error){
      alert("Error Fetching team by id")
    }
    return data
}

export const updateTeamAvatar = async (teamId, img_url) =>{
  const { data, error } = await supabase
    .from('teams')
    .update({ img_url })
    .eq('id', teamId)
  if (error) {
    console.error('Error updating team avatar : ',error)
  }
  return data
}