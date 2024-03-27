import { supabase } from '@/supabase'


export const insertMatch = async (match) => {
    const { data, error } = await supabase
    .from('teams')
    .insert({
      team1: match.myTeam,
      team2: match.opponentTeam,
      sport: match.sport,
      time: match.time,
      team1_score: match.myTeamScore,
      team2_score: match.opponentTeamScore,
    })
  if (error) {
    console.error('Error fetching teams : ',error)
  }
  return data
}