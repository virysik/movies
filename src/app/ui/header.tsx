import { Container, HeaderAppBar, HeaderToolbar } from "@/app/ui/home";
import NavLinks from "@/app/ui/nav-links";
import { Toggler } from "@/theme";

function Header() {
  return (
    <HeaderAppBar>
      <Container>
        <HeaderToolbar>
          <NavLinks />
          <Toggler />
        </HeaderToolbar>
      </Container>
    </HeaderAppBar>
  );
}
export default Header;
