import React from "react";

const Form = () => {
    return (
        <div className="m-0 py-0 flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 to-purple-200 ">
         
            <div className=" p-5 flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
                
                <div className="w-full md:w-1/2 p-8">
                    <h2 className="text-2xl font-bold text-purple-800 text-center mb-4">
                        Login
                    </h2>
                    <form>
                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-purple-800 mb-1"
                            >
                                Email
                            </label>
                           < input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                className="w-full  px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-purple-800 mb-1"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Enter your password"
                                className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-purple-500 to-purple-700 text-white py-2 rounded-lg font-medium hover:from-purple-700 hover:to-purple-500 transition-all duration-300"
                        >
                            Login
                        </button>
                        <p className="text-sm text-center text-gray-600 mt-4">
                            Don't have an account?{" "}
                            <a
                                href="/signup"
                                className="text-purple-700 font-medium hover:underline"
                            >
                                Sign up
                            </a>
                        </p>
                    </form>
                </div>


                <div className="w-full md:w-1/2 rounded-lg bg-gradient-to-br from-purple-200 to-purple-300 p-8 flex flex-col justify-center items-center text-center">
                    <img
                        src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBvcnRyYWl0fGVufDB8fDB8fHww"
                        alt="Reviewer"
                        className="w-24 h-24 rounded-full border-4 border-purple-500 mb-4"
                    />
                    <p className="text-lg font-medium text-purple-800 mb-2">
                        "This platform has transformed my workflow completely. Highly recommended!"
                    </p>
                    <p className="text-sm text-purple-600">
                        - Sachin raj, python Developer
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Form;