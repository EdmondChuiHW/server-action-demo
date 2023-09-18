import Link from "next/link";
import { getBag } from "../lib/bag";

export default function Home() {
  return (
    <main className="">
      <Link href="/account">Manage account</Link>
    </main>
  );
}
