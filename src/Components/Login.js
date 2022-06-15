import { useState } from "react";

function LoginSection() {
  return (
    <form className="pt-5">
      <div class="mb-6 ">
        <label for="email" class="block mb-2 text-sm font-medium text-gray-300">
          Your email
        </label>
        <input
          type="email"
          id="email"
          class=" border   text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
          placeholder="name@flowbite.com"
          required
        />
      </div>
      <div class="mb-6">
        <label
          for="password"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Your password
        </label>
        <input
          type="password"
          id="password"
          class=" border   text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
      <div class="flex items-start mb-6">
        <div class="flex items-center h-5">
          <input
            id="remember"
            type="checkbox"
            value=""
            class="w-4 h-4 border  rounded   bg-gray-700 border-gray-600 focus:ring-blue-600 ring-offset-gray-800"
            required
          />
        </div>
        <label for="remember" class="ml-2 text-sm font-medium text-gray-300">
          Remember me
        </label>
      </div>
      <button
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
      >
        Log in
      </button>
    </form>
  );
}
function SignUpSection() {
  return (
    <form className="pt-5">
      <div class="mb-6 ">
        <label for="email" class="block mb-2 text-sm font-medium text-gray-300">
          Your email
        </label>
        <input
          type="email"
          id="email"
          class=" border   text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
          placeholder="name@flowbite.com"
          required
        />
      </div>
      <div class="mb-6">
        <label
          for="password"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Your password
        </label>
        <input
          type="password"
          id="password"
          class=" border   text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
      <div class="mb-6">
        <label
          for="password"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Repeat password
        </label>
        <input
          type="password"
          id="password"
          class=" border   text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>

      <button
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
      >
        Sign Up
      </button>
    </form>
  );
}

function Login() {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="flex  w-full justify-center items-center">
      <div className=" p-20 border-gray-200 rounded-lg  bg-gray-800 ">
        <div className="w-full">
          <ul class="flex flex-wrap text-sm font-medium text-center  border-b border-gray-200 border-gray-700 ">
            <li class="mr-2">
              <span
                class={
                  "inline-block p-4  rounded-t-lg  bg-gray-800 " +
                  (activeTab === "login" ? "text-white" : "text-gray-400")
                }
                onClick={(_) => setActiveTab("login")}
              >
                Login
              </span>
            </li>
            <li class="mr-2">
              <span
                class={
                  "inline-block p-4  rounded-t-lg  bg-gray-800 " +
                  (activeTab === "signup" ? "text-white" : "text-gray-400")
                }
                onClick={(_) => setActiveTab("signup")}
              >
                Sign up
              </span>
            </li>
          </ul>
          {activeTab == "login" ? <LoginSection /> : <SignUpSection />}
        </div>
      </div>
    </div>
  );
}
export default Login;
