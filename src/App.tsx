import { Typography } from "@mui/material";
import { Rocket } from "./components/rocket/Rocket";
import Stars from "./components/stars/Stars";
import { ThemeSwitcher } from "./components/theme-switcher/ThemeSwitcher";

// TODO:
// - add sounds
// - add space ish look like cards

export default function App() {
  return (
    <>
      <ThemeSwitcher />
      <Typography variant="h1">Hello World</Typography>
      <Rocket position={{ right: "10%", bottom: 0 }} delay={1} />
      <Rocket position={{ left: "10%", bottom: 0 }} delay={2} />
      <Stars />
    </>
  );
}
