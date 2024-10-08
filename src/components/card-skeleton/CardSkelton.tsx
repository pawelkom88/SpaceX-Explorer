import { Skeleton } from "@mui/material";
import { CARD_WIDTH, cardProps } from "../../utils/constants";

export function CardSkelton({ length = 6 }: { length?: number }) {
  return (
    <>
      {Array.from({ length }).map((_, index) => (
        <Skeleton
          key={index}
          variant="rectangular"
          width={CARD_WIDTH}
          height={cardProps.height}
        />
      ))}
    </>
  );
}
