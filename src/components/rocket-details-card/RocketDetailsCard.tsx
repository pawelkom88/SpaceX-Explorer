import { useQuery } from "@apollo/client";
import { Alert, Container, Skeleton, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { GET_ROCKET } from "../../queries/queries";
import { cardProps } from "../../utils/constants";

export function RocketDetailsCard() {
  const { rocketId } = useParams();
  const { loading, error, data } = useQuery(GET_ROCKET, {
    variables: {
      rocketId,
    },
  });

  return (
    <Container sx={{ padding: 12 }}>
      {loading ? (
        <Skeleton variant="rectangular" width="100%" height={cardProps.height} />
      ) : (
        <Typography paragraph>{data?.rocket.description}</Typography>
      )}
      {error && <Alert severity="error">Error: {error.message}</Alert>}
    </Container>
  );
}
