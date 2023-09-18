import { getBag } from "@/lib/bag";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>{getBag()}</h1>
      <Link href="/account/edit">Edit server value</Link>
    </main>
  );
}
