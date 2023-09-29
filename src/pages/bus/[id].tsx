import { api } from "@/utils/api";
import { useRouter} from "next/router";

export default function BusPage(){
const router = useRouter();
const response = api.bus.getBus.useQuery({ busId:parseInt(router.query.id as string),});
console.log(response.data);
  return (


    <h2>estas en el bus{router.query.id && router.query.id}</h2>
  )
}
