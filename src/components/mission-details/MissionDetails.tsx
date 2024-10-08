import { useQuery } from "@apollo/client";
import { Alert, Container, Skeleton } from "@mui/material";
import { useParams } from "react-router-dom";
import { GET_LAUNCH } from "../../queries/queries";
import { cardProps } from "../../utils/constants";
import { MissionDetailsCard } from "../mission-details-card/MissionDetailsCard";

export function MissionDetails() {
  const { missionId } = useParams();
  const { loading, error, data } = useQuery(GET_LAUNCH, {
    variables: {
      launchId: missionId,
    },
  });

  return (
    <Container sx={{ padding: 12 }}>
      {loading ? (
        <Skeleton variant="rectangular" width="100%" height={cardProps.height} />
      ) : (
        <MissionDetailsCard launch={data?.launch} />
      )}
      {error && <Alert severity="error">Error: {error.message}</Alert>}
    </Container>
  );
}
