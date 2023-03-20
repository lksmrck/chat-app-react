import { FC } from "react";
import SentTimeBadge from "./SentTimeBadge";
import { StyledMessage } from "./styled";

type MessageProps = {
  received?: boolean;
  sent?: boolean;
  text: string;
};

const Message: FC<MessageProps> = ({ received, sent, text }) => {
  return (
    <>
      <StyledMessage received={received} sent={sent}>
        {text}
      </StyledMessage>
      <SentTimeBadge />
    </>
  );
};
export default Message;

// if (received) {
//   return (
//     <div /* className="flex flex-row-reverse" */>
//       <div /* className="bg-orange-500 rounded-tr-md rounded-b-md max-w-48 h-auto min-h-9  justify-self-start ml-2 mt-2 p-2 border border-red-700" */
//       >
//         {text}
//       </div>
//       <SentTimeBadge />
//     </div>
//   );
// }
// if (sent) {
//   return (
//     <div /* className="flex" */>
//       <div /* className="bg-blue-800  rounded-tl-md rounded-b-md max-w-48 h-auto justify-self-end mr-2 mt-2 p-2 break-words" */
//       >
//         {text}
//       </div>
//       <SentTimeBadge />
//     </div>
//   );
// }
// return null;
