import { Typography } from "@mui/material";
import { Rocket } from "./components/rocket/Rocket";
import Stars from "./components/stars/Stars";
import { MissionList } from "./components/missions-list/MissionsList";

// TODO:
// - add sounds
// - add space ish look like cards
// - filters
// - pagination
// - types

export default function App() {
  return (
    <>
      <Typography
        margin={"1rem 0"}
        align="center"
        sx={{ fontSize: `clamp(1.125rem, 0.707rem + 1.9108vw, 3rem);` }}
        variant="h1"
      >
        SpaceX missions
      </Typography>
      <Rocket position={{ right: "10%", bottom: 0 }} delay={1} />
      <Rocket position={{ left: "10%", bottom: 0 }} delay={2} />
      <Stars />
      <MissionList />
    </>
  );
}
