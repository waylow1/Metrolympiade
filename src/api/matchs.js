import { supabase } from '@/supabase'


export const insertMatch = async (match) => {
    const { data, error } = await supabase
    .from('matchs')
    .insert({
      team1: match.team1,
      team2: match.team2,
      sport: match.sport,
      time: match.time,
      team1_score: match.team1_score,
      team2_score: match.team2_score,
    })
  if (error) {
    console.error('Error inserting match : ',error)
    return -1
  }
  return data
}
