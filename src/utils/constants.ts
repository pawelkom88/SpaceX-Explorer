export const CARD_WIDTH = 300;
export const CARD_HEIGHT = 334;

export const sortOptions = {
  rocket_type: "rocket_type",
  mission_name: "mission_name",
  launch_date_local: "launch_date_local",
} as const;

export const cardProps = {
  height: CARD_HEIGHT * 1.4,
  maxWidth: CARD_WIDTH,
  boxShadow: "2px 1px 1px 1px rgba(255, 255, 255, 0.2)",
};
