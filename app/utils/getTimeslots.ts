import { supabase } from "../lib/createClient"
import { Timeslot } from "../types/Timeslot"

export async function getTimeslots() {
  const { data } = await supabase
    .from('timeslots')
    .select()
    .gt('stock', 0)
    .order('id')
  
  // 自動生成の型を使ってないので、手動でマッピングする
  const timeslots: Timeslot[] = (data ?? []).map(item => ({
    id: item.id as number,
    name: item.name as string,
    stock: item.stock as number,
  }))

  return timeslots
}