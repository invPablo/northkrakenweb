import { classesData } from "../../_data/mockData";
import { notFound } from "next/navigation";
import Navbar from "../../_components/layout/Navbar";
import Footer from "../../_components/layout/Footer";
import Link from "next/link";
import { ArrowLeft, Clock, User } from "lucide-react";

export async function generateStaticParams() {
  return classesData.map((cls) => ({
    slug: cls.slug,
  }));
}

export default async function ClassPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const classDetail = classesData.find((c) => c.slug === slug);

  if (!classDetail) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a] text-[#f4f4f4]">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <Link href="/templates/iron-gym/demo#classes" className="inline-flex items-center gap-2 text-[var(--accent)] hover:text-[#f4f4f4] transition-colors mb-12 font-bold tracking-widest uppercase text-sm">
            <ArrowLeft size={16} /> Back to Classes
          </Link>
          
          <h1 className="text-6xl md:text-8xl font-[family-name:var(--font-oswald)] font-black uppercase mb-6">{classDetail.title}</h1>
          
          <div className="flex flex-wrap gap-6 mb-12">
            <div className="flex items-center gap-2 px-4 py-2 bg-[#f4f4f4]/5 border border-[#f4f4f4]/10 rounded-full">
              <Clock size={18} className="text-[var(--accent)]" />
              <span className="font-bold tracking-widest uppercase text-sm">{classDetail.time}</span>
            </div>
            <Link href={`/templates/iron-gym/demo/trainers/${classDetail.trainerSlug}`} className="flex items-center gap-2 px-4 py-2 bg-[#f4f4f4]/5 border border-[#f4f4f4]/10 rounded-full hover:bg-[var(--accent)] hover:text-[#0a0a0a] transition-colors group">
              <User size={18} className="text-[var(--accent)] group-hover:text-[#0a0a0a]" />
              <span className="font-bold tracking-widest uppercase text-sm">Coach {classDetail.trainer}</span>
            </Link>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-xl md:text-2xl leading-relaxed text-[#f4f4f4]/80 mb-8 font-medium">
              {classDetail.description}
            </p>
            <div className="h-[1px] w-full bg-[#f4f4f4]/10 my-12" />
            <h2 className="text-3xl font-[family-name:var(--font-oswald)] font-bold uppercase mb-6">About this program</h2>
            <p className="text-lg text-[#f4f4f4]/60 leading-loose">
              {classDetail.longDescription}
            </p>
          </div>

          <div className="mt-16 pt-12 border-t border-[#f4f4f4]/10">
            <Link href="/templates/iron-gym/demo#schedule" className="block w-full text-center py-6 bg-[var(--accent)] text-[#0a0a0a] font-[family-name:var(--font-oswald)] font-black text-2xl uppercase tracking-widest hover:bg-[#f4f4f4] transition-colors rounded-2xl">
              Book Your Spot
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
