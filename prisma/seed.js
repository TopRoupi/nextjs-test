const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const thingData = [
  {
    name: 'aaaaa',
    content: 'aaaaaaaaaaaaaaaaaaaaaa',
  },
  {
    name: 'aaaaa2',
    content: 'aaaaaaaaaaaaaaaaaaaaaa',
  },
]

async function main() {
  console.log(`Start seeding ...`)
  for (const t of thingData) {
    const thing = await prisma.thing.create({
      data: t
    })
    console.log(`Created thing with id: ${thing.id}`)
  }
  console.log(`Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
