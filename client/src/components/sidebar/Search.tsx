import { Input, InputLeftElement, InputGroup } from "@chakra-ui/react";
import { StyledSearch } from "./styled";
import { AiOutlineSearch } from "react-icons/ai";
import { FC, ChangeEvent } from "react";

type SearchProps = {
  handleChangeConversationSearchTerm: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Search: FC<SearchProps> = ({ handleChangeConversationSearchTerm }) => {
  return (
    <StyledSearch>
      <InputGroup>
        <InputLeftElement pointerEvents="none" children={<AiOutlineSearch />} pb={1.5} />
        <Input
          variant="flushed"
          placeholder="Find conversation"
          focusBorderColor="#71AE21"
          size="sm"
          onChange={handleChangeConversationSearchTerm}
        />
      </InputGroup>
    </StyledSearch>
  );
};

export default Search;
