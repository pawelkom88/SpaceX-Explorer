import { useParams } from "react-router-dom";

export function MissionDetails() {
  const { missionId } = useParams();

  return <h1 style={{ color: "red" }}>{missionId}</h1>;
}
