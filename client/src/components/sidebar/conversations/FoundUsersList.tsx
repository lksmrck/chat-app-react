import { FC } from "react";
import {
  StyledFoundUser,
  StyledFoundUsersList,
  StyledUserName,
  StyledUserEmail,
  UserInfoContainer,
} from "./styled";
import { UserObject } from "../../../types/types";
import useAuth from "../../../hooks/useAuth";
import { createConversation } from "../../../api/index";

type FoundUsersResultProps = {
  foundUsers: UserObject[] | [];
};

const FoundUsersList: FC<FoundUsersResultProps> = ({ foundUsers }) => {
  const { currentUser } = useAuth();

  const foundUserClickHandler = (foundUser: any) => {
    /*   const usersIdData = {
      searchingUserId: currentUser.uid,
      foundUserId: clickedUserId,
    }; */

    const usersData = {
      searchingUserId: currentUser.uid,
      searchingUserName: currentUser.displayName,
      searchingUserPhotoUrl: currentUser.photoURL,
      foundUserId: foundUser.uid,
      foundUserName: foundUser.displayName,
      foundUserPhotoUrl: foundUser.photoURL,
    };

    /* createConversation(usersIdData); */
    createConversation(usersData);
  };

  return (
    <StyledFoundUsersList>
      {foundUsers.map((foundUser) => {
        return (
          <StyledFoundUser
            key={foundUser.uid}
            onClick={() => foundUserClickHandler(foundUser)}
          >
            <img
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
      })}
    </StyledFoundUsersList>
  );
};

export default FoundUsersList;
