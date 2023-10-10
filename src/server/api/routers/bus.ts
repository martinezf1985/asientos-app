
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { PrismaClient } from '@prisma/client';
import { z } from "zod";
import Pusher from 'pusher'
const prisma = new PrismaClient();

export const busRouter = createTRPCRouter({
  getAllBuses: publicProcedure.query(async () => {
    try {
      const response = await prisma.bus.findMany();
      return response;
    } catch (error) {
      console.error("Error al obtener los autobuses:", error);
      return [];
    }
  }),

  getBus: publicProcedure
    .input(
      z.object({
        busId: z.number(),
      })
    )
    .query(({ input: { busId } }) => {
      const response = prisma.bus.findUnique({ where: { id: busId } });
      return response;
    }),

    bookSeat: publicProcedure.input(
      z.object({
        seatNumber:z.number(),
        busId:z.number(),  
      })
    )
    .mutation(async ({ input: { busId, seatNumber } }) => {
      try {
        const response = await prisma.bookedSeats.create({
          data: {
            number: seatNumber,
            busId,
          },
        });
        if(response){
          const pusher = new Pusher({
            appId: "1684787",
            key: "00f7f302034e3ab5579d",
            secret: "ac828ae293d1e5ccd96a",
            cluster: "sa1",
            useTLS: false
          });
          
          pusher.trigger("lugares-real-time", "booked-seat", {
            message: "hello world"
            });
          
        }
        return response;
      } catch (error) {
        console.error("Error al reservar el asiento:", error);
        throw new Error("No se pudo reservar el asiento.");
      }
    }),

getBookedSeats : publicProcedure
.input(z.object({busId: z.number()}))
.query(async ({input:{busId}})=>{
  const response = await prisma.bookedSeats.findMany({
    where: {
      busId,
    },
  });
  return response.map((seat)=> seat.number);
}),



});
