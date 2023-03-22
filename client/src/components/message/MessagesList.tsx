import Message from "./Message";
import { StyledMessagesList } from "./styled";

const MessagesList = () => {
  return (
    <StyledMessagesList>
      <Message text="Sent mess" sent />
      <Message text="Čus" received />
      <Message text="qweqwewqeqweqweqweqweqweqweqwewqeqweqweqwe" received />
      <Message text="Čus" received />
      <Message
        text="qweqweqweqwgegwgewegwgwegwegwgwegwegwegwegwegwegwegwegwegwegwegwegwegwegwe"
        received
      />
      <Message
        text="grjiowgehiqegpqghqep ihg ipqegh pqieghqepig qpiheg hqipg hqeg hqpegih qpheg qeg hqpeg qpheig phqiegp hqeg hqpeighqpiegh pqiegh pqeig hqpeighqpiegh"
        sent
      />
      <Message
        text="grjiowgehiqegpqghqep ihg ipqegh pqieghqepig qpiheg hqipg hqeg hqpegih qpheg qeg hqpeg qpheig phqiegp hqeg hqpeighqpiegh pqiegh pqeig hqpeighqpiegh"
        sent
      />
      <Message
        text="grjiowgehiqegpqghqep ihg ipqegh pqieghqepig qpiheg hqipg hqeg hqpegih qpheg qeg hqpeg qpheig phqiegp hqeg hqpeighqpiegh pqiegh pqeig hqpeighqpiegh"
        sent
      />
      <Message
        text="grjiowgehiqegpqghqep ihg ipqegh pqieghqepig qpiheg hqipg hqeg hqpegih qpheg qeg hqpeg qpheig phqiegp hqeg hqpeighqpiegh pqiegh pqeig hqpeighqpiegh"
        sent
      />
      <Message
        text="grjiowgehiqegpqghqep ihg ipqegh pqieghqepig qpiheg hqipg hqeg hqpegih qpheg qeg hqpeg qpheig phqiegp hqeg hqpeighqpiegh pqiegh pqeig hqpeighqpiegh"
        sent
      />
      <Message
        text="grjiowgehiqegpqghqep ihg ipqegh pqieghqepig qpiheg hqipg hqeg hqpegih qpheg qeg hqpeg qpheig phqiegp hqeg hqpeighqpiegh pqiegh pqeig hqpeighqpiegh"
        sent
      />
    </StyledMessagesList>
  );
};

export default MessagesList;
