import { Outlet } from "react-router-dom";

const RouteGuard = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default RouteGuard;
