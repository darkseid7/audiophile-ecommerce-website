import styled from "styled-components";

const customMediaQuery = (maxWidth) => `@media (max-width: ${maxWidth}px)`;

export const media = {
  desktop_m: customMediaQuery(1200),
  tablet: customMediaQuery(768),
  tablet_s: customMediaQuery(800),
  phone: customMediaQuery(425),
};

export const Container = styled.div`
  max-width: 1110px;
  margin: 0 auto;
  /* padding: 0 1rem; */

  ${media.tablet_s} {
    padding: 0 2.5rem;
  }

  ${media.phone} {
    padding: 0;
  }
`;
