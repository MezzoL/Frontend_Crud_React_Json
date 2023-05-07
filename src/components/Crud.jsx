import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery, useMutation } from '@tanstack/react-query';

const fetchUsers = async () => {
  const { data } = await axios.get('http://localhost:3000/customers');
  return data.reverse();
};

function Crud() {
  const { data: users, isLoading, error, refetch } = useQuery(['users'], () => fetchUsers(), {
    staleTime: 1000 * 60 * 10, // 10 minutes
  });

  const deleteUserMutation = useMutation(
    async (id) => {
      await axios.delete(`http://localhost:3000/customers/${id}`);
    },
    {
      onSuccess: () => {
        refetch();
      },
    }
  );

  const [searchTerm, setSearchTerm] = useState('');
  const [displayCount, setDisplayCount] = useState(5);

  function deleteUser(id) {
    deleteUserMutation.mutate(id);
  }

  function showMore() {
    setDisplayCount(displayCount + 1);
  }

  const filteredUsers = users
    ? users.filter((user) => user.cname.toLowerCase().includes(searchTerm.toLowerCase()))
    : [];

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div id='crud' className='w-full h-full justify-center items-center flex flex-col px-10 py-8 mt-8'>
      <h1 className='text-3xl font-bold'>DATA TABLE</h1>
      <input
        type="text"
        placeholder="Search users..."
        className="mt-4 mb-8 px-3 py-2 border border-gray-300 rounded"
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      {filteredUsers.length === 0 && (
        <div className="text-lg font-semibold mt-4">
          No users found.
        </div>
      )}
<div className='w-full max-w-7xl mx-auto sm:px-6 lg:px-8'>
  <div className='overflow-x-auto mt-8 sm:-mx-6 lg:-mx-8'>
    <div className='inline-block min-w-full'>
      <div className='overflow-hidden'>
        <table className='w-full text-center table-auto'>
          <thead className='border-b bg-gray-800'>
                  <tr>
                    <th scope='col' className='text-sm font-medium text-white px-6 py-4'>
                      #
                    </th>
                    <th scope='col' className='text-sm font-m text-white px-6 py-4'>
                      Name
                    </th>
                    <th scope='col' className='text-sm font-m text-white px-6 py-4'>
                      Email
                    </th>
                    <th scope='col' className='text-sm font-m text-white px-6 py-4'>
                      Address
                    </th>
                    <th scope='col' className='text-sm font-m text-white px-6 py-4'>
                      Job Area
                    </th>
                    <th scope='col' className='text-sm font-m text-white px-6 py-4'>
                      Workplace
                    </th>
                    <th scope='col' className='text-sm font-m text-white px-6 py-4'>
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className='border-black border-b-2'>
                {searchTerm === '' ? users.slice(0, displayCount).map((data, index) => (
                    <tr key={data.id} className='bg-white border-b-2 border-black'>
                      <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 '>
                        {index + 1}
                      </td>
                      <td className='text-l text-gray-900 font-semibold px-6 py-4 whitespace-normal'>
                        {data.cname}
                      </td>
                      <td className='text-l text-gray-900 font-semibold px-6 py-4 whitespace-normal'>
                        {data.email}
                      </td>
                      <td className='text-l text-gray-900 font-semibold px-6 py-4 whitespace-normal'>
                        {data.address}
                      </td>
                      <td className='text-l text-gray-900 font-semibold px-6 py-4 whitespace-normal'>
                        {data.jobarea}
                      </td>
                      <td className='text-l text-gray-900 font-semibold px-6 py-4 whitespace-normal'>
                        {data.workplace}
                      </td>
                      <td className='text-sm flex justify-between  items-center text-gray-900 font-bold px-6 py-4 space-x-4 whitespace-normal'>
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
                  )) : filteredUsers.map((data, index) => (
                    <tr key={data.id} className='bg-white border-b-2 border-black'>
                      <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 '>
                        {index + 1}
                      </td>
                      <td className='text-lg text-gray-900 font-semibold px-4 py-2 whitespace-normal'>
                        {data.cname}
                      </td>
                      <td className='text-lg text-gray-900 font-semibold px-4 py-2 whitespace-normal'>
                        {data.email}
                      </td>
                      <td className='text-lg text-gray-900 font-semibold px-4 py-2 whitespace-normal'>
                        {data.address}
                      </td>
                      <td className='text-lg text-gray-900 font-semibold px-4 py-2 whitespace-normal'>
                        {data.jobarea}
                      </td>
                      <td className='text-lg text-gray-900 font-semibold px-4 py-2 whitespace-normal'>
                        {data.workplace}
                      </td>
                      <td className='text-sm flex justify-between  items-center text-gray-900 font-bold px-4 py-2 space-x-4 whitespace-normal'>
                        <Link
                          to={`/users/${data.id}`} className='bg-black text-white px-4 py-2 rounded-lg'>
                          View
                        </Link>
                        <Link
                          to={`/edit-user/${data.id}`} className='bg-black text-white px-4 py-2 rounded-lg'>
                          Edit
                        </Link>
                        <Link
                          onClick={() => deleteUser(data.id)} to={'#'} className='bg-black text-white px-4 py-2 rounded-lg'>
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
      {filteredUsers.length === 0 && (
        <div className="text-lg font-semibold mt-4">
          No user found with the given search term.
        </div>
      )}
      {!searchTerm && (
        <button
          onClick={showMore}
          className='bg-black text-white px-6 py-2 rounded-lg mt-4'>
          Show More
        </button>
      )}
    </div>
  );
}

export default Crud;
