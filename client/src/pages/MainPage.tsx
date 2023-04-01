import Chat from "../components/chat/Chat";
import ConversationsBar from "../components/sidebar/ConversationsBar";
import { ContentContainer, ContentWrapper } from "./styled";
import { useMediaQuery } from "@chakra-ui/react";
import { device } from "../common/device";
import { useState, useEffect } from "react";
import useConversation from "../context/ConversationContext";

const MainPage = () => {
  const [minMediumScreen] = useMediaQuery(device.md);
  const [smDeviceScreen, setSmDeviceScreen] = useState("CONVERSATIONS");
  const { currentConversation } = useConversation();

  useEffect(() => {
    if (currentConversation.id) setSmDeviceScreen("CHAT");
  }, [currentConversation]);

  const handleClickBackToConversations = (screen: string) => setSmDeviceScreen(screen);

  return (
    <ContentContainer>
      <ContentWrapper>
        {minMediumScreen && (
          <>
            <ConversationsBar />
            <Chat handleClickBackToConversations={handleClickBackToConversations} />
          </>
        )}
        {!minMediumScreen && smDeviceScreen === "CONVERSATIONS" && <ConversationsBar />}
        {!minMediumScreen && smDeviceScreen === "CHAT" && (
          <Chat handleClickBackToConversations={handleClickBackToConversations} />
        )}
      </ContentWrapper>
    </ContentContainer>
  );
};

export default MainPage;
