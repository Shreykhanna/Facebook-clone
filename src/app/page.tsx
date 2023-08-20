import Image from "next/image";
import HomePage from "@/components/HomePage";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  justify-center py-24 space-between">
      <HomePage />
    </main>
  );
}
