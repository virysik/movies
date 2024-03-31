import { Toolbar } from "@mui/material";
import { Container, HeaderAppBar, HeaderToolbar } from "@/app/ui/home";
import NavLinks from "@/app/ui/nav-links";

function Header() {
  return (
    <HeaderAppBar>
      <Container>
        <HeaderToolbar>
          <NavLinks />
        </HeaderToolbar>
      </Container>
    </HeaderAppBar>
  );
}
export default Header;
