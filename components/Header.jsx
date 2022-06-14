import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import HeaderItem from "./HeaderItem";
function Header() {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly mt-5 max-w-2xl">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTION" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>
      <Image
        className="object-contain cursor-pointer"
        src="https://www.logo.wine/a/logo/Hulu/Hulu-Logo.wine.svg"
        width={200}
        height={100}
        alt="null"
      />
    </header>
  );
}

export default Header;
