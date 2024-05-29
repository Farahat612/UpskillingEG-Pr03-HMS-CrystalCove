import { Outlet } from "react-router-dom";

const RouteGuard = () => {
  return (
    <div>
      RouteGuard
      <Outlet />
    </div>
  );
};

export default RouteGuard;
