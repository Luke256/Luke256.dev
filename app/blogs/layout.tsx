import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "ブログ",
    template: "%s | Luke256のブログ",
  },
  description: "Luke256's Portfolio",
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
