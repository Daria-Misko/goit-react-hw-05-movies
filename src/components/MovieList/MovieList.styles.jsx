import styled from 'styled-components';
import { Link } from 'react-router-dom';

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin: 0;
  padding: 0;
`;

const MovieItem = styled.li`
  display: flex;
  width: 220px;
`;

const Title = styled.h2`
  font-size: 18px;
  padding: 0 6px;
  text-align: center;
`;

const StyledLink = styled(Link)``;

const ImgWrapper = styled.div`
  border: 1px solid transparent;
  border-radius: 10px;
  padding: 5px;
  background-color: #ffff;
  width: 200px;
  height: 300px;
  transition: all 0.3s ease-in-out;

  :hover {
    background-color: orange;
    opacity: 0.7;
  }
`;

const Poster = styled.img`
  height: 100%;
  width: 100%;
`;

export { List, MovieItem, Title, StyledLink, ImgWrapper, Poster };
