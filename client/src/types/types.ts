export type UserTypeInLS = {}

export type MessageObject = {sender: string, text: string, date: Date}

export type UserObject = {uid: string, email: string | null, displayName: string | null, photoURL: string | null}
 
export type ConversationObject = {members: string[], id: string, member1name: string,member1id: string, member1photoUrl: string, member2name: string, member2id: string, member2photoUrl: string}