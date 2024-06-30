import React from 'react';

const Detained = () => {
  return (
    <div className="container mx-auto mt-4">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 border border-gray-300">
          <thead className="bg-gray-800 text-white">
            <tr>
              {[...Array(7)].map((_, index) => (
                <th key={index} className="px-4 py-2 sm:w-1/7">Semester {index + 1}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {[...Array(7)].map((_, index) => (
                <td key={index} className="px-4 py-2 sm:w-1/7">
                  <input
                    type="text"
                    className="border border-gray-300 rounded-md py-1 px-2 w-full sm:w-auto focus:outline-none focus:border-blue-500"
                    placeholder={`Semester ${index + 1}`}
                  />
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Detained;
