
import {Dispatch, SetStateAction} from 'react'



interface Props {
    number: number;
     setSelectedSeat: Dispatch<SetStateAction<number | undefined>>;
     booked?: boolean;

}

export const Seat = ({number, setSelectedSeat,booked}:Props) => {

 const seatColor = booked ? 'bg-red-600 cursor-not-allowed' : 'bg-green-500 cursor-pointer';

  return (
    <div>
<div onClick={() => {
  if(!booked){
    setSelectedSeat(number);
  }
}}
 className={`${seatColor} round-r-xl round-l-xl } flex h-14 w-14 cursor-pointer items-center justify-center rounded-t-xl bg-green-400 text-lg font-semibold text-white`}>
   {number}
    </div>




    </div>
  )
}
