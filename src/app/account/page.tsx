import { getBag } from "@/lib/bag";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/account/edit">EDIT</Link>
      <h1>{getBag()}</h1>
    </main>
  );
}
