export async function GET() {
  return Response.json({
    Products: [{ name: "name1" }, { name: "name1" }, { name: "name3" }],
  });
}
