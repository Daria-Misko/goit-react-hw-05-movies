import PropTypes, { arrayOf } from 'prop-types';

import {
  Searchbar as SearchbarWrapper,
  SearchForm,
  SearchFormButton,
  Input,
  Label,
} from './SearchBar.styles';

const SearchBar = ({ onSubmit, onChange, value }) => {
  return (
    <SearchbarWrapper>
      <SearchForm onSubmit={onSubmit}>
        <Input
          type="text"
          name="searchQuery"
          autoComplete="off"
          autoFocus={false}
          placeholder="Search movie"
          value={value}
          onChange={onChange}
        ></Input>
        <SearchFormButton type="submit">
          <Label>Search</Label>
        </SearchFormButton>
      </SearchForm>
    </SearchbarWrapper>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};

export default SearchBar;
