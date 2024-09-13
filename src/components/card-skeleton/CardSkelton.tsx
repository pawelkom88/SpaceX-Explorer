import { Skeleton } from "@mui/material";
import { CARD_HEIGHT, CARD_WIDTH } from "../../utils/constants";

export function CardSkelton({ length = 6 }: { length?: number }) {
  return (
    <>
      {Array.from({ length }).map(() => (
        <Skeleton variant="rectangular" width={CARD_WIDTH} height={CARD_HEIGHT} />
      ))}
    </>
  );
}
