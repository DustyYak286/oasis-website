import { Metadata } from "next";
import Link from "next/link";
import { Header, Footer } from "@/components/layout";
import { Container } from "@/components/layout/Container";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About Us - Oasis",
  description:
    "Learn about the Oasis team and our mission to bring quality education to underserved communities worldwide.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        <Container>
          <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-20 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About Us
            </h1>

            <div className="flex items-center gap-2 mb-6">
              <span className="inline-block w-12 h-1 bg-oasis-primary rounded-full" />
              <span className="text-sm font-medium text-oasis-primary uppercase tracking-wider">
                Coming Soon
              </span>
              <span className="inline-block w-12 h-1 bg-oasis-primary rounded-full" />
            </div>

            <p className="text-lg text-gray-600 max-w-md mb-10 leading-relaxed">
              We&apos;re working on something special. Our team story, mission,
              and the people behind Oasis will be here soon.
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
