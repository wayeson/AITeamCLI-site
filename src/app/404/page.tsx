import type { Metadata } from "next";

import { NotFoundView } from "@/components/site/not-found-view";

export const metadata: Metadata = {
  title: "404",
  description: "Custom 404 page for the AITeam CLI public website.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "/404",
  },
};

export default function FourOhFourPage() {
  return <NotFoundView />;
}
