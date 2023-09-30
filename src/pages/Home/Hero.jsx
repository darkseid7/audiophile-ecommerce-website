import styled from "styled-components";

import { media, Container } from "../../styled-components/Global";
import Button from "../../components/shared/Button";

const StyledHero = styled.div`
  width: 100%;
  height: 630px;

  .hero-container {
    height: 630px;

    .hero-description {
      max-width: 398px;
      .new-product {
        margin-bottom: 1.5rem;
        color: #fff;
        font-family: "Manrope";
        text-transform: uppercase;
        font-size: 0.875rem;
        font-weight: 400;
        letter-spacing: 0.625rem;
        opacity: 0.4;
      }

      h1 {
        margin-bottom: 1.5rem;
        font-size: 3.5rem;
        font-family: "Manrope";
        text-transform: uppercase;
        color: #fff;
        font-weight: 700;
        letter-spacing: 0.125rem;
        line-height: 3.625rem;
      }

      .product-description {
        margin-bottom: 2.5rem;
        max-width: 349px;
        font-family: "Manrope";
        font-size: 0.9375rem;
        font-weight: 500;
        color: #fff;
        opacity: 0.75;
        line-height: 1.5625rem;
        letter-spacing: normal;
      }
    }
  }

  img {
    height: 39.5rem;
    object-fit: cover;
    object-position: center;
  }

  ${media.tablet} {
    height: 640px;

    .hero-container {
      display: block;
      text-align: center;
      position: relative;
      height: 640px;

      .hero-description {
        top: 47%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        position: absolute;

        .product-description {
          margin: 0 auto;
        }

        button {
          margin-top: 40px;
        }
      }

      img {
        height: 100%;
      }
    }
  }

  ${media.phone} {
    height: 550px;
    .hero-container {
      height: 550px;

      .hero-description {
        top: 52%;

        .new-product {
          margin-bottom: 15px;
        }

        h1 {
          font-size: 36px;
          letter-spacing: 1.2px;
          line-height: 40px;
        }

        .product-description {
          width: 328px;
        }

        button {
          margin-top: 28px;
        }
      }
    }
  }
`;

const Hero = () => {
  return (
    <StyledHero className="">
      <Container>
        <div className="hero-container flex items-center justify-between">
          <div className="hero-description">
            <p className="new-product">new product</p>
            <h1>xx99 mark II headphones</h1>
            <p className="product-description">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Button primary>see product</Button>
          </div>
        </div>
      </Container>
    </StyledHero>
  );
};

export default Hero;
