import { StyledAddConversationModal } from "./styled";
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
import { FC, useState, useEffect, ChangeEvent } from "react";
import { findUser } from "../../../api";
import FoundUsersList from "./FoundUsersList";
import { theme } from "../../../common/theme";
import { UserObject } from "../../../types/types";
import Spinner from "../../ui/Spinner";

type AddConversationModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const AddConversationModal: FC<AddConversationModalProps> = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [foundUsers, setFoundUsers] = useState<UserObject[] | []>([] as UserObject[]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const API_CALL = setTimeout(async () => {
      if (searchTerm.length > 0) {
        setLoading(true);
        const foundData = await findUser(searchTerm);
        setFoundUsers(foundData);
        setLoading(false);
      }
    }, 500);
    return () => {
      clearTimeout(API_CALL);
    };
  }, [searchTerm]);

  //Clearing state on modal close
  useEffect(() => {
    return () => {
      setFoundUsers([]);
      setSearchTerm("");
    };
  }, [onClose]);

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
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
                focusBorderColor={theme.color.green}
                value={searchTerm}
                onChange={inputChangeHandler}
              />
            </form>
            {foundUsers.length > 0 && <FoundUsersList foundUsers={foundUsers} loading={loading} />}
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
