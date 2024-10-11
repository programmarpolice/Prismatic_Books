const prisma = require("..");
const seed = async () => {
  const books = [
    { title: "The Great Gatsby" },
    { title: "Jane Eyre" },
    { title: "James and the Giant Peach" },
    { title: "Pride and Prejudice" },
    { title: "Sense and Sensibility" },
    { title: "Phantom of the Opera" },
    { title: "Tale of Two Cities" },
    { title: "Drood" },
    { title: "Where the Wild Things Are" },
  ];
  await prisma.book.createMany({ data: books });
};
seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
