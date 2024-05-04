import React from "react";
import { useFormStatus } from "react-dom";

const SignInButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      className="w-full rounded-md bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      type="submit"
      disabled={pending}
    >
      {pending ? "Loading..." : "Sign Up"}
    </button>
  );
};

export default SignInButton;
