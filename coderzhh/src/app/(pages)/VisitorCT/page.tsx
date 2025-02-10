import { NumberTicker } from "@/components/magicui/number-ticker";
import { getVisitorCT } from "@/server/actions/VisitorCT";

export async function VisitorCT() {
  const visitor = await getVisitorCT();
  const value = visitor.slice(-1)[0].id;
  return (
    <NumberTicker
      value={value}
      decimalPlaces={0}
      className="whitespace-pre-wrap text-8xl font-medium tracking-tighter text-black dark:text-white"
    />
  );
}