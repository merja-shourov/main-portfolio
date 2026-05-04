export async function GET() {
  const res = await fetch(
    "https://codeforces.com/api/user.info?handles=merja_shourov",
    { cache: "no-store" }
  );

  const data = await res.json();
  const user = data.result[0];

  return Response.json({
    rating: user.rating,
    maxRating: user.maxRating,
    rank: user.rank,
  });
}