import React, { useState, ChangeEvent, FormEvent } from 'react';
import image from '../assets/Image.png'; // Adjust the path as necessary

const branches = ["Branch 1", "Branch 2", "Branch 3"]; // Example list of branches

const Login: React.FC = () => {
  const [selectedBranch, setSelectedBranch] = useState<string>('');

  const handleFormSubmission = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Logged in");
    console.log("Selected branch:", selectedBranch);
  };

  const handleBranchChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedBranch(e.target.value);
  };

  return (
    <div className="grid grid-cols-2 h-[90vh] w-full">
      {/* Left side - form */}
      <div className="flex flex-col justify-center items-center p-8">
        <h1 className="text-3xl font-semibold text-[#2B3674]">Branch Login</h1>
        <p className="text-[#A3AED0] text-sm mb-4">Enter your email and password to log in!</p>
        <form onSubmit={handleFormSubmission} className="w-full max-w-sm">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="branch">
              Select your Branch
            </label>
            <select
              id="branch"
              value={selectedBranch}
              onChange={handleBranchChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="" disabled>Select your Branch...</option>
              {branches.map((branch) => (
                <option key={branch} value={branch}>{branch}</option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              required
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center">
              <input className="mr-2 leading-tight" type="checkbox" />
              <span className="text-sm text-gray-700">Keep me logged in</span>
            </label>
            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
              Forgot password?
            </a>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-lg focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
      {/* Right side - image */}
      <div className="flex items-center justify-center">
        <img className="object-cover w-full h-full" src={image} alt="NEABILLING" />
      </div>
    </div>
  );
};

export default Login;
