import { Skeleton } from "@mui/material";
import { CARD_HEIGHT, CARD_WIDTH } from "../../utils/constants";

export  function CardSkelton() {
  return   <>
  {Array.from({ length: 25 }).map(() => (
    <Skeleton variant="rectangular" width={CARD_WIDTH} height={CARD_HEIGHT} />
  ))}
</>;
}
