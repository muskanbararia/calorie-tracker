import { useState } from "react";
import Header from "./Header";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function Home({ token }) {
  const [breakfast, setBreakfast] = useState([]);
  const [lunch, setLunch] = useState([]);
  const [snacks, setSnacks] = useState([]);
  const [dinner, setDinner] = useState([]);
  const addItem = (meal, text) => {
    if (meal === "breakfast") {
      const newBf = [...breakfast, text];
      setBreakfast(newBf);
    } else if (meal == "lunch") {
      const newLn = [...lunch, text];
      setLunch(newLn);
    } else if (meal == "snacks") {
      const newSn = [...snacks, text];
      setSnacks(newSn);
    } else if (meal == "dinner") {
      const newDn = [...dinner, text];
      setDinner(newDn);
    }
  };

  const removeItem = (meal, index) => {
    if (meal === "breakfast") {
      const newBf = [...breakfast];
      newBf.splice(index, 1);
      setBreakfast(newBf);
    } else if (meal == "lunch") {
      const newLn = [...lunch];
      newLn.splice(index, 1);
      setLunch(newLn);
    } else if (meal == "snacks") {
      const newSn = [...snacks];
      newSn.splice(index, 1);
      setSnacks(newSn);
    } else if (meal == "dinner") {
      const newDn = [...dinner];
      newDn.splice(index, 1);
      setDinner(newDn);
    }
  };
  const addItemMeal = (meal) => {
    let bf = document.getElementById(meal).value;
    addItem(meal, bf);
    document.getElementById(meal).value = "";
  };
  const [view, setView] = useState("form");
  const bfdata = {
    labels: ["Carbs", "Protein", "Fiber", "Fat"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 13, 3, 21],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="w-full">
      <Header />
      <div className="flex  w-full justify-center items-center">
        {view === "form" ? (
          <div className=" p-20 border-gray-200 rounded-lg  bg-gray-800 ">
            <h1 className="font-lg text-lg border border-white rounded-lg p-4 text-white">
              Enter Your Meal Details To Calculate Calories
            </h1>
            <form className="pt-5 m-auto">
              <h1 className=" pt-1 text-white">Breakfast</h1>
              <div class="mb-6 flex">
                <input
                  type="text"
                  id="breakfast"
                  class=" border   text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder=""
                />
                <button
                  type="button"
                  onClick={(_) => addItemMeal("breakfast")}
                  class=" ml-5 text-gray-900  border border-gray-200 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm py-2 px-4 text-center inline-flex items-center focus:ring-gray-600 bg-gray-800 border-gray-700 text-white hover:bg-gray-700 "
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line x1="7.5" x2="7.5" y2="15" stroke="white" />
                    <line y1="7.5" x2="15" y2="7.5" stroke="white" />
                  </svg>
                </button>
              </div>
              <div>
                {breakfast.map((item, index) => (
                  <div className="mt-2 flex border border-white rounded p-2 text-white">
                    {item}
                    <button
                      type="button"
                      onClick={(_) => removeItem("breakfast", index)}
                      class="p-2 text-white   inline-flex items-center focus:ring-gray-600 bg-gray-800 border-gray-700 text-white hover:bg-gray-700 "
                    >
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 13 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line
                          y1="-0.5"
                          x2="15"
                          y2="-0.5"
                          transform="matrix(-0.69552 0.718507 0.718507 0.69552 12.0757 1.45895)"
                          stroke="white"
                        />
                        <line
                          y1="-0.5"
                          x2="15"
                          y2="-0.5"
                          transform="matrix(-0.718507 -0.69552 -0.69552 0.718507 11.541 12.0757)"
                          stroke="white"
                        />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>

              <h1 className=" pt-1 text-white">Lunch</h1>
              <div class="mb-6 flex">
                <input
                  type="text"
                  id="lunch"
                  class=" border   text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                />
                <button
                  type="button"
                  onClick={(_) => addItemMeal("lunch")}
                  class=" ml-5 text-gray-900  border border-gray-200 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm py-2 px-4 text-center inline-flex items-center focus:ring-gray-600 bg-gray-800 border-gray-700 text-white hover:bg-gray-700 "
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line x1="7.5" x2="7.5" y2="15" stroke="white" />
                    <line y1="7.5" x2="15" y2="7.5" stroke="white" />
                  </svg>
                </button>
              </div>
              <div>
                {lunch.map((item, index) => (
                  <div className="mt-2 flex border border-white rounded p-2 text-white">
                    {item}
                    <button
                      type="button"
                      onClick={(_) => removeItem("lunch", index)}
                      class="p-2 text-white   inline-flex items-center focus:ring-gray-600 bg-gray-800 border-gray-700 text-white hover:bg-gray-700 "
                    >
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 13 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line
                          y1="-0.5"
                          x2="15"
                          y2="-0.5"
                          transform="matrix(-0.69552 0.718507 0.718507 0.69552 12.0757 1.45895)"
                          stroke="white"
                        />
                        <line
                          y1="-0.5"
                          x2="15"
                          y2="-0.5"
                          transform="matrix(-0.718507 -0.69552 -0.69552 0.718507 11.541 12.0757)"
                          stroke="white"
                        />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>

              <h1 className=" pt-1 text-white">Snacks</h1>
              <div class="mb-6 flex">
                <input
                  type="text"
                  id="snacks"
                  class=" border   text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                />
                <button
                  type="button"
                  onClick={(_) => addItemMeal("snacks")}
                  class=" ml-5 text-gray-900  border border-gray-200 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm py-2 px-4 text-center inline-flex items-center focus:ring-gray-600 bg-gray-800 border-gray-700 text-white hover:bg-gray-700 "
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line x1="7.5" x2="7.5" y2="15" stroke="white" />
                    <line y1="7.5" x2="15" y2="7.5" stroke="white" />
                  </svg>
                </button>
              </div>

              <div>
                {snacks.map((item, index) => (
                  <div className="mt-2 flex border border-white rounded p-2 text-white">
                    {item}
                    <button
                      type="button"
                      onClick={(_) => removeItem("snacks", index)}
                      class="p-2 text-white   inline-flex items-center focus:ring-gray-600 bg-gray-800 border-gray-700 text-white hover:bg-gray-700 "
                    >
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 13 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line
                          y1="-0.5"
                          x2="15"
                          y2="-0.5"
                          transform="matrix(-0.69552 0.718507 0.718507 0.69552 12.0757 1.45895)"
                          stroke="white"
                        />
                        <line
                          y1="-0.5"
                          x2="15"
                          y2="-0.5"
                          transform="matrix(-0.718507 -0.69552 -0.69552 0.718507 11.541 12.0757)"
                          stroke="white"
                        />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>

              <h1 className=" pt-1 text-white">Dinner</h1>
              <div class="mb-6 flex">
                <input
                  type="text"
                  id="dinner"
                  class=" border   text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                />
                <button
                  type="button"
                  onClick={(_) => addItemMeal("dinner")}
                  class=" ml-5 text-gray-900  border border-gray-200 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm py-2 px-4 text-center inline-flex items-center focus:ring-gray-600 bg-gray-800 border-gray-700 text-white hover:bg-gray-700 "
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line x1="7.5" x2="7.5" y2="15" stroke="white" />
                    <line y1="7.5" x2="15" y2="7.5" stroke="white" />
                  </svg>
                </button>
              </div>

              <div>
                {dinner.map((item, index) => (
                  <div className="mt-2 flex border border-white rounded p-2 text-white">
                    {item}
                    <button
                      type="button"
                      onClick={(_) => removeItem("dinner", index)}
                      class="p-2 text-white   inline-flex items-center focus:ring-gray-600 bg-gray-800 border-gray-700 text-white hover:bg-gray-700 "
                    >
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 13 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line
                          y1="-0.5"
                          x2="15"
                          y2="-0.5"
                          transform="matrix(-0.69552 0.718507 0.718507 0.69552 12.0757 1.45895)"
                          stroke="white"
                        />
                        <line
                          y1="-0.5"
                          x2="15"
                          y2="-0.5"
                          transform="matrix(-0.718507 -0.69552 -0.69552 0.718507 11.541 12.0757)"
                          stroke="white"
                        />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>

              <button
                type="submit"
                onClick={(_) => setView("calorie")}
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
              >
                Calculate
              </button>
            </form>
          </div>
        ) : (
          <div>
            <div className=" p-20 border-gray-200 rounded-lg  bg-gray-800 ">
              <h1 className="font-lg text-lg border border-white rounded-lg p-4 text-white">
                Your Total Calories are 1500.
              </h1>

              <div class="relative m-10 overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" class="px-6 py-3">
                        Parameter
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Required Quantity
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Consumed Quantity
                      </th>
                      <th scope="col" class="px-6 py-3">
                        % of calorie
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                      >
                        Protein
                      </th>
                      <td class="px-6 py-4">50gm</td>
                      <td class="px-6 py-4">10gm</td>
                      <td class="px-6 py-4">10</td>
                    </tr>
                    <tr class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                      >
                        Carbs
                      </th>
                      <td class="px-6 py-4">50gm</td>
                      <td class="px-6 py-4">10gm</td>
                      <td class="px-6 py-4">20</td>
                    </tr>
                    <tr class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                      >
                        Fiber
                      </th>
                      <td class="px-6 py-4">50gm</td>
                      <td class="px-6 py-4">10gm</td>
                      <td class="px-6 py-4">50</td>
                    </tr>
                    <tr class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                      >
                        Fat
                      </th>
                      <td class="px-6 py-4">50gm</td>
                      <td class="px-6 py-4">10gm</td>
                      <td class="px-6 py-4">20</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h1 className="font-lg text-lg border border-white rounded-lg p-4 text-white">
                Your Breakfast Calories are 300.
              </h1>
              <div
                style={{
                  height: "60vh",
                  position: "relative",
                  marginBottom: "1%",
                  padding: "1%",
                }}
              >
                <Pie
                  data={bfdata}
                  width={10}
                  height={5}
                  options={{ maintainAspectRatio: false }}
                />
              </div>

              <h1 className="font-lg text-lg border border-white rounded-lg p-4 text-white">
                Your Lunch Calories are 500.
              </h1>
              <div
                style={{
                  height: "60vh",
                  position: "relative",
                  marginBottom: "1%",
                  padding: "1%",
                }}
              >
                <Pie
                  data={bfdata}
                  width={10}
                  height={5}
                  options={{ maintainAspectRatio: false }}
                />
              </div>

              <h1 className="font-lg text-lg border border-white rounded-lg p-4 text-white">
                Your Snacks Calories are 200.
              </h1>
              <div
                style={{
                  height: "60vh",
                  position: "relative",
                  marginBottom: "1%",
                  padding: "1%",
                }}
              >
                <Pie
                  data={bfdata}
                  width={10}
                  height={5}
                  options={{ maintainAspectRatio: false }}
                />
              </div>
              <h1 className="font-lg text-lg border border-white rounded-lg p-4 text-white">
                Your Dinner Calories are 500.
              </h1>
              <div
                style={{
                  height: "60vh",
                  position: "relative",
                  marginBottom: "1%",
                  padding: "1%",
                }}
              >
                <Pie
                  data={bfdata}
                  width={10}
                  height={5}
                  options={{ maintainAspectRatio: false }}
                />
              </div>

              <button
                type="submit"
                onClick={(_) => setView("form")}
                class="m-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
              >
                Track Again
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default Home;
