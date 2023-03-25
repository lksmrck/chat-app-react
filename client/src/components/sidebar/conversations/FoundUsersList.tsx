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

  const foundUserClickHandler = (clickedUserId: string) => {
    const usersIdData = {
      searchingUserId: currentUser.uid,
      foundUserId: clickedUserId,
    };
    createConversation(usersIdData);
  };

  return (
    <StyledFoundUsersList>
      {foundUsers.map((user) => {
        return (
          <StyledFoundUser
            key={user.uid}
            onClick={() => foundUserClickHandler(user.uid)}
          >
            <img
              src={user.photoURL!}
              width="30px"
              style={{ borderRadius: "50%" }}
            />
            <UserInfoContainer>
              <StyledUserName>{user.displayName}</StyledUserName>
              <StyledUserEmail>{user.email}</StyledUserEmail>
            </UserInfoContainer>
          </StyledFoundUser>
        );
      })}
    </StyledFoundUsersList>
  );
};

export default FoundUsersList;
