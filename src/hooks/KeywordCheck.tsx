import dayjs from "dayjs";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { chatHistory, ChatType, count, weatherInfo } from "../store/store";

const useCheckKeyword = () => {
  const setChatLog = useSetRecoilState<ChatType[]>(chatHistory);
  const weatherLog = useRecoilValue(weatherInfo);
  const setCount = useSetRecoilState<number>(count);
  const countNum = useRecoilValue(count);

  const checkKeyword = (keyword: string) => {
    switch (keyword) {
      case "hello":
      case "hi":
      case "hey":
        setChatLog((prev) => [...prev, { type: "bot", content: `Hello 😊` }]);
        setCount(1);

        break;
      case "menu":
      case "help":
      case "question":
        setChatLog((prev) => [
          ...prev,
          {
            type: "bot",
            content: `
          What can I help you?🤗
          1 - weather, 2 - time, 3 - Date`,
          },
        ]);
        setCount(1);

        break;
      case "1":
      case "weather":
      case "Weather":
        console.log(weatherLog);
        setChatLog((prev) => [
          ...prev,
          {
            type: "bot",
            icon: `${weatherLog.icon}`,
            content: `Today weather is ${weatherLog.title}!`,
          },
        ]);
        setCount(1);

        break;
      case "2":
      case "Time":
      case "time":
        setChatLog((prev) => [
          ...prev,
          {
            type: "bot",
            content: `It is ${dayjs().format("hh:mm A")}`,
          },
        ]);
        setCount(1);

        break;
      case "3":
      case "Date":
      case "date":
        setChatLog((prev) => [
          ...prev,
          {
            type: "bot",
            content: `Today is ${dayjs().format("MMMM DD, dddd")}`,
          },
        ]);
        setCount(1);

        break;
      case "end":
      case "bye":
        setChatLog((prev) => [
          ...prev,
          {
            type: "bot",
            content: `Thank you! Have a great Day !`,
          },
        ]);
        setCount(1);

        break;
      case "thanks":
      case "Thanks":
      case "Thank you":
      case "thank you":
        setChatLog((prev) => [
          ...prev,
          {
            type: "bot",
            content: `you are very welcome !`,
          },
        ]);
        setCount(1);

        break;
      default:
        if (countNum > 5) {
          setChatLog((prev) => [
            ...prev,
            {
              type: "bot",
              content: `
              Sorry, I can not get your question,
          What can I help you?🤗
          1 - weather, 2 - time, 3 - Date`,
            },
          ]);
          setCount(1);
        } else {
          setCount((prev) => prev + 1);
        }

        break;
    }
  };
  return { checkKeyword };
};

export default useCheckKeyword;
