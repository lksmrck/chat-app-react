import { Dispatch, SetStateAction, FC } from "react";
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

type SocketErrorModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const SocketErrorModal: FC<SocketErrorModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Error occured</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <p>Error occured.</p>
          <p> Please try again later. </p>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SocketErrorModal;
