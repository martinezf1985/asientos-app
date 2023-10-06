
import {Dispatch, SetStateAction} from 'react'



interface Props {
    number: number;
     setSelectedSeat: Dispatch<SetStateAction<number | undefined>>

}

export const Seat = ({number, setSelectedSeat}:Props) => {
  return (
    <div>
<div onClick={() => setSelectedSeat(number)} className="round-r-xl round-l-xl } flex h-14 w-14 cursor-pointer items-center justify-center rounded-t-xl bg-green-400 text-lg font-semibold text-white">
   {number}
    </div>




    </div>
  )
}
