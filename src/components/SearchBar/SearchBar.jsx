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
          autoFocus={true}
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

export default SearchBar;
