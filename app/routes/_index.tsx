import { type MetaFunction } from "@remix-run/node";
import UI from "./docs/route";

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

export default function Index() {
  return <UI />;
}
