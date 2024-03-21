import { supabase } from '@/supabase'


export const insertMatch = async () => {
    const { data, error } = await supabase
    .from('teams')
    .select('*')
  if (error) {
    console.error('Error fetching teams : ',error)
  }
  return data
}