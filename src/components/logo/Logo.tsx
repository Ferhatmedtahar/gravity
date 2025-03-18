import Image from "next/image";
import GravityLogo from "../../../public/gravityLogo.png";
export default function Logo() {
  return (
    <Image src={GravityLogo} alt="Gravity Logo" width={100} height={100} />
  );
}
