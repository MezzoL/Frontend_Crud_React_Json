import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Sidenav from './components/Sidenav';
import Main from './components/Main';
import Crud from './components/Crud';
import Navbar from './components/Navbar';
import Add from './user/Add';
import Edit from './user/Edit';
import Users from './user/Users';
import './index.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='App bg-white'>
        <Sidenav />
        <Main />
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Crud />} />
          <Route path='/Crud' exact element={<Crud />} />
          <Route path='/users/:id' exact element={<Users />} />
          <Route path='/add-user' exact element={<Add />} />
          <Route path='/edit-user/:id' exact element={<Edit />} />
        </Routes>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
