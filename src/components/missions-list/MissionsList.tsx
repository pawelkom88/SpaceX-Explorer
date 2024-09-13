import { useQuery } from "@apollo/client";
import { Container, Pagination, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Launch } from "../../gql/graphql";
import { usePagination } from "../../hooks/usePagination";
import { GET_LAUNCHES } from "../../queries/missions";
import { CardSkelton } from "../card-skeleton/CardSkelton";
import { MissionCard } from "../mission-card/MissionCard";
import { NumOfEntriesDropdown } from "../number-of-entries-dropdown/NumOfEntriesDropdown";
import { PaginationControls } from "../pagination-controls/PaginationControls";

const gridProps = {
  maxWidth: 1200,
  justifyContent: "center",
  mx: "auto",
  mt: 5,
  container: true,
  spacing: 2,
  marginBottom: 10,
  gap: 5,
};

export function MissionList() {
  const { page, setPage, limit, handleLimitChange, offset } = usePagination(6);
  const { loading, error, data } = useQuery(GET_LAUNCHES, {
    variables: {
      offset,
      limit,
    },
    // pollInterval: 500,
  });
  const totalItems: number = data?.launchesPastResult?.result?.totalCount || 100;
  const totalPages: number = Math.ceil(totalItems / limit);

  return (
    <>
      <Container sx={{ maxWidth: gridProps.maxWidth }}>
        {/* filterd here */}
        <NumOfEntriesDropdown limit={limit} onLimitChange={handleLimitChange} />
        {/* filterd here */}
        <Grid {...gridProps}>
          {loading ? (
            <CardSkelton length={limit} />
          ) : (
            <>
              {data?.launches.map((launch: Launch) => (
                <MissionCard key={launch.id} launch={launch} />
              ))}
            </>
          )}
          {error && <Typography color="error">Error: {error.message}</Typography>}
        </Grid>
      </Container>
      <Pagination
        sx={{ marginBottom: 5, display: "flex", justifyContent: "center" }}
        count={totalPages}
        page={page}
        onChange={(_, page) => setPage(page)}
      />
      <PaginationControls page={page} setPage={setPage} totalPages={totalPages} />
    </>
  );
}
