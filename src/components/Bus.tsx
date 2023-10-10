import { api } from "@/utils/api";
import { Seat } from "./Seat";
import {useState, useEffect} from 'react'
import Pusher from "pusher-js";


interface Props {
  seats: number;
  busId: number;
}

export function Bus({ seats, busId }: Props) {
  const [selectedSeat, setSelectedSeat]= useState<number>()
  const seatsList = Array.from(Array(seats).keys());
  const half = Math.ceil(seatsList.length / 2);
  const firstRow = seatsList.slice(0, half);
  const secondRow = seatsList.slice(half);

 const bookSeatMutation = api.bus.bookSeat.useMutation();


function bookSeat(){
  if(!selectedSeat){
    return alert('selecciona un asiento');
  }
bookSeatMutation.mutate({
  busId,
  seatNumber:selectedSeat
},{
  onSuccess(data, variables, context){
    alert('Reservado correctamente')
  },
}
);
}
const response =api.bus.getBookedSeats.useQuery({busId});
console.log({bookedSeats: response.data});
const bookedSeats = response.data;


const pusher = new Pusher("00f7f302034e3ab5579d", {
  cluster:"sa1",
});

const utils = api.useContext();

useEffect(()=>{
  const channel = pusher.subscribe('lugares-real-time');

channel.bind('booked-seat', ()=>{
 
  utils.bus.getBookedSeats.invalidate();
})
return ()=>{
  pusher.unsubscribe('lugares-real-time')
}


})




  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="w-96 rounded-lg rounded-t-[80px] border-b-[12px] border-t-[12px] bg-stone-100 p-4">
        <div className="flex justify-around">
          <div className="mt-4 grid w-full grid-cols-2 items-start gap-10">
            <div className="grid grid-cols-2 gap-4">
              
              { 
                firstRow.map(seat=> 
                <Seat
                 setSelectedSeat={setSelectedSeat}
                  number={seat}
                   key={seat}
                   booked={bookedSeats?.includes(seat)}
                   />)
              }
            </div>

            <div className="grid grid-cols-2 gap-4">
            { 
                secondRow.map(seat=> 
                <Seat
                 setSelectedSeat={setSelectedSeat}
                  number={seat}
                   key={seat}
                   booked={bookedSeats?.includes(seat)}
                   />)
              }

            </div>
          </div>
        </div>
      </div>
      <button onClick={bookSeat} className="mt-6 rounded bg-indigo-600 px-7 py-2 text-white">Reservar Asiento</button>

      <p className="mt-4">asientos totales: {seats} </p>

      <p className="mt-4">asientos seleccionado: {selectedSeat} </p>
    </div>
  );
}
