import { redirect, type V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Madeleine" },
    {
      name: "description",
      content:
        "Design System and Styled UI Components Built with Vanilla Extract and Radix",
    },
  ];
};

export function loader() {
  return redirect("/docs");
}
