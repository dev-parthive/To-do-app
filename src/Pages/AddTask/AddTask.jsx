import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthProvier";
import SmallSpinner from "../../Components/SmallSpinner/SmallSpinner";

const AddTask = () => {
    const {dark} = useContext(AuthContext)
    console.log(dark)
    const [loading, setLoading] = useState(false);
    const day = new Date().getDate()
    const month = new Date().getMonth()
    const year = new Date().getFullYear()
    console.log(day, month, year)
    const handleToSubmit = () =>{

    }
    return (
        <div className="container flex justify-center items-center">
       <div className="">
       <div className="grid grid-cols-1  gap-4 items-center">
          <div className="p-2">
            <h1 className="text-3xl font-bold m-2 text-center">Add Your Task</h1>
            {/* <hr /> */}
            {loading ? (
              <SmallSpinner></SmallSpinner>
            ) : (
              <form
                className={`${
                  dark ? "border rounded-lg" : ""
                } m-6 shadow-lg p-5 `}
                onSubmit={handleToSubmit}
              >
                <div className="grid grid-cols-2 md:gap-6 my-2">
                  <div className="relative z-0 mb-6 w-full group">
                    <input
                      type="text"
                      name="task_title"
                      id="task_title"
                      maxLength={25}
                      className={`${
                        dark ? "text-gray-400" : ""
                      } block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="task_title"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Title
                    </label>
                  </div>
                  <div>
                    <h1 className="text-sm text-gray-500 my-2">{day}/{month}/{year}</h1>
                  </div>
                </div>
                <div className="relative z-0 mb-6 w-full group my-2">
                  <input
                    type="text"
                    name="task_details"
                    id="task_details"
                    maxLength={50}
                    className={`${
                      dark ? "text-gray-400" : ""
                    } block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="task_details"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Task Details
                  </label>
                </div>
  
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add
                </button>
              </form>
            )}
          </div>
        </div>
       </div>
      </div>
    );
};

export default AddTask;