import Link from "next/link";

export default function MenuItem({ title, address, Icon }) {
  return (
    <Link href={address} className="hover:text-amber-500">
      <Icon className="text-2xl md:hidden" />
      <p className="uppercase hidden md:inline">{title}</p>
    </Link>
  );
}
