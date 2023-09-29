//import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { db } from "@/server/db";
import { z } from "zod";


export const busRouter = createTRPCRouter({
  getAllBuses: publicProcedure.query(async () => {
    try {
      const response = await db.bus.findMany();
      return response;
    } catch (error) {
      console.error("Error al obtener los autobuses:", error);
      return [];
    }
  }),

getBus:publicProcedure
.input(
  z.object({
    busId: z.number(),
  })
  )
  .query(({input:{busId}})=>{
  const response= prisma.bus.findUnique({wuere: {id: busId}});
  return response;
})










});


