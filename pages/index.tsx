import Image from "next/image";

export default function Home() {
  return (
    <div className="text-white">
      <main className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold">Welcome to SERF</h1>
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <p className="mt-4 text-sm text-gray-400">We are live.</p>
      </main>
    </div>
  );
}
