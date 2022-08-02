import prisma from '../../lib/prisma'

export default async function handle(req, res) {
  console.log("getting things")
  const things = await prisma.thing.findMany()

  res.json(things)
}
