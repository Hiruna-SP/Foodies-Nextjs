import Link from "next/link";


export default function Home() {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Time to get started!
      </h1>
      <Link href="/meals">Meals Page</Link>
      <br />
      <Link href="/community">Community Page</Link>

    </main>
  );
}
