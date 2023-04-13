import Chat from "../components/chat-bar/ChatBar";
import ConversationsBar from "../components/conversations-bar/ConversationsBar";
import { ContentContainer, ContentWrapper } from "./styled";
import { useMediaQuery } from "@chakra-ui/react";
import { device_min } from "../common/device";
import { useState, useEffect } from "react";
import useConversation from "../context/ConversationContext";

const MainPage = () => {
  const [minMediumScreen] = useMediaQuery(device_min.md);
  const [smDeviceScreen, setSmDeviceScreen] = useState("CONVERSATIONS");
  const [showChat, setShowChat] = useState(false);

  const { currentConversation } = useConversation();

  useEffect(() => {
    if (currentConversation.id && minMediumScreen) setShowChat(true);
    if (currentConversation.id && !minMediumScreen) setSmDeviceScreen("CHAT");
  }, [currentConversation]);

  const handleClickBackToConversations = (screen: string) => setSmDeviceScreen(screen);

  return (
    <ContentContainer>
      <ContentWrapper>
        {minMediumScreen && (
          <>
            <ConversationsBar widthAnimation={showChat} />
            <Chat
              handleClickBackToConversations={handleClickBackToConversations}
              showChat={showChat}
            />
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
