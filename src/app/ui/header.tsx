"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import links from "../lib/links";
import clsx from "clsx";

export default function Header() {
  const pathname = usePathname();
  const navigation = links.map((link) => (
    <li key={link.href}>
      <Link
        key={link.href}
        href={link.href}
        className={clsx("color: blue", {
          "color: red": pathname === link.href,
        })}
      >
        {link.name}
      </Link>
    </li>
  ));
  return (
    <>
      <header>
        <h1>Stock Watch</h1>
      </header>
      <nav>
        <ul>{navigation}</ul>
      </nav>
    </>
  );
}
