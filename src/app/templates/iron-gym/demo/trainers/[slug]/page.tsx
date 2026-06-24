import { trainersData } from "../../_data/mockData";
import { notFound } from "next/navigation";
import Navbar from "../../_components/layout/Navbar";
import Footer from "../../_components/layout/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  return trainersData.map((trainer) => ({
    slug: trainer.slug,
  }));
}

export default async function TrainerPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const trainer = trainersData.find((t) => t.slug === slug);

  if (!trainer) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a] text-[#f4f4f4]">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <Link href="/templates/iron-gym/demo#trainers" className="inline-flex items-center gap-2 text-[var(--accent)] hover:text-[#f4f4f4] transition-colors mb-12 font-bold tracking-widest uppercase text-sm">
            <ArrowLeft size={16} /> Back to Coaches
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div className="relative aspect-[3/4] overflow-hidden bg-[#f4f4f4]/5 rounded-2xl">
              <img 
                src={trainer.image} 
                alt={trainer.name} 
                className="w-full h-full object-cover grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
            </div>

            <div>
              <span className="text-[var(--accent)] font-bold tracking-widest uppercase text-sm block mb-4">{trainer.role}</span>
              <h1 className="text-6xl md:text-8xl font-[family-name:var(--font-oswald)] font-black uppercase mb-8 leading-none">{trainer.name}</h1>
              
              <div className="h-[1px] w-full bg-[#f4f4f4]/10 my-8" />
              
              <h2 className="text-2xl font-[family-name:var(--font-oswald)] font-bold uppercase mb-4">Biography</h2>
              <p className="text-lg text-[#f4f4f4]/70 leading-loose mb-12">
                {trainer.bio}
              </p>

              <Link href="/templates/iron-gym/demo#schedule" className="inline-block px-12 py-4 border border-[var(--accent)] text-[var(--accent)] font-bold uppercase tracking-widest hover:bg-[var(--accent)] hover:text-[#0a0a0a] transition-colors rounded-full">
                Train with {trainer.name.split(' ')[0]}
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
