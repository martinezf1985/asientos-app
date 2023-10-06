
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { PrismaClient } from '@prisma/client';
import { z } from "zod";

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
        return response;
      } catch (error) {
        console.error("Error al reservar el asiento:", error);
        throw new Error("No se pudo reservar el asiento.");
      }
    })
});
