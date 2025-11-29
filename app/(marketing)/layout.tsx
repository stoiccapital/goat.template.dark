import type { ReactNode } from "react";
import { MarketingLayout } from "./_components/marketing-layout";

export default function MarketingSegmentLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <MarketingLayout>{children}</MarketingLayout>;
}

