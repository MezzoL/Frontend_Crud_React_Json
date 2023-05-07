import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Add() {
  const [cname, setCName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [jobarea, setJobArea] = useState('');
  const [workplace, setWorkPlace] = useState('');

  const navigate = useNavigate();
  const data = {
    cname: cname,
    email: email,
    address: address,
    birthdate: birthdate,
    jobarea: jobarea,
    workplace: workplace,
  };

  function submitForm(e) {
    e.preventDefault();
    axios.post('http://localhost:3000/customers', data).then(() => navigate('/'));
  }

  return (
    <div className='w-full max-w-7xl mx-auto sm:px-6 lg:px-8 flex flex-col justify-center items-center mt-16'>
      <h2 className='text-2xl font-bold'>ADD USER</h2>
      <form className='w-[50%] h-full flex flex-col mt-2'>
        <input
          value={cname}
          onChange={(e) => setCName(e.target.value)}
          className='bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4'
          type='text'
          placeholder='Enter your name'
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4'
          type='email'
          placeholder='Enter your email'
        />
        <input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className='bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4'
          type='text'
          placeholder='Enter your address'
        />
        <input
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
          className='bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4'
          type='date'
          placeholder='Enter your birthdate'
        />
        <input
          value={jobarea}
          onChange={(e) => setJobArea(e.target.value)}
          className='bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4'
          type='text'
          placeholder='Enter your job area'
        />
        <input
          value={workplace}
          onChange={(e) => setWorkPlace(e.target.value)}
          className='bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4'
          type='text'
          placeholder='Enter your workplace'
        />
        <button
          className='bg-teal-600 outline-none font-bold border text-white border-zinc-400 py-4 pl-4 mt-4'
          type='submit'
          onClick={submitForm}
        >
          ADD USER
        </button>
      </form>
    </div>
  );
}

export default Add;
