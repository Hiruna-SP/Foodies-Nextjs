export default function MealPage({ params }) {
  return (
    <div>
      <h1>Meal Page</h1>
      <p>This is the Meal page for meal: {params.slug}</p>
    </div>
  );
}
