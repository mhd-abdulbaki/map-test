import { MapModule } from "@/lib/module";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Map",
};

export default function Home() {
  return (
    <main>
      <MapModule />
    </main>
  );
}
