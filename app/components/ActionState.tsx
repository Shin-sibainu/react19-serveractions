"use client";

import { useActionState } from "react";
import { addToCart } from "../actions/action";
import { useFormState } from "react-dom";

const ActionState = () => {
  const [message, formAction, isPending] = useFormState(addToCart, null);

  return (
    <div className="flex flex-col items-center justify-center h-screen w-[30rem]">
      <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-8 w-full max-w-md">
        <div className="space-y-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold">ショッピングカート</h2>
          </div>
          <form className="space-y-4" action={formAction}>
            <div>
              <input type="hidden" name="itemID" value={"1"} />
            </div>

            <div>
              <button
                className={`w-full rounded-md bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
                  isPending && "bg-blue-300 cursor-not-allowed"
                }`}
                type="submit"
              >
                カートに追加
              </button>
              {message && <h4>{message}</h4>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ActionState;
