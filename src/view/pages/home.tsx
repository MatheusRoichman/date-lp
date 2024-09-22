import Image from "next/image";
import Link from "next/link";

export function HomePage() {
  return (
    <div className="bg-home-image h-screen relative">
      <div className="bg-home-overlay h-full" />
      <div className="h-full flex flex-col gap-4 justify-center items-center text-center text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="font-bold text-6xl">
          Conheça seu <em>date</em> perfeito
        </h1>
        <p className="text-xl max-w-[500px]">
          Descubra encontros! Se relacione! Abra seu coração e mostre sua melhor
          versão!
        </p>
        <div className="flex gap-4">
          <Link href={process.env.NEXT_PUBLIC_GOOGLE_PLAY_STORE_DOWNLOAD_LINK}>
            <Image
              src="/img/available_in_google_play.webp"
              alt="Disponível no Google Play"
              className="w-48 h-14"
              width={192}
              height={56}
            />
          </Link>
          <Link href={process.env.NEXT_PUBLIC_APP_STORE_DOWNLOAD_LINK}>
            <Image
              src="/img/available_in_app_store.webp"
              alt="Disponível na App Store"
              className="w-48 h-14"
              width={192}
              height={56}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
