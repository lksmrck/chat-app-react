import Chat from "../components/chat/Chat";
import Sidebar from "../components/sidebar/Sidebar";
import { ContentContainer, ContentWrapper } from "./styled";

const MainPage = () => {
  return (
    <ContentContainer>
      <ContentWrapper>
        <Sidebar />
        <Chat />
      </ContentWrapper>
    </ContentContainer>
  );
};

export default MainPage;
