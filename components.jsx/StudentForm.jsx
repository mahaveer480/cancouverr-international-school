import React from "react";

const StudentForm = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-500">
      <div className="bg-gray-500 p-8 rounded-md shadow-md w-96">
        <h2 className="text-white text-lg mb-4 text-center">Add Or Edit Student Data</h2>
        <form>
          <input
            type="text"
            placeholder="Name"
            className="w-full bg-gray-300 p-2 rounded-md mb-3 text-black"
          />
          <input
            type="text"
            placeholder="Father Name"
            className="w-full bg-gray-300 p-2 rounded-md mb-3 text-black"
          />
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Roll number"
              className="w-1/2 bg-gray-300 p-2 rounded-md text-black"
            />
            <input
              type="text"
              placeholder="marks"
              className="w-1/2 bg-gray-300 p-2 rounded-md text-black"
            />
          </div>
          <button className="w-full bg-black text-white p-2 mt-4 rounded-md font-bold uppercase text-center">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default StudentForm;
