

interface Props {
    seats: number;
}



export function Bus({seats}:Props){

    const seatsList = Array.from(Array(seats).keys());
    console.log({seatsList4})

    return (
        
        
        <div className="flex min-h-screen flex-col items-center justify-center">
  <div className="w-96 rounded-lg rounded-t-[80px] border-b-[12px] border-t-[12px] bg-stone-100 p-4">
    <div className="flex justify-around">
      <div className="mt-4 grid w-full grid-cols-2 items-start gap-10">
        <div className="grid grid-cols-2 gap-4">
          <div className="round-r-xl round-l-xl } flex h-14 w-14 cursor-pointer items-center justify-center rounded-t-xl bg-green-400 text-lg font-semibold text-white">0</div>
          <div className="round-r-xl round-l-xl } flex h-14 w-14 cursor-pointer items-center justify-center rounded-t-xl bg-green-400 text-lg font-semibold text-white">0</div>
          <div className="round-r-xl round-l-xl } flex h-14 w-14 cursor-pointer items-center justify-center rounded-t-xl bg-green-400 text-lg font-semibold text-white">0</div>
          <div className="round-r-xl round-l-xl } flex h-14 w-14 cursor-pointer items-center justify-center rounded-t-xl bg-green-400 text-lg font-semibold text-white">0</div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="round-r-xl round-l-xl } flex h-14 w-14 cursor-pointer items-center justify-center rounded-t-xl bg-green-400 text-lg font-semibold text-white">0</div>
          <div className="round-r-xl round-l-xl } flex h-14 w-14 cursor-pointer items-center justify-center rounded-t-xl bg-green-400 text-lg font-semibold text-white">0</div>
          <div className="round-r-xl round-l-xl } flex h-14 w-14 cursor-pointer items-center justify-center rounded-t-xl bg-green-400 text-lg font-semibold text-white">0</div>
          <div className="round-r-xl round-l-xl } flex h-14 w-14 cursor-pointer items-center justify-center rounded-t-xl bg-green-400 text-lg font-semibold text-white">0</div>
        </div>
      </div>
    </div>
  </div>
  <button className="mt-6 rounded bg-indigo-600 px-7 py-2 text-white">Reservar Asiento</button>

  <p className='mt-4'>asientos totatles: {seats} </p>
</div>

        
        
    )

}