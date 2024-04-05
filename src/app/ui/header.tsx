import { HeaderToolbar, HideOnMobile } from "@/app/ui/home";
import NavLinks from "@/app/ui/nav-links";
import { Toggler } from "@/theme";
import Link from "next/link";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import { AppBar } from "@mui/material";

function Header() {
  return (
    <AppBar position="sticky">
      <HeaderToolbar>
        <HideOnMobile>
          <Link href="/" style={{ padding: "8px" }}>
            <LiveTvIcon sx={{ color: "text.primary" }} />
          </Link>
        </HideOnMobile>
        <NavLinks />
        <Toggler />
      </HeaderToolbar>
    </AppBar>
  );
}
export default Header;
