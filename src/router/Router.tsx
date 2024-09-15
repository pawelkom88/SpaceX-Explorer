import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { MissionDetails } from "../components/mission-details/MissionDetails";
import { RocketDetailsCard } from "../components/rocket-details-card/RocketDetailsCard";

export const RouteConfig = {
  HOME: "/",
  MISSION: "/mission",
  ROCKET_DETAIL: "/rocket",
} as const;

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
  {
    path: `${RouteConfig.ROCKET_DETAIL}/:rocketId`,
    element: <RocketDetailsCard />,
  },
]);
