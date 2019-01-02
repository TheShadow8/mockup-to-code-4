import styled from 'styled-components';

export default styled.div`
  height: 100%;
  grid-column: 2/3;

  @media only screen and (max-width: 50em) {
    grid-column: auto;
    grid-row: 2 /3;
  }
`;
