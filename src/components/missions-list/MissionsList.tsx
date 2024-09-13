import { useQuery } from "@apollo/client";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { GET_LANCHES } from "../../queries/missions";
import { CardSkelton } from "../card-skeleton/CardSkelton";
import { MissionCard } from "../mission-card/MissionCard";

const gridProps = {
  maxWidth: 1200,
  justifyContent: "center",
  mx: "auto",
  mt: 5,
  container: true,
  spacing: 2,
};

export function MissionList() {
  const { loading, error, data } = useQuery(GET_LANCHES, {
    variables: {
      limit: 6,
    },
  });

  return (
    <Grid {...gridProps}>
      {loading ? (
        <CardSkelton />
      ) : (
        <>
          {data?.launches.map((launches, index) => (
            <MissionCard key={launches.id} launches={launches} index={index} />
          ))}
        </>
      )}
      {error && <Typography color="error">Error: {error.message}</Typography>}
    </Grid>
  );
}
