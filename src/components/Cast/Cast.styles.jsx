import styled from 'styled-components';

const CastContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 0;
`;
const CastCardItem = styled.li`
  width: 200px;
  text-align: center;
  margin: 0 auto;

  img {
    height: 280px;
    width: 200px;
  }
`;

const CastCardName = styled.p`
  /* display: flex;
  gap: 5px;
  justify-content: baseline;
  align-items: baseline; */
  font-weight: 700;
  font-size: 16px;

  span {
    font-weight: 400;
  }
`;

export { CastContainer, CastCardItem, CastCardName };
