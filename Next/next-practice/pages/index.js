import Link from "next/link";
import { usePathname } from 'next/navigation'

export default function Home() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <>
      <p>Root directory</p>
      <Link href="about">About</Link>
      <Link href="users">Users</Link>
    </>
  )
}
