import Image from "next/image";
import JobItem from "../components/JobItem";
import prisma from "../lib/prisma";
export default async function Home() {
  const jobs = await prisma?.job.findMany({
    where: { approved: true },
    orderBy: { createdAt: "desc" },
  });
  return (
    <main className="h-full p-2 sm:p-6 w-full flex flex-col gap-4">
      {jobs?.map((job) => <JobItem key={job.id} job={job} />)}
    </main>
  );
}
