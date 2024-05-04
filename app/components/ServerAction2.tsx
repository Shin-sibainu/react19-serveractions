import SignInButton2 from "./SignInButton2";

const ServerAction2 = () => {
  async function formAction(formData: FormData) {
    "use server";
    console.log(formData.get("username"));
    // signIn
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen w-[30rem]">
      <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-8 w-full max-w-md">
        <div className="space-y-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold">アカウントの作成</h2>
          </div>
          <form className="space-y-4">
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
              <SignInButton2 onClick={formAction} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ServerAction2;