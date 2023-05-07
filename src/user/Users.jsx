import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function Users() {
  const { id } = useParams();

  const fetchUser = async () => {
    const response = await axios.get(`http://localhost:3000/customers/${id}`);
    return response.data;
  };

  const { data: user, isLoading } = useQuery(['user', id], fetchUser);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
      <div className='w-full max-w-3xl mx-auto sm:px-6 lg:px-8 flex flex-col mt-32 justify-center items-center'>
        <Link
          to={`/`}
          className='hover:bg-teal-600 bg-white hover:shadow-md  outline-none rounded-xl font-bold border mt-8 hover:text-teal-200 text-teal-600 border-zinc-400 py-4 px-4 pl-4'>
          Back To Crud-Home
        </Link>
        {user && (
          <div className='w-full h-[200] px-6 py-4 flex shadow-xl rounded-xl justify-between items-center bg-teal-600 mt-16 border-teal-800 border-2'>
            <div className='w-3/12 flex flex-col space-y-4'>
              <h2 className='text-white font-bold text-lg border-black border-b-2'>
                Name:
              </h2>
              <h2 className='text-white font-bold text-lg border-black border-b-2'>
                Email:
              </h2>              
              <h2 className='text-white font-bold text-lg border-black border-b-2'>
                Address:
              </h2>
              <h2 className='text-white font-bold text-lg border-black border-b-2'>
                Birthdate:
              </h2>
              <h2 className='text-white font-bold text-lg border-black border-b-2'>
                Job Area:
              </h2>
              <h2 className='text-white font-bold text-lg border-black border-b-2'>
                Workplace:
              </h2>
            </div>
            <div className='w-9/12 flex flex-col space-y-4  '>
              <h2 className='text-teal-200 font-bold text-lg border-black border-b-2'>
                {user.cname}
              </h2>
              <h2 className='text-teal-200 font-bold text-lg border-black border-b-2'>
                {user.email}
              </h2>
              <h2 className='text-teal-200 font-bold text-lg border-black border-b-2'>
                {user.address}
              </h2>
              <h2 className='text-teal-200 font-bold text-lg border-black border-b-2'>
                {user.birthdate}
              </h2>
              <h2 className='text-teal-200 font-bold text-lg border-black border-b-2'>
                {user.jobarea}
              </h2>
              <h2 className='text-teal-200 font-bold text-lg border-black border-b-2'>
                {user.workplace}
              </h2>
            </div>
          </div>
        )}
      </div>
  );
}

export default Users;
