"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { HeaderLink } from "@/app/ui/home";
import { useTheme } from "@mui/material";

const links = [
  { name: "Movies", href: "/" },
  { name: "TV series", href: "/series" },
];

export default function NavLinks() {
  const pathname = usePathname();
  const theme = useTheme();
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            style={{
              color:
                pathname === link.href ? theme.palette.text.primary : "inherit",
            }}
          >
            <HeaderLink>{link.name}</HeaderLink>
          </Link>
        );
      })}
    </>
  );
}
