import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "./modeToggler";

const Topbar = () => {
  return (
    <nav className="topbar">
      <Link href="/" className="flex items-center gap-4">
        <Image src="/assets/logo.jpg" alt="logo" width={28} height={28} />
        <p className="text-heading3-bold text-light-1 max-xs:hidden">Birthmate</p>
      </Link>

      <div className="flex items-center gap-1">
        <div className="">
          {/* <ModeToggle /> */}
        </div>
        <div className="block md:hidden">
          <div className="block cursor-pointer">
            <Image
              src="/assets/logout.svg"
              alt="logout"
              width={24}
              height={24}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
