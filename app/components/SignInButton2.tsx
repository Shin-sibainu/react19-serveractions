"use client";

import React from "react";

const SignInButton2 = ({ onClick }: { onClick: any }) => {
  let pending = false;

  return (
    <button
      className="w-full rounded-md bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      type="submit"
      disabled={pending}
      onClick={onClick}
    >
      {pending ? "Loading..." : "Sign Up"}
    </button>
  );
};

export default SignInButton2;
