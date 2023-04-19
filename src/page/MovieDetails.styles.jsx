import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MoveDitailsContainer = styled.div`
  padding: 0 25px;
`;

const ItemLink = styled(Link)`
  text-decoration: underline;
`;

const AdditinalList = styled.ul`
  padding: 0;
  li:not(:last-child) {
    margin-bottom: 15px;
  }
`;

const ItemLinkBack = styled(Link)`
  display: block;
  text-decoration: underline;
  margin-bottom: 15px;
`;

export { ItemLink, AdditinalList, MoveDitailsContainer, ItemLinkBack };
