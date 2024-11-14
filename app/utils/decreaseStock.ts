import { supabase } from "../lib/createClient"
import { getTimeslots } from "./getTimeslots"

export async function decreaseStock(timeslotId: string, decreaseBy: string) {
  try {
    const fetchedData = await getTimeslots()
    const filteredTimeslot = fetchedData?.find((timeslot) => {
      return timeslot.id === Number(timeslotId)
    })
    console.log(filteredTimeslot)

    if (!filteredTimeslot) {
      return
    }

    const currentStock = filteredTimeslot.stock
    
    if (currentStock < Number(decreaseBy)) {
      console.log('not enough stock')
      return
    }

    const { error } = await supabase
      .from('timeslots')
      .update({ stock: currentStock - Number(decreaseBy)}) // 今取得した最新の在庫から参加人数を引いた数で更新する
      .eq('id', Number(timeslotId))
    
    if (error) {
      console.log(error)
    }
  } catch (error) {
    console.log(error)
  }
}