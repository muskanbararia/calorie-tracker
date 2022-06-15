import { useState } from "react";

function LoginSection({ setLogin }) {
  async function postData(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
  const login = () => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    var data = { email, password };
    postData("https://fitness-tracker111.herokuapp.com/api/auth", data).then(
      (data) => {
        if (data && data.data) {
          console.log(setLogin);
          localStorage.setItem("token", data.data);
          setLogin(true);
        } else {
          alert("Something went wrong.");
        }
      }
    );
  };
  return (
    <div className="pt-5">
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
      {/* <div class="flex items-start mb-6">
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
      </div> */}
      <button
        type="submit"
        onClick={(_) => login()}
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
      >
        Log in
      </button>
    </div>
  );
}
function SignUpSection() {
  async function postData(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
  const signin = () => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    var data = { email, password, firstName, lastName };
    postData("https://fitness-tracker111.herokuapp.com/api/users", data).then(
      (data) => {
        if (
          data &&
          data.message &&
          data.message == "User created successfully"
        ) {
          alert("User Created. Login to continue");
        } else {
          alert(data.message ? data.message : "Something went wrong");
        }
      }
    );
  };
  return (
    <div className="pt-5">
      <div class="mb-6 ">
        <label for="email" class="block mb-2 text-sm font-medium text-gray-300">
          Your First Name
        </label>
        <input
          type="text"
          id="firstName"
          class=" border   text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
          placeholder="name@flowbite.com"
          required
        />
      </div>
      <div class="mb-6 ">
        <label for="email" class="block mb-2 text-sm font-medium text-gray-300">
          Your Last Name
        </label>
        <input
          type="text"
          id="lastName"
          class=" border   text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
          placeholder="name@flowbite.com"
          required
        />
      </div>
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

      <button
        type="submit"
        onClick={(_) => signin()}
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
      >
        Sign Up
      </button>
    </div>
  );
}

function Login({ setLogin }) {
  const [activeTab, setActiveTab] = useState("login");
  console.log("se", setLogin);

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
          {activeTab == "login" ? (
            <LoginSection setLogin={setLogin} />
          ) : (
            <SignUpSection />
          )}
        </div>
      </div>
    </div>
  );
}
export default Login;
