"use client";

import { useOptimistic, useRef, useState } from "react";
import { submitData } from "../actions/action";

type Message = {
  text: string;
  sending: boolean;
  key: number;
} | null;

const Optimistic = () => {
  const [messages, setMessages] = useState<Message[]>([
    { text: "First Message", sending: false, key: 1 },
  ]);

  const formRef = useRef<HTMLFormElement | null>(null);

  const [optimisticMessages, addOptimisticMessage] = useOptimistic<
    Message[],
    any
  >(messages, (state, newMessage) => [
    ...state,
    {
      text: newMessage,
      sending: true,
    },
  ]);

  async function submitData(formData: FormData) {
    const message = formData.get("message")!;
    console.log(message);
    addOptimisticMessage(message);

    formRef.current?.reset();

    await new Promise((res) => setTimeout(res, 1500));
    setMessages((messages) => [
      ...messages,
      {
        text: message,
      },
    ]);
  }

  return (
    <div className="w-[30rem] mx-auto mt-10 bg-white p-8 border border-gray-300 rounded-lg shadow-sm">
      <div className="text-lg font-semibold mb-4">
        {optimisticMessages.map((message, index) => (
          <div key={index}>
            {message?.text}
            {!!message?.sending && <small>(sending...)</small>}
          </div>
        ))}
      </div>
      <form className="space-y-5" action={submitData} ref={formRef}>
        <h3 className="text-xl font-bold">useOptimistic Example</h3>
        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            メッセージ
          </label>
          <input
            type="text"
            name="message"
            id="message"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <button className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          送信
        </button>
      </form>
    </div>
  );
};

export default Optimistic;
