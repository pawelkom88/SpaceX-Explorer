import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_LAUNCH } from "../../queries/missions";

export function MissionDetails() {
  const { missionId } = useParams();
  const { loading, error, data } = useQuery(GET_LAUNCH, {
    variables: {
      launchId: missionId,
    },
    // pollInterval: 500,
    // fetchPolicy: "network-only",
  });
  console.log(data);
  // TODO: add link to rocket details and ship details and fetch more details

  return <h1 style={{ color: "red" }}>{data?.launch.id}</h1>;
}
