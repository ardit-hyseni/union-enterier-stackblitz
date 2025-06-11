import Link from "next/link";
import { Building2, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0B2341] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Logo and Motto */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center mb-4">
              <Building2 className="h-10 w-10 text-[#D4AF37] mr-2" />
              <span className="text-white font-bold text-xl">Union Enterier</span>
            </div>
            <p className="text-[#D4AF37] text-sm italic mb-4">
              Ekselencë në Çdo Detaj
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4 text-[#D4AF37]">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-white hover:text-[#D4AF37] transition-colors"
                >
                  Ballina
                </Link>
              </li>
              <li>
                <Link
                  href="#sherbimet"
                  className="text-white hover:text-[#D4AF37] transition-colors"
                >
                  Shërbimet
                </Link>
              </li>
              <li>
                <Link
                  href="#portofoli"
                  className="text-white hover:text-[#D4AF37] transition-colors"
                >
                  Portofoli
                </Link>
              </li>
              <li>
                <Link
                  href="#rreth-nesh"
                  className="text-white hover:text-[#D4AF37] transition-colors"
                >
                  Rreth Nesh
                </Link>
              </li>
              <li>
                <Link
                  href="#kontakt"
                  className="text-white hover:text-[#D4AF37] transition-colors"
                >
                  Na Kontaktoni
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4 text-[#D4AF37]">
              Contact Info
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-[#D4AF37]" />
                <p>
                  Prishtinë, Bregu i Diellit
                  <br />
                  Rruga Dervish Rozhaja, Nr. 43
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-[#D4AF37]" />
                <p>+383 49 117 950 / +383 45 601 556</p>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-[#D4AF37]" />
                <p>unionenterier2000@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#D4AF37]/20 text-center text-sm text-gray-400">
          © 2025 Union Enterier. Të gjitha të drejtat e rezervuara.
        </div>
      </div>
    </footer>
  );
}