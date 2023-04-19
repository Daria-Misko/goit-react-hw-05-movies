import styled from 'styled-components';

const ImgWrapper = styled.div`
  width: 300px;
  height: 450px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    transform: scale(1.03);
  }
`;

const Poster = styled.img`
  width: 300px;
`;

const MovieWrapper = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
`;

const Text = styled.p`
  font-size: 16px;
  /* display: inline-block; */
`;

const Description = styled.div``;

export { ImgWrapper, Poster, MovieWrapper, Description, Text };
