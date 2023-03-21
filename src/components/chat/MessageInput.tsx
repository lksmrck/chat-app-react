import { MessageInputContainer } from "./styled";
import { Input } from "@chakra-ui/react";

const MessageInput = () => {
  return (
    <MessageInputContainer>
      <Input
        variant="outline"
        placeholder="Type something..."
        focusBorderColor="#71AE21"
      />
    </MessageInputContainer>
  );
};

export default MessageInput;
