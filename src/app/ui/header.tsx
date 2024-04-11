import { HeaderAppBar, HeaderToolbar, HideOnMobile } from "@/app/ui/home";
import NavLinks from "@/app/ui/nav-links";
import { Toggler } from "@/theme";
import Link from "next/link";
import LiveTvIcon from "@mui/icons-material/LiveTv";

function Header() {
  return (
    <HeaderAppBar>
      <HeaderToolbar>
        <HideOnMobile>
          <Link href="/" style={{ padding: "8px" }}>
            <LiveTvIcon sx={{ color: "info.dark" }} />
          </Link>
        </HideOnMobile>
        <NavLinks />
        <Toggler />
      </HeaderToolbar>
    </HeaderAppBar>
  );
}
export default Header;
