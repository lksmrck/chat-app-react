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
import { createConversation, getConversations } from "../../../api/index";
import Spinner from "../../ui/Spinner";
import useConversation from "../../../context/ConversationContext";
import socket from "../../../setups/socket";
import { generateID } from "../../../utils/utils";

type FoundUsersResultProps = {
  foundUsers: UserObject[] | [];
  loading: boolean;
  onModalClose: () => void;
};

const FoundUsersList: FC<FoundUsersResultProps> = ({ foundUsers, loading, onModalClose }) => {
  const { currentUser } = useAuth();
  const { currentConversation, setCurrentConversation, setAllConversations } = useConversation();

  const foundUserClickHandler = async (foundUser: UserObject) => {
    const usersData = {
      searchingUserId: currentUser.uid,
      searchingUserName: currentUser.displayName,
      searchingUserPhotoUrl: currentUser.photoURL,
      foundUserId: foundUser.uid,
      foundUserName: foundUser.displayName,
      foundUserPhotoUrl: foundUser.photoURL,
    };

    /* createConversation(usersIdData); */
    /*  const clickedConversation = await createConversation(usersData); */

    socket.emit("add_conversation", usersData);
    const data = await getConversations(currentUser.uid);
    setAllConversations(data);
    /*    setAllConversations((prevConversations: any) => [...prevConversations, usersData]); */
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
              <img
                alt="profile-pic"
                src={foundUser.photoURL!}
                width="30px"
                style={{ borderRadius: "50%" }}
              />
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
