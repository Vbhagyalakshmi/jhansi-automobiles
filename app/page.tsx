import type { Metadata } from "next";
import Site from "@/components/Site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Page() {
  return <Site />;
}
