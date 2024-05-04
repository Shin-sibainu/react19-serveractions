"use client";

import React from "react";
import { formAction } from "../actions/action";
import SignInButton from "./SignInButton";

const ServerAction = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-[30rem]">
      <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-8 w-full max-w-md">
        <div className="space-y-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold">アカウントの作成</h2>
          </div>
          <form className="space-y-4" action={formAction}>
            <div>
              <label
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="border mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                id="username"
                placeholder="Enter your username"
                type="text"
                name="username"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="border mt-1 block p-2 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                id="email"
                placeholder="Enter your email"
                type="text"
                name="email"
              />
            </div>
            <div>
              {/* <button
                className="w-full rounded-md bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                type="submit"
              >
                Sign Up
              </button> */}
              <SignInButton />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ServerAction;
