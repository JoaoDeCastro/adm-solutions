import TubToShowerClient from "./TubToShowerClient";
import Layout from "@/components/layout/Layout";

export const metadata = {
  title: "Tub-to-Shower Conversions — ADM Solutions",
  description:
    "Tub-to-Shower Conversions starting at $8,000 — your new walk-in shower in 15 days or less. Schluter-certified, fully insured, serving Fairfield County, CT.",
};

export default function TubToShowerPage() {
  return (
    <Layout>
      <TubToShowerClient />
    </Layout>
  );
}
