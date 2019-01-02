import styled from 'styled-components';

export default styled.div`
  height: 100%;
  grid-column: 1/2;
  font-size: 1.6rem;
  display: flex;

  @media only screen and (max-width: 50em) {
    height: auto;
    grid-column: auto;
    grid-row: 1 / 2;
    flex-direction: column;
  }
`;
