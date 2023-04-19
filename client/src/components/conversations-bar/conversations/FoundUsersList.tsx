import { FC } from "react";
import {
  StyledFoundUser,
  StyledFoundUsersList,
  StyledUserName,
  StyledUserEmail,
  UserInfoContainer,
} from "./styled";
import { UserObject } from "../../../types/types";
import useAuth from "../../../context/AuthContext";
import { getConversations } from "../../../api/index";
import Spinner from "../../ui/Spinner";
import useConversation from "../../../context/ConversationContext";
import socket from "../../../setups/socket";
import { Avatar } from "@chakra-ui/react";

type FoundUsersResultProps = {
  foundUsers: UserObject[] | [];
  loading: boolean;
  onModalClose: () => void;
};

const FoundUsersList: FC<FoundUsersResultProps> = ({ foundUsers, loading, onModalClose }) => {
  const { currentUser } = useAuth();
  const { currentConversation, setCurrentConversation, allConversations, setAllConversations } =
    useConversation();

  const foundUserClickHandler = async (foundUser: UserObject) => {
    const usersData = {
      searchingUserId: currentUser.uid,
      searchingUserName: currentUser.displayName,
      searchingUserPhotoUrl: currentUser.photoURL,
      foundUserId: foundUser.uid,
      foundUserName: foundUser.displayName,
      foundUserPhotoUrl: foundUser.photoURL,
    };

    //Checks if coversation already exists
    if (allConversations.some((c) => c.members.includes(foundUser.uid))) {
      const selectedConversation = allConversations.find((c) => c.members.includes(foundUser.uid));
      if (selectedConversation) setCurrentConversation(selectedConversation);
    } else {
      socket.emit("add_conversation", usersData);
      const data = await getConversations(currentUser.uid);
      setAllConversations(data);
    }

    onModalClose();
  };

  return (
    <StyledFoundUsersList>
      {loading ? (
        <Spinner size={"lg"} />
      ) : (
        foundUsers.map((foundUser) => {
          return (
            <StyledFoundUser key={foundUser.uid} onClick={() => foundUserClickHandler(foundUser)}>
              <Avatar name={foundUser.displayName!} src={foundUser.photoURL!} size="sm" />
              <UserInfoContainer>
                <StyledUserName>{foundUser.displayName}</StyledUserName>
                <StyledUserEmail>{foundUser.email}</StyledUserEmail>
              </UserInfoContainer>
            </StyledFoundUser>
          );
        })
      )}
    </StyledFoundUsersList>
  );
};

export default FoundUsersList;
