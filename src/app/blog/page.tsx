import { Metadata } from "next";
import Link from "next/link";
import { Header, Footer } from "@/components/layout";
import { Container } from "@/components/layout/Container";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Blog - Oasis",
  description:
    "Updates, pilot results, and educational insights from the Oasis team.",
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        <Container>
          <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-20 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Blog
            </h1>

            <div className="flex items-center gap-2 mb-6">
              <span className="inline-block w-12 h-1 bg-oasis-primary rounded-full" />
              <span className="text-sm font-medium text-oasis-primary uppercase tracking-wider">
                Coming Soon
              </span>
              <span className="inline-block w-12 h-1 bg-oasis-primary rounded-full" />
            </div>

            <p className="text-lg text-gray-600 max-w-md mb-10 leading-relaxed">
              Stories from the field, educational insights, and updates on our
              journey to transform learning in underserved communities.
            </p>

            <Link href="/">
              <Button
                variant="outline"
                className="gap-2 border-oasis-primary text-oasis-primary hover:bg-oasis-primary hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
