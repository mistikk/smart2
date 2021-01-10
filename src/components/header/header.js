import styled from "styled-components";

import Select from "./select";
import { ReactComponent as Icon } from "../../assets/img/smartgift-logo.svg";

const Header = ({ setTheme, setFont }) => {
  const themeOnChange = (event) => {
    setTheme(event.target.value);
  };

  const fontSizeOnChange = (event) => {
    setFont(event.target.value);
  };

  return (
    <Nav>
      <NavHeader>
        <IconWrapper>
          <Icon />
        </IconWrapper>
        <NavRight>
          <div>Font Size: </div>
          <Select
            options={["medium", "small", "large"]}
            onChange={fontSizeOnChange}
          />
          <div>Theme: </div>
          <Select options={["light", "dark"]} onChange={themeOnChange} />
        </NavRight>
      </NavHeader>
    </Nav>
  );
};

export default Header;

const Nav = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
`;

const NavHeader = styled.div`
  max-width: 1010px;
  padding: 26px 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

const NavRight = styled.div`
  max-width: 1010px;
  padding: 26px 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0 auto;
`;

const IconWrapper = styled.div`
  svg {
    fill: ${({ theme }) => theme.textColor};
  }
`;
