import Button from "../button/Button";
import Logo from "../logo/Logo";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between gap-10">
      <Logo />
      <ul className="flex gap-4 font-inter">
        <li className="uppercase">about us</li>
        <li className="uppercase">our services</li>
        <li className="uppercase">work with us</li>
        <li className="uppercase">blog</li>
      </ul>
      <Button variant="primary" size="medium">
        get in touch
      </Button>
    </nav>
  );
}
