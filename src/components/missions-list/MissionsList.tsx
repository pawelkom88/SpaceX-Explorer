import { useQuery } from "@apollo/client";
import { Alert, Container, Pagination, Stack } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useState } from "react";
import { Launch } from "../../gql/graphql";
import { usePagination } from "../../hooks/usePagination";
import { GET_LAUNCHES } from "../../queries/queries";
import { sortOptions } from "../../utils/constants";
import { CardSkelton } from "../card-skeleton/CardSkelton";
import { MissionCard } from "../mission-card/MissionCard";
import { NumOfEntriesDropdown } from "../number-of-entries-dropdown/NumOfEntriesDropdown";
import { PaginationControls } from "../pagination-controls/PaginationControls";
import { SortDropdown, SortOptions } from "../sort-dropdown/SortDropdown";

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
  const [sortCriteria, setSortCriteria] = useState<SortOptions>(sortOptions.mission_name);
  const { page, setPage, limit, handleLimitChange, offset } = usePagination(6);
  const { loading, error, data } = useQuery(GET_LAUNCHES, {
    variables: {
      offset,
      limit,
      sort: sortCriteria,
    },
    // pollInterval: 500,
    fetchPolicy: "network-only",
  });
  const totalItems: number = data?.launchesPastResult?.result?.totalCount || 100;
  const totalPages: number = Math.ceil(totalItems / limit);

  return (
    <>
      <Container sx={{ maxWidth: gridProps.maxWidth }}>
        <Stack direction="row" spacing={2}>
          <SortDropdown
            sortCriteria={sortCriteria}
            onSortCriteriaChange={setSortCriteria}
          />
          <NumOfEntriesDropdown limit={limit} onLimitChange={handleLimitChange} />
        </Stack>
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
          {error && <Alert severity="error">Error: {error.message}</Alert>}
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
