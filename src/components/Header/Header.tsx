import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import palette from '../../styles/palette';
import SearchBar from '../Search/SearchBar';
import useHeader from './useHeader';

function Header() {
  const { token, user, handleLogout } = useHeader();

  return (
    <header>
      <TopBar>
        {token ? (
          <>
            <Name>
              <b>{user.username}</b>님
            </Name>
            <Logout onClick={handleLogout}>로그아웃</Logout>
          </>
        ) : (
          <>
            <BarItem to="/login">로그인</BarItem>
            <BarItem to="/join">회원가입</BarItem>
          </>
        )}
      </TopBar>
      <SearchHeader>
        <Item to="/">
          <img src="/asset/logo.png" alt="logo" className="logo" />
        </Item>
        <SearchBar />
        <div>
          {token && <Item to="/myPage">내정보</Item>}
          <Item to="#">장바구니</Item>
          <Item to="/productRegister">상품 등록</Item>
        </div>
      </SearchHeader>
      <GNB>
        <Nav>
          <NavItem>
            <span>그라듀홈</span>
          </NavItem>
          <NavItem>
            <span>베스트</span>
          </NavItem>
          <NavItem>
            <span>카테고리</span>
          </NavItem>
          <NavItem>
            <span>신상</span>
          </NavItem>
        </Nav>
      </GNB>
    </header>
  );
}

export default Header;

export const hoverUnderline = css`
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: #946cee;
    transform-origin: bottom center;
    transition: transform 0.1s ease-out;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

const TopBar = styled.ul`
  margin: 0 auto;
  width: 1020px;
  display: flex;
  justify-content: flex-end;
  list-style: none;
`;

const itemStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  height: 32px;
  color: grey;
  padding: 10px 10px 0;
`;

const BarItem = styled(NavLink)`
  ${itemStyle}
`;

const Logout = styled.button`
  ${itemStyle}
`;

const Name = styled.span`
  ${itemStyle}
`;

const SearchHeader = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 1020px;
  height: 80px;
`;

const Item = styled(NavLink)`
  font-weight: bold;
  padding: 0 10px 0;
  font-size: 12px;

  .logo {
    width: 100px;
  }
`;

const SearchInput = styled.input`
  height: 40px;
  width: 550px;
  border: 1px solid darkviolet;
  padding: 10px;
  outline: none;
`;

const GNB = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: rgb(0 0 0 / 7%) 0px 3px 4px 0px;
`;

const Nav = styled.ul`
  position: relative;
  width: 1020px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  list-style: none;
`;

const NavItem = styled.li`
  font-size: 16px;
  height: 55px;
  padding: 20px 40px 0;

  cursor: pointer;
  white-space: nowrap;

  white-space: nowrap;
  span {
    ${hoverUnderline}
  }
`;
