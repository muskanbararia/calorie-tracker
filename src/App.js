import "./App.css";
import ManEatingApple from "./Svg/Home/ManEatingApple";
import Header from "./Components/Header";
import Login from "./Components/Login";
import Home from "./Components/Home";
import { useEffect, useState } from "react";
function LoginPage() {
  return (
    <div className="w-full">
      <Header />

      <div class="md:flex ">
        <div class=" md:flex-1">
          <Login />
        </div>
        <div class="hidden md:block md:flex-1">
          <div className=" flex justify-end items-center">
            <ManEatingApple />
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  // check if token in local storage
  const [token, setToken] = useState("");
  let isValidToken = (token) => {
    return token && token != "";
  };
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (isValidToken(token)) {
      setToken(token);
    }
  });
  return isValidToken(token) ? <Home token={token} /> : <LoginPage />;
}

export default App;
