import styled from "styled-components";

import speakerBig from "../../assets/home/desktop/image-speaker-zx9.png";
import speakerMedium from "../../assets/home/desktop/image-speaker-zx7.jpg";
import { ReactComponent as PatternCircles } from "../../assets/home/desktop/pattern-circles.svg";
import Button from "../../components/shared/Button";

const StyledShowcase = styled.section`
  margin-top: 168px;

  .big-showcase {
    height: 560px;
    display: flex;
    justify-content: end;
    align-items: center;
    background: #d87d4a;
    position: relative;
    overflow: hidden;
    margin-bottom: 40px;
    border-radius: 8px;

    svg {
      top: -40px;
      left: -150px;
      position: absolute;
    }

    img {
      top: 110px;
      left: 136px;
      position: absolute;
      width: 380px;
      height: 464px;
    }

    .big-description {
      width: 40%;
      z-index: 1;

      h2 {
        max-width: 261px;
        margin-bottom: 1.5rem;
        font-size: 3.5rem;
        font-family: "Manrope";
        text-transform: uppercase;
        color: #fff;
        font-weight: 700;
        letter-spacing: 0.125rem;
        line-height: 3.625rem;
      }

      p {
        max-width: 349px;
        margin-bottom: 2.5rem;
        font-family: "Manrope";
        font-size: 0.9375rem;
        font-weight: 500;
        color: #fff;
        opacity: 0.75;
      }
    }
  }

  .medium-showcase {
    height: 320px;
    margin-bottom: 40px;
    border-radius: 8px;
    background: url(${speakerMedium});
    display: flex;
    align-items: center;
    position: relative;

    .medium-description {
      position: absolute;
      left: 90px;

      h3 {
        margin-bottom: 32px;
        color: #000;
        font-family: "Manrope";
        font-size: 28px;
        font-weight: 700;
        letter-spacing: 2px;
        text-transform: uppercase;
      }
    }
  }
`;

const Showcase = () => {
  return (
    <StyledShowcase>
      <div className="big-showcase">
        <PatternCircles />
        <img
          src={speakerBig}
          alt=""
        />
        <div className="big-description">
          <h2>ZX9 SPEAKER</h2>
          <p>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Button secondary2>see product</Button>
        </div>
      </div>
      <div className="medium-showcase">
        <div className="medium-description">
          <h3>ZX7 SPEAKER</h3>
          <Button secondary>see product</Button>
        </div>
      </div>
    </StyledShowcase>
  );
};

export default Showcase;
