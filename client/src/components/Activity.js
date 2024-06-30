import React from 'react';
import axios from 'axios'
const Activity = () => {
  const activityNames = [
    "MOOCs (SWAYAM/NPTEL/Spoken Tutorial/Coursera or equivalent) per Course",
    "Technical Fest/Research Day/Fresher’s Welcome Organizer Workshop/Conference/Hackathons etc.",
    "Rural Reporting/Case study",
    "Harithaharam/plantation",
    "Participation in Relief camps",
    "Participation in Debate/Group Discussion/Technical Quiz",
    "Publication in Newspaper, Magazines at institution level (Magazine/article/internet)",
    "Publication in Newspaper, Magazine & Blogs",
    "Research Publication (per publication)",
    "Innovation Projects (other than course requirements)",
    "Participation in Blood donation/NSS or NCC activities",
    "Organization of Blood donation/NSS activities",
    "Participation in Sports/Games",
    "Cultural Program (Dance, Drama, Elocution, Music etc.)",
    "Member of Professional Society, Student Chapter/Cubs",
    "Relevant Industry Visit & Report",
    "Photography activities in different Clubs (Photography club, Cine club)",
    "Participation in Yoga camp",
    "Self-Entrepreneurship Program",
    "Adventure sports with Certification",
    "Training to underprivileged/physically challenged",
    "Community Service & Allied Activities",
    "Class Representative"
  ];

  const handlesubmit = ()=>{
    axios.post()
  }
  // Function to generate dummy data for the table
  const generateData = () => {
    const data = [];
    for (let i = 1; i <= 24; i++) {
      const randomActivityIndex = Math.floor(Math.random() * activityNames.length);
      data.push({
        sno: i,
        activityName: activityNames[randomActivityIndex],
        points: Math.floor(Math.random() * 10) + 1, // Random points (1-10)
        maxPoints: Math.floor(Math.random() * 20) + 10, // Random max points (10-30)
      });
    }
    return data;
  };

  const data = generateData();

  const headerStyle = {
    backgroundColor: '#475239',
    color: 'white',
  };

  return (

    <div className="">
    <table className="min-w-full divide-y divide-gray-200">
    <thead style={headerStyle} className='shadow-xl'>
          <tr>
            <th className="px-6 py-3 text-left">Sno</th>
            <th className="px-6 py-3 text-left">Activity Name</th>
            <th className="px-6 py-3 text-left">Points</th>
            <th className="px-6 py-3 text-left">Max Points</th>
            {[...Array(8)].map((_, index) => (
              <th key={index} className="px-6 py-3 text-left">{index + 1}</th>
            ))}
            <th className="px-6 py-3 text-left">Total</th>
          </tr>
        </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {data.map((row, index) => (
          <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
            <td className="px-6 py-4 whitespace-nowrap">{row.sno}</td>
            <td className="px-6 py-4 whitespace-nowrap">{row.activityName}</td>
            <td className="px-6 py-4 whitespace-nowrap">{row.points}</td>
            <td className="px-6 py-4 whitespace-nowrap">{row.maxPoints}</td>
            {[...Array(8)].map((_, columnIndex) => (
              <td key={columnIndex} className="px-6 py-4 whitespace-nowrap">
                {columnIndex === 7 ? (
                  <input
                    type="text"
                    className="border border-gray-300 rounded-md py-1 px-2 w-16 focus:outline-none focus:border-blue-500"
                  />
                ) : (
                  <input
                    type="text"
                    className="border border-gray-300 rounded-md py-1 px-2 w-16 focus:outline-none focus:border-blue-500"
                  />
                )}
              </td>
            ))}
          </tr>
        ))}
        <button onChange={handlesubmit} className='p-10 hover:bg-red-600 hover:text-white'>Submit</button>
      </tbody>

    </table>
  </div>

    // <div className="container mt-4">
    //   <table className="table table-bordered">
    //     <thead className="thead-dark">
    //       <tr>
    //         <th>Sno</th>
    //         <th>Activity Name</th>
    //         <th>Points</th>
    //         <th>Max Points</th>
    //         {[...Array(8)].map((_, index) => (
    //           <th key={index}>{index + 1}</th>
    //         ))}
    //         <th>Total</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {data.map((row, index) => (
    //         <tr key={index} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
    //           <td>{row.sno}</td>
    //           <td>{row.activityName}</td>
    //           <td>{row.points}</td>
    //           <td>{row.maxPoints}</td>
    //           {[...Array(8)].map((_, columnIndex) => (
    //             <td key={columnIndex}>
    //               {columnIndex === 7 ? (
    //                 <input
    //                   type="text"
    //                   className="form-control form-control-sm"
    //                 />
    //               ) : (
    //                 <input
    //                   type="text"
    //                   className="form-control form-control-sm"
                      
    //                 />
    //               )}
    //             </td>
    //           ))}
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>
  );
};

export default Activity;
