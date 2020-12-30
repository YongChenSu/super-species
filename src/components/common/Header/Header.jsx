import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const HeaderContainer = styled.div`
  height: 4rem;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  border-bottom: 1px solid #ccc;
  padding: 0 2rem;
  box-sizing: border-box;
  background-color: #cde6ed;
  z-index: 100;
`;

const Brand = styled.div`
  font-size: 2rem;
  font-weight: 700;
`;

const Nav = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 4.5rem;
  text-decoration: none;
  cursor: pointer;

  ${(props) =>
    props.$active &&
    `
    background: rgba(94, 76, 76, 0.2);
  `}
`;

const NavbarList = styled.div`
  display: flex;
  align-items: center;
  height: 4rem;
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;

  ${NavbarList} {
    margin-left: 1rem;
  }
`;

const Header = () => {
  const location = useLocation();

  return (
    <HeaderContainer maxWidth="md">
      <NavbarList>
        <Nav to="/" $active={location.pathname === "/"}>
          留言板
        </Nav>
        <Nav to="/post/48" $active={location.pathname === "/post/48"}>
          訊息
        </Nav>
        <Nav to="/upload-img" $active={location.pathname === "/upload-img"}>
          上傳圖片
        </Nav>
      </NavbarList>
      <Brand>前端考題</Brand>
    </HeaderContainer>
  );
};
export default Header;
