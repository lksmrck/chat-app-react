export type UserTypeInLS = {};

export type MessageObject = {
  sender_id: string;
  receiver_id: string;
  text: string;
  time: Date;
  conversation_id: string;
};

export type UserObject = {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
};

export type ConversationObject = {
  members: string[];
  id: string;
  member1name: string;
  member1id: string;
  member1photoUrl: string;
  member2name: string;
  member2id: string;
  member2photoUrl: string;
};
