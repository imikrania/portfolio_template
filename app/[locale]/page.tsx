import { notFound } from "next/navigation";
import { getContent, isLocale } from "@/content";
import { PortfolioPage } from "../components/PortfolioPage";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }
  return <PortfolioPage content={getContent(locale)} />;
}
