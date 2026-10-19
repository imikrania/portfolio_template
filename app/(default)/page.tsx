import { getContent, defaultLocale } from "@/content";
import { PortfolioPage } from "../components/PortfolioPage";

export default function Page() {
  return <PortfolioPage content={getContent(defaultLocale)} />;
}
