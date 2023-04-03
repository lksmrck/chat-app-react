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
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";
import { FC, useState, useEffect, ChangeEvent } from "react";
import { findUser } from "../../../api";
import FoundUsersList from "./FoundUsersList";
import { theme } from "../../../common/theme";
import { UserObject } from "../../../types/types";
import useAuth from "../../../context/AuthContext";

type AddConversationModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const AddConversationModal: FC<AddConversationModalProps> = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [foundUsers, setFoundUsers] = useState<UserObject[] | []>([] as UserObject[]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ isError: false, message: "" });

  const { currentUser } = useAuth();

  useEffect(() => {
    if (searchTerm.length === 0) setFoundUsers([]);

    const API_CALL = setTimeout(async () => {
      if (searchTerm.length > 0) {
        setLoading(true);
        try {
          const foundData = await findUser(searchTerm, currentUser.uid);
          setFoundUsers(foundData);
          setLoading(false);
        } catch (error) {
          setError({ isError: true, message: "No such user found." });
        }
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
      setError({ isError: false, message: "" });
    };
  }, [onClose]);

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setError({ isError: false, message: "" });
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
            <FormControl isInvalid={error.isError}>
              <Input
                variant="flushed"
                type="email"
                placeholder="Start typing users email..."
                focusBorderColor={theme.color.green}
                value={searchTerm}
                onChange={inputChangeHandler}
                className="input"
              />
              <FormErrorMessage>{error.message}</FormErrorMessage>
            </FormControl>
            {foundUsers.length > 0 && (
              <FoundUsersList foundUsers={foundUsers} loading={loading} onModalClose={onClose} />
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
