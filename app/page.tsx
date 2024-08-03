import MasonryGrid from "@/components/MasonryGrid";
import { items, breakpoints } from "@/data/items";

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4"></h1>
      <MasonryGrid items={items} breakpoints={breakpoints} />
    </div>
  );
}
