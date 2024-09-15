import { DateRange, RocketLaunch } from "@mui/icons-material";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Zoom,
} from "@mui/material";
import { Maybe } from "graphql/jsutils/Maybe";
import { Link } from "react-router-dom";
import { Launch } from "../../gql/graphql";
import { RouteConfig } from "../../router/Router";
import { CARD_HEIGHT } from "../../utils/constants";
import { VideoEmbed } from "../mission-card/MissionCard";

interface MissionDetailsCardProps {
  launch: Maybe<Launch>;
}

export function MissionDetailsCard({ launch }: MissionDetailsCardProps) {
  const { mission_name, links, launch_date_local, rocket } = launch || {};
  return (
    <>
      {/* split into multiple small components */}
      <Typography variant="h4">{mission_name}</Typography>
      <Box sx={{ display: "flex", gap: 2, marginTop: 2 }}>
        <DateRange />
        <Typography variant="subtitle1">
          Launch Date: {launch_date_local?.split("T")[0]}
        </Typography>
      </Box>

      <Divider sx={{ marginTop: 2 }} />

      <VideoEmbed height={CARD_HEIGHT / 0.5} videoLink={links?.video_link} />

      <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <nav aria-label="main mailbox folders">
          <List>
            <ListItem disablePadding>
              <ListItemIcon>
                <Zoom in>
                  <RocketLaunch />
                </Zoom>
              </ListItemIcon>
              <Link to={`${RouteConfig.ROCKET_DETAIL}/${rocket?.rocket?.id}`}>
                <ListItemText primary="Rocket details" />
              </Link>
            </ListItem>
          </List>
        </nav>
      </Box>
    </>
  );
}
