import { Button, Container } from "@mui/material";

const containerProps = {
  display: "flex",
  justifyContent: "center",
  gap: 3,
  marginBottom: 5,
};

interface PaginationControlsProps {
  page: number;
  setPage: (page: number) => void;
  totalPages: number;
}

export function PaginationControls({
  page,
  setPage,
  totalPages,
}: PaginationControlsProps) {
  const isFirstPage = page === 1;
  return (
    <Container sx={containerProps}>
      <Button
        variant="contained"
        onClick={() => setPage(page - 1)}
        disabled={isFirstPage}
      >
        Previous
      </Button>
      <Button
        variant="contained"
        onClick={() => setPage(page + 1)}
        disabled={page >= totalPages}
      >
        Next
      </Button>
    </Container>
  );
}
