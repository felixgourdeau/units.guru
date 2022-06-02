import type { LoaderFunction } from "@remix-run/server-runtime";
import { redirect } from "@remix-run/server-runtime";

export const loader: LoaderFunction = async ({ request, context, params }) => {
  console.log("/", { request, context, params });
  return redirect("/fuel");
};
