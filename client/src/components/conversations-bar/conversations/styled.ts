import styled from "styled-components";
import { sidebarLayout, centerItems } from "../../../common/theme";

export const StyledConversationList = styled.ul`
  height: ${sidebarLayout.friendsListHeight};
  overflow-y: scroll;

  //Hide scrollbar
  -ms-overflow-style: none; //IE + Edge
  scrollbar-width: none; //Firefox
  &::-webkit-scrollbar {
    //Chrome
    display: none;
  }
`;

export const StyledConversation = styled.li`
  display: flex;
  color: white;
  border-bottom: 1px solid grey;
  padding: ${(props) => props.theme.padding.xsmall};

  &:hover {
    cursor: pointer;
    background-color: #363636;
  }
`;

export const Container = styled.div`
  margin-left: ${(props) => props.theme.margin.small};
  align-self: center;
`;

export const StyledFriendName = styled.h1`
  font-weight: bold;
`;

export const StyledAddConversationModal = styled.div`
  .input {
    position: relative;
  }
`;

export const StyledFoundUsersList = styled.div`
  height: min-content;
  width: 89.3%;
  max-height: 10rem;
  border-bottom-right-radius: ${(props) => props.theme.borderRadius.small};
  border-bottom-left-radius: ${(props) => props.theme.borderRadius.small};
  border: 1px solid #a2a2a2;
  padding-bottom: ${(props) => props.theme.padding.xsmall};
  padding-top: ${(props) => props.theme.padding.xsmall};
  z-index: 10;
  position: absolute;
`;

export const StyledFoundUser = styled.div`
  display: flex;
  align-items: center;
  height: 2rem;
  padding-left: ${(props) => props.theme.padding.xsmall};
  margin-bottom: ${(props) => props.theme.margin.xsmall};

  &:hover {
    background-color: #b3b3b3;
    cursor: pointer;
  }
`;

export const UserInfoContainer = styled.div`
  display: flex;
  margin-left: ${(props) => props.theme.margin.small};
`;

export const StyledUserName = styled.h3`
  font-size: ${(props) => props.theme.fontSize.s};
  font-weight: bold;
  line-height: 0.8rem;
`;

export const StyledUserEmail = styled.h3`
  font-size: ${(props) => props.theme.fontSize.xs};
  margin-left: ${(props) => props.theme.margin.small};
  line-height: 0.8rem;
`;

export const ConversationsErrorMessage = styled.div`
  height: 100%;
  ${centerItems.all};
  color: red;
  font-size: ${(props) => props.theme.fontSize.sm};
  h3 {
    margin: 0 ${(props) => props.theme.margin.small};
  }
`;
