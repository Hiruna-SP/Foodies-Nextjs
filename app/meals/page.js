import Link from "next/link";

export default function MealsPage() {
  return (
    <div>
      <h1>Meals Page</h1>
        <p>Welcome to the Meals page!</p>
        <p><Link href="/">Go back to Home</Link></p>
        <p><Link href="/meals/share">share</Link></p>
        <p><Link href="/meals/meal">meal</Link></p>
    </div>
  );
}
