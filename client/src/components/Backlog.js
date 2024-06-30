import React from 'react';

const Backlog = () => {

  const headerStyle = {
    backgroundColor: '#475239',
    color: 'white',
  };
  return (
    <div className="container mx-auto mt-4">
      <div className="overflow-x-auto">
        <table className="w-full divide-y divide-gray-200 border border-gray-300">
          <thead style={headerStyle}>
            <tr>
              <th className="px-4 py-2">Sno</th>
              <th className="px-4 py-2">Semester</th>
              <th className="px-4 py-2">Courses</th>
              <th className="px-4 py-2">Details of cleared courses in the subsequent semesters</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(8)].map((_, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{`Semester ${index + 1}`}</td>
                <td className="px-4 py-2">
                  <input
                    type="text"
                    className="border border-gray-300 rounded-md py-1 px-2 w-full sm:w-auto focus:outline-none focus:border-blue-500"
                    placeholder={`Enter courses for Semester ${index + 1}`}
                  />
                </td>
                <td className="px-4 py-2">
                  <input
                    type="text"
                    className="border border-gray-300 rounded-md py-1 px-2 w-full sm:w-auto focus:outline-none focus:border-blue-500"
                    placeholder={`Enter details for Semester ${index + 1}`}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Backlog;
