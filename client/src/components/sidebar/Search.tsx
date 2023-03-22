import { Input, InputLeftElement, InputGroup } from "@chakra-ui/react";
import { StyledSearch } from "./styled";
import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  return (
    <StyledSearch>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<AiOutlineSearch />}
          pb={1.5}
        />
        <Input
          variant="flushed"
          placeholder="Find an user"
          focusBorderColor="#71AE21"
          size="sm"
        />
      </InputGroup>
    </StyledSearch>
  );
};

export default Search;
