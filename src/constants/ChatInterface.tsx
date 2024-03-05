export interface chatInterface {
  id: string;
  message: string;
  sender: {
    image: string;
    is_kyc_verified: boolean;
    self: boolean;
    user_id: string;
  };
  time?: string;
}

export interface senderInterface {
  image: string;
  is_kyc_verified: boolean;
  self: boolean;
  user_id: string;
}

export interface chatScreenInterface {
  chats: chatInterface[];
}
export interface chatDetailInterface {
  chat: chatInterface;
}
