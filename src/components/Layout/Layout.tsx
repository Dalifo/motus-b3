import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => (
  <div className="container mx-auto flex flex-col items-center">
    <h1 className="text-center text-5xl mt-12 mb-8">Motus</h1>

    <Outlet />
  </div>
);

export default Layout;
