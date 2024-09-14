import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { MissionDetails } from "../components/mission-details/MissionDetails";

export const RouteConfig = {
    HOME: "/",
    MISSION: "/mission",
} as const

export const router = createBrowserRouter([
    {
      path: RouteConfig.HOME,
      element: <App />,
      errorElement: <div>Error</div>,
    },
    {
      path: `${RouteConfig.MISSION}/:missionId`,
      element: <MissionDetails />,
    },
  ]);
