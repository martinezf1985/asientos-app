import Head from "next/head";
import Link from "next/link";

import { api } from "@/utils/api";

export default function Home() {
  const response = api.bus.getAllBuses.useQuery()
  const buses = response.data
 console.log(response)

  return (
    <>
      <h2>Lista de buses</h2>

      <ul>
        {buses?.map(bus=>(
          <li>
            origen:{bus.origin}, destino: {bus.destination}, asientos:{bus.seats}
          </li>
        ))}




      </ul>

    </>
  );
}
