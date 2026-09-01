import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useDocumentMeta } from "@/hooks/use-document-meta";

const NotFound = () => {
  useDocumentMeta("Page not found | Jordan Santos-Bouckley");

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main id="main" className="flex flex-1 items-center">
        <div className="section-container py-24 text-center">
          <p className="eyebrow mb-4">Error 404</p>
          <h1 className="text-4xl font-semibold sm:text-5xl">
            This page does not exist
          </h1>
          <p className="prose-measure mx-auto mt-6 text-lg text-muted-foreground">
            The link may be out of date, or the address mistyped.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg">
              <Link to="/">Back to home</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/resume">View resume</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
