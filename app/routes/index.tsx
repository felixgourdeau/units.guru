import { json, Outlet, redirect } from "remix";
import type { LoaderFunction } from "remix";

export const loader: LoaderFunction = async () => {
  console.log("PROUTEEEE1");
  //return redirect("/gas");
  return json({});
};

export default function App() {
  console.log("PROUTEEEE");
  return <Outlet />;
}
