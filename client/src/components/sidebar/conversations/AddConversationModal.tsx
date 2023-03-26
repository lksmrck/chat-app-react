import { StyledAddConversationModal, StyledFoundUsersList } from "./styled";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
} from "@chakra-ui/react";
import { FC, useState, useEffect } from "react";
import { findUser } from "../../../api";
import FoundUsersList from "./FoundUsersList";

type AddConversationModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const AddConversationModal: FC<AddConversationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [foundUsers, setFoundUsers] = useState<any>([]);

  useEffect(() => {
    const API_CALL = setTimeout(async () => {
      if (searchTerm.length > 0) {
        const foundData = await findUser(searchTerm);

        console.log(foundData);
        setFoundUsers(foundData);
      }
    }, 500);
    return () => clearTimeout(API_CALL);
  }, [searchTerm]);

  const inputChangeHandler = (e: any) => {
    setSearchTerm(e.target.value);
  };

  return (
    <StyledAddConversationModal>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create new conversation</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={32}>
            <form>
              <Input
                variant="flushed"
                placeholder="Search for an user..."
                focusBorderColor="#71AE21"
                value={searchTerm}
                onChange={inputChangeHandler}
              />
            </form>
            {foundUsers.length > 0 && (
              <FoundUsersList foundUsers={foundUsers} />
            )}
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </StyledAddConversationModal>
  );
};

export default AddConversationModal;
