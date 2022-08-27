import { atom } from "recoil";

export type ChatType = {
  type: string;
  content: string;
  image?: string | ArrayBuffer | null;
  icon?:string
};

export type WeatherType = {
  title: string;
  icon: string;
};

export const chatHistory = atom<ChatType[]>({
  key: "chatHistory",
  default: [{ type: "bot", content: "Hello, What can I help you? " }],
});

export const weatherInfo = atom<WeatherType>({
  key: "weatherInfo",
  default: { title: "", icon: "" },
});
