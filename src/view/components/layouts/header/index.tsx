"use client";

import { cn } from "@/utils/cn";
import { Logo } from "@/view/assets/illustrations/logo";
import { ArrowDown2 } from "iconsax-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../../ui/button";
import { getDownloadLink } from "./utils/get-download-link";

export function Header() {
  const pathname = usePathname();
  const downloadLink = getDownloadLink();

  const useWhiteColor = pathname === "/";
  const hasBorder = pathname !== "/";

  return (
    <header
      className={cn(
        "p-4 border-none md:border-b border-separator-primary fixed z-50 w-full text-sm",
        useWhiteColor ? "text-white" : "text-primary",
        hasBorder && "border-b"
      )}
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between">
        <nav className="flex items-center gap-8">
          <Link href="/">
            <span className="sr-only">Home</span>
            <Logo width={120} height={40} />
          </Link>

          <ul className="flex items-center gap-8 font-medium">
            <li>
              <Link href="/about-us">Sobre nós</Link>
            </li>

            <li className="flex items-center">
              <Link href="/help">Segurança</Link>
              <ArrowDown2 className="ml-1" size={16} />
            </li>

            <li>
              <Link href="/contact">Contato</Link>
            </li>
          </ul>
        </nav>
        <Link href={downloadLink} target="_blank">
          <Button variant={useWhiteColor ? "secondary" : "primary"}>
            Download
          </Button>
        </Link>
      </div>
    </header>
  );
}
