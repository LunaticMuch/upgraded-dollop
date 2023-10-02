import { type NextRequest } from "next/server";
import { User } from "@/models/user";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");

  const user = User.build({ name:"Stefano" });
  console.log(user instanceof User); // true
  console.log(user.name); // "Jane"

  return Response.json({ query });
}
