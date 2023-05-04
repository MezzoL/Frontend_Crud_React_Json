import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

const fetchUsers = async () => {
  const { data } = await axios.get('http://localhost:3000/customers');
  return data.reverse();
};

function Home() {
  const { data: users, isLoading, error } = useQuery(['users'], () => fetchUsers(), {
    staleTime: 1000 * 60 * 10, // 10 minutes
  });

  const [displayCount, setDisplayCount] = useState(5);

  function deleteUser(id) {
    axios.delete(`http://localhost:3000/customers/${id}`);
  }

  function showMore() {
    setDisplayCount(displayCount + 1);
  }

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
      <div className='w-full h-full justify-center items-center flex flex-col px-10 py-8 mt-8'>
        <h1 className='text-3xl font-bold'>DATA TABLE</h1>
        <div className='flex flex-col'>
          <div className='overflow-x-auto mt-8 sm:-mx-6 items-center lg:-mx-8'>
            <div className='py-4 inline-block min-w-full sm:px-6 lg:px-8'>
              <div className='overflow-hidden'>
                <table className='w-full text-center'>
                  <thead className='border-b bg-gray-800'>
                    <tr>
                      <th scope='col' className='text-sm font-medium text-white px-6 py-4'>
                        #
                      </th>
                      <th scope='col' className='text-sm font-lg text-white px-6 py-4'>
                        Name
                      </th>
                      <th scope='col' className='text-sm font-lg text-white px-6 py-4'>
                        Email
                      </th>                      
                      <th scope='col' className='text-sm font-lg text-white px-6 py-4'>
                        Address
                      </th>
                      <th scope='col' className='text-sm font-lg text-white px-6 py-4'>
                        Job Area
                      </th>
                      <th scope='col' className='text-sm font-lg text-white px-6 py-4'>
                        Workplace
                      </th>
                      <th scope='col' className='text-sm font-lg text-white px-6 py-4'>
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className='border-black border-b-2'>
                    {users.slice(0, displayCount).map((data, index) => (
                      <tr key={data.id} className='bg-white border-b-2 border-black'>
                        <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 '>
                          {index + 1}
                        </td>
                        <td className='text-lg text-gray-900 font-semibold px-6 py-4 whitespace-nowrap'>
                          {data.cname}
                        </td>
                        <td className='text-lg text-gray-900 font-semibold px-6 py-4 whitespace-nowrap'>
                          {data.email}
                        </td>                        
                        <td className='text-lg text-gray-900 font-semibold px-6 py-4 whitespace-nowrap'>
                          {data.address}
                        </td>
                        <td className='text-lg text-gray-900 font-semibold px-6 py-4 whitespace-nowrap'>
                          {data.jobarea}
                        </td>
                        <td className='text-lg text-gray-900 font-semibold px-6 py-4 whitespace-nowrap'>
                          {data.workplace}
                        </td>
                        <td className='text-sm flex justify-between  items-center text-gray-900 font-bold px-6 py-4 space-x-4 whitespace-nowrap'>
                          <Link
                            to={`/users/${data.id}`} className='bg-black text-white px-6 py-2 rounded-lg'>
                            View
                          </Link>
                          <Link
                            to={`/edit-user/${data.id}`} className='bg-black text-white px-6 py-2 rounded-lg'>
                            Edit
                          </Link>
                          <Link
                            onClick={() => deleteUser(data.id)} to={'#'} className='bg-black text-white px-6 py-2 rounded-lg'>
                            Delete
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={showMore}
          className='bg-black text-white px-6 py-2 rounded-lg mt-4'>Show More</button>
      </div>
  );
}

export default Home;