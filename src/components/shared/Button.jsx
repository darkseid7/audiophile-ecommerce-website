import React from "react";
import styled from "styled-components";

const ButtonBase = styled.button`
  padding: 0.9375rem 1.875rem;
  font-family: "Manrope";
  font-size: 0.8125rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.0625rem;
`;

const getButtonStyles = ({ primary, secondary, secondary2, tertiary }) => {
  let styles = "";

  if (primary) {
    styles += `
        background-color:#D87D4A;
        color: #FFFFFF;

        &:hover {
            background-color: #FBAF85;
        }
        `;
  }

  if (secondary) {
    styles += `
    background-color: transparent;
    border: 1px solid #000000;
    color: #000000;

    &:hover {
        background-color: #000000;
        color: #ffffff;
    }
    `;
  }

  if (secondary2) {
    styles += `
    background-color: #000000;
    color: #ffffff;
    border: 1px solid #000000;

    &:hover {
      background-color: #ffffff;
      color: #000000;
      border-color: #ffffff;
  }
    `;
  }

  if (tertiary) {
    styles += `
    padding: 0 13px 0 0;
    color: #000000;
    opacity: 0.5;
    line-height: normal;

    &:hover {
      color: #D87D4A;
      opacity: 1;
    }
    `;
  }

  return styles;
};

const Button = styled(ButtonBase)`
  ${getButtonStyles}
`;

export default Button;
