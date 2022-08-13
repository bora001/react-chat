import { atom } from "recoil";

export type ChatType = {
  type: string;
  content: string;
  image?: string | ArrayBuffer | null;
};

export const chatHistory = atom<ChatType[]>({
  key: "chatHistory",
  default: [{ type: "bot", content: "Hello, What can I help you? " }],
});
