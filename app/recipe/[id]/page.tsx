import { neon } from "@neondatabase/serverless";

export default async function RecipePage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;

  const sql = neon(process.env.DATABASE_URL!);
  const recipe = await sql`SELECT * FROM recipes WHERE id = ${id}`;
  const item = recipe[0];

  if (!item) {
    return <div className="text-center mt-10">Recipe not found</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://cdn.pixabay.com/photo/2020/05/10/14/25/fresh-pasta-5154229_1280.jpg)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="max-w-5xl py-5">
          <div className="card glass shadow-sm py-5">
            <figure className="">
              <img
                src={
                  item.image_url ||
                  "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                }
                alt={item.title}
                className="rounded-xl"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.title}</h2>
              <p className="underline">Description:</p>
              <p>{item.description}</p>
              <p className="underline">Ingredients:</p>
              <p>{item.ingredients}</p>
              <p className="underline">Recipe:</p>
              <p>{item.recipe}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
