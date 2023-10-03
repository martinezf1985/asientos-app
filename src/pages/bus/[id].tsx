import { Bus } from "@/components/Bus";
import { api } from "@/utils/api";
import { useRouter} from "next/router";

export default function BusPage(){
const router = useRouter();
const response = api.bus.getBus.useQuery({ busId:parseInt(router.query.id as string),
},
{enabled:!!router.query.id}
); 
console.log(response.data);
if(!response.data && !response.isLoading) {
  return  <p>Error accediendo</p>

}
if(response.isLoading){
  return <p>cargando...</p>
}
  
 return response.data && <Bus seats={response.data?.seats}/>
  
}
