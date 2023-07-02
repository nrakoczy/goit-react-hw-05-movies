import styled from 'styled-components';

export const Details = styled.div`
  article {
    display: flex;
    gap: 20px;
    align-items: start;
  }

  h2 {
    margin: 0;
    font-size: 18px;
    span {
      font-size: 16px;
    }
  }
  h3 {
    margin: 30px 0 0;
    font-size: 18px;
    span {
      font-size: 16px;
      font-weight: 300;
      font-style: italic;
    }
  }

  ul {
    display: flex;
    gap: 20px;
    list-style: none;
    padding: 0;
  }
`;
