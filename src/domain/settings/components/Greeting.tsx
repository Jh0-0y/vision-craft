import { useGreeting } from "@/domain/settings/queries/settings";

export default function Greeting() {
  // queries
  const { greeting } = useGreeting();

  return <h1>{greeting ?? " "}</h1>;
}
