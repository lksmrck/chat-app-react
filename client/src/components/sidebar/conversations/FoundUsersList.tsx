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
import { createConversation } from "../../../api/index";
import Spinner from "../../ui/Spinner";

type FoundUsersResultProps = {
  foundUsers: UserObject[] | [];
  loading: boolean;
};

const FoundUsersList: FC<FoundUsersResultProps> = ({ foundUsers, loading }) => {
  const { currentUser } = useAuth();

  const foundUserClickHandler = (foundUser: UserObject) => {
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
