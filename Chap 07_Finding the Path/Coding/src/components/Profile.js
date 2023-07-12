import { Outlet } from 'react-router-dom';

export default function Profile() {
  return (
    <>
      <h1>This is a Profile Component</h1>
      <Outlet />
    </>
  );
}
