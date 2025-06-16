import { PrismaClient } from "@prisma/client";

<<<<<<< HEAD
export const prisma = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = prisma;
}
=======
// add prisma to the global type

let prisma;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;
>>>>>>> fea49b0bfb8ec94b68dd5d326ebe0d0c70147af1
