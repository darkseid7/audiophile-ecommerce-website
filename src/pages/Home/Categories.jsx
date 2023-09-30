import styled from "styled-components";

import headphones from "../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import spekaers from "../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphones from "../../assets/shared/desktop/image-category-thumbnail-earphones.png";
import { ReactComponent as RightRow } from "../../assets/shared/desktop/icon-arrow-right.svg";

import { Container, media } from "../../styled-components/Global";
import Button from "../../components/shared/Button";

const StyledProductOptions = styled.section`
  margin-top: 200px;

  .options-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;

    .option {
      /* width: 350px; */
      height: 204px;
      background: #f1f1f1;
      border-radius: 8px;

      .option-image {
        position: relative;
        height: 120px;
        img {
          top: 22%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 220px;
          position: absolute;
        }
      }

      p {
        margin-bottom: 15px;
        font-family: "Manrope";
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 1.286px;
        font-size: 18px;
        color: #000;
        text-align: center;
      }

      .button-container {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;

const ProductOptions = () => {
  return (
    <StyledProductOptions>
      <Container>
        <div className=" options-container">
          <div className="option">
            <div className="option-image">
              <img
                src={headphones}
                alt=""
              />
            </div>
            <p>Headphones</p>
            <div className="button-container">
              <Button tertiary>Shop</Button>
              <RightRow />
            </div>
          </div>
          <div className="option">
            <div className="option-image">
              <img
                src={spekaers}
                alt=""
              />
            </div>
            <p>Speakers</p>
            <div className="button-container">
              <Button tertiary>Shop</Button>
              <RightRow />
            </div>
          </div>
          <div className="option">
            <div className="option-image">
              <img
                src={earphones}
                alt=""
              />
            </div>
            <p>Earphones</p>
            <div className="button-container">
              <Button tertiary>Shop</Button>
              <RightRow />
            </div>
          </div>
        </div>
      </Container>
    </StyledProductOptions>
  );
};

export default ProductOptions;
