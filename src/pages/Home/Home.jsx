import styled from "styled-components";

import headeBgDesktop from "../../assets/home/desktop/image-hero.jpg";
import headeBgTablet from "../../assets/home/tablet/image-header.jpg";
import headeBgMobile from "../../assets/home/mobile/image-header.jpg";
import { media, Container } from "../../styled-components/Global";

import Header from "../../components/Header";
import Hero from "./Hero";
import Categories from "./Categories";
import Showcase from "./Showcase";

const StyledHome = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  .header-image {
    background-image: url(${headeBgDesktop});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
  }

  .header-image {
    ${media.tablet} {
      background-image: url(${headeBgTablet});
    }
  }

  .header-image {
    ${media.phone} {
      background-image: url(${headeBgMobile});
    }
  }
`;

const Home = () => {
  return (
    <>
      <StyledHome>
        <div className="header-image">
          <Header />
          <Hero />
        </div>
        <Container>
          <Categories />
          <Showcase />
        </Container>
      </StyledHome>
    </>
  );
};

export default Home;
