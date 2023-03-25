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
} from "@chakra-ui/react";
import { FC } from "react";

type AddConversationModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const AddConversationModal: FC<AddConversationModalProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <StyledAddConversationModal>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create new conversation</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form>
              <input></input>
            </form>
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
