import { supabase } from '@/supabase'


export const insertMatch = async (match) => {
    const { data, error } = await supabase
    .from('teams')
    .insert({
      team1: match.myTeam,
      team2: match.opponentTeam,
      sport: match.sport,
      team1_score: match.myTeamScore,
      team2_score: match.opponentTeamScore,
      time: match.time,
    })
  if (error) {
    console.error('Error fetching teams : ',error)
  }
  return data
}