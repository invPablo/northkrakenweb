import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black py-16 border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <Link href="/templates/iron-gym/demo" className="text-4xl font-[family-name:var(--font-oswald)] font-bold text-white tracking-tighter block mb-4">
            IRON<span className="text-[var(--accent)]">.</span>
          </Link>
          <p className="text-white/50 max-w-sm">
            Forge your legacy. We are more than a gym; we are a community of dedicated individuals pushing boundaries and breaking limits.
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-[family-name:var(--font-oswald)] font-bold uppercase tracking-widest mb-6">Explore</h4>
          <ul className="flex flex-col gap-3">
            <li><Link href="#home" className="text-white/50 hover:text-white transition-colors">Home</Link></li>
            <li><Link href="#about" className="text-white/50 hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="#classes" className="text-white/50 hover:text-white transition-colors">Classes</Link></li>
            <li><Link href="#trainers" className="text-white/50 hover:text-white transition-colors">Trainers</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-[family-name:var(--font-oswald)] font-bold uppercase tracking-widest mb-6">Contact</h4>
          <ul className="flex flex-col gap-3 text-white/50">
            <li>123 Muscle Ave, NY 10001</li>
            <li>info@iron.template</li>
            <li>+1 (555) 123-4567</li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
        <p className="text-white/30 text-sm">© {new Date().getFullYear()} Iron Template. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="text-white/30 hover:text-[var(--accent)] transition-colors">IG</a>
          <a href="#" className="text-white/30 hover:text-[var(--accent)] transition-colors">TW</a>
          <a href="#" className="text-white/30 hover:text-[var(--accent)] transition-colors">FB</a>
        </div>
      </div>
    </footer>
  );
}
