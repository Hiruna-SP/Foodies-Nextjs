import Link from "next/link";
import classes from "./page.module.css";
import MealGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

export const metadata = {
  title: "All Meals",
  description: "Browse all available meals",
};


async function Meals(){
  const meals = await getMeals();

  return <MealGrid meals={meals}/>;
}

export default function MealsPage() {


  return (
    <>
    <header className={classes.header}>
      <h1>
        Delicious meals, created {''} <span className={classes.highlight}>by you</span>
      </h1>
    </header>
    <p>
      Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.
    </p>
    <p className={classes.cta}> 
      <Link href="/meals/share">Share your meal</Link>
    </p>
    <main className={classes.main}>
      <Suspense fallback={<p className={classes.loading}>Loading meals...</p>}>
      <Meals />
      </Suspense>
    </main>
    </>
  );
}
