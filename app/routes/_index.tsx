import { redirect, type MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Macarons" },
    {
      name: "description",
      content:
        "Design System and Styled UI Components Built with Vanilla Extract and Radix",
    },
  ];
};

export function loader() {
  return redirect("/docs/intro");
}
