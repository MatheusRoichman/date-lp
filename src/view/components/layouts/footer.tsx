import { Instagram } from "@/view/assets/icons/instagram";
import { Tiktok } from "@/view/assets/icons/tiktok";
import { X } from "@/view/assets/icons/x";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-primary-darker text-white p-4 w-full fixed bottom-0">
      <div className="mx-auto max-w-7xl flex items-center justify-between gap-4">
        <div className="flex items-center gap-8">
          <p>&copy; {new Date().getFullYear()} Date, inc.</p>
          <nav>
            <ul className="list-disc flex items-center gap-8">
              <li>
                <Link href="/about-us">Sobre nós</Link>
              </li>
              <li>
                <Link href="/contact">Contato</Link>
              </li>
              <li>
                <Link href="/help">Segurança</Link>
              </li>
              <li>
                <Link href="/help">Suporte</Link>
              </li>
            </ul>
          </nav>
        </div>

        <nav>
          <ul className="flex items-center gap-6">
            <li>
              <Link href={process.env.NEXT_PUBLIC_TIKTOK_URL}>
                <span className="sr-only">TikTok</span>
                <Tiktok size={20} />
              </Link>
            </li>
            <li>
              <Link href={process.env.NEXT_PUBLIC_INSTAGRAM_URL}>
                <span className="sr-only">TikTok</span>
                <Instagram size={20} />
              </Link>
            </li>
            <li>
              <Link href={process.env.NEXT_PUBLIC_X_URL}>
                <span className="sr-only">TikTok</span>
                <X size={20} />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
