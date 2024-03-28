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
<<<<<<< HEAD

export const fetchMatchs = async() => {
  const {data,error} = await supabase
  .from('matchs')
  .select(
    '*')
  .order('created_at',{ascending:false})
  .limit(10)
  if (error) {
      console.error('Error fetching teams : ',error)
  }
  return data.reverse()
  }
  
=======
>>>>>>> 3048e61f85f79a2caaf5611d7901b66f65c0a712
