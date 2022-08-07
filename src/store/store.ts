import { atom } from "recoil";
// export type TodoType = {
//   id: number;
//   title: string;
//   desc: string;
//   period: string;
// };
export type ChatType = {
  type: string;
  content: string;
};

export const chatHistory = atom<ChatType[]>({
  key: "chatHistory",
  default: [{ type: "bot", content: "Hello, What can I help you? " }],
});
