import { HeaderAppBar, HeaderToolbar, HideOnMobile } from "@/app/ui/home";
import NavLinks from "@/app/ui/nav-links";
import { Toggler } from "@/app/theme";
import Link from "next/link";
import LiveTvIcon from "@mui/icons-material/LiveTv";

function Header() {
  return (
    <HeaderAppBar>
      <HeaderToolbar>
        <HideOnMobile>
          <Link href="/" style={{ padding: "8px" }}>
            <LiveTvIcon sx={{ color: "primary.contrastText" }} />
          </Link>
        </HideOnMobile>
        <NavLinks />
        <Toggler />
      </HeaderToolbar>
    </HeaderAppBar>
  );
}
export default Header;
