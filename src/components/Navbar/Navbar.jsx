import styled from "styled-components";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as Cart } from "../../assets/cart.svg";
import { media } from "../../styled-components/Global";

const StyledNavbar = styled.nav`
  height: 96px;
  border-bottom: 1px solid #ffffff20;

  .item {
    margin-right: 34px;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 13px;
    font-family: "Manrope";
    font-weight: 700;
  }

  ${media.tablet_s} {
    .items-container {
      display: none;
    }
  }

  ${media.phone} {
    padding: 0 24px;
    height: 89px;
  }
`;

const Navbar = () => {
  return (
    <StyledNavbar className="flex justify-between items-center">
      <div className="">
        <Logo />
      </div>
      <div className="items-container text-fontWhite w-[550px]">
        <a
          className="item"
          href=""
        >
          Home
        </a>
        <a
          className="item"
          href=""
        >
          Headphones
        </a>
        <a
          className="item"
          href=""
        >
          Speakers
        </a>
        <a
          className="item"
          href=""
        >
          Earphones
        </a>
      </div>
      <div className="">
        <Cart />
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
