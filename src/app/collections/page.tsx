import Header from "@/components/header";
import CollectionsSection from "@/components/collections-section";
import Footer from "@/components/footer";

export default function CollectionsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24">
        <CollectionsSection showCTA={false} showAllCollections={true} />
      </main>
      <Footer />
    </>
  );
}