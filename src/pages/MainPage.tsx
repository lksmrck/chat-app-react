import Conversation from "../components/conversation/Conversation";
import Sidebar from "../components/sidebar/Sidebar";
import { ContentContainer, ContentWrapper } from "./styled";

const MainPage = () => {
  return (
    <ContentContainer>
      <ContentWrapper>
        <Sidebar />
        <Conversation />
      </ContentWrapper>
    </ContentContainer>
  );
};

export default MainPage;
