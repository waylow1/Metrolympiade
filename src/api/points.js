import { supabase } from '@/supabase'


export const fetchPoints = async (teamID) => {
  const { data, error } = await supabase
  .from('matchs')
  .select('*')
  .or(`team1.eq.${teamID},team2.eq.${teamID}`);

  if (error) {
    console.error('Error fetching points : ',error)
    return -1
  }
  return data
}

export const subscribePoints = () => {
    

}