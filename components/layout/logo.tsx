import Link from "next/link";
import LogoSvg from "@/public/logo.svg"
import Image from "next/image";

export function Logo() {
  return (
    <Link href={"/"} className="flex items-center gap-2 shrink-0">
      <Image src={LogoSvg} width={40} height={40} alt="logo" />
      {/* <span className="text-xl font-bold">
        electro
      </span> */}
    </Link>
  )
}