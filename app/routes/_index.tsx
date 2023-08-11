import { redirect, type V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Madeleines" },
    {
      name: "description",
      content: "UI Components Built With Radix and Vanilla Extract ",
    },
  ];
};

export function loader() {
  return redirect("/docs");
}
