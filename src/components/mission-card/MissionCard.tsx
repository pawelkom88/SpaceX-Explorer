import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { CARD_HEIGHT, CARD_WIDTH } from "../../utils/constants";
import { getYouTubeID } from "../../utils/helpers";

interface MissionCardProps {
  launches: any;
}

export function MissionCard({ launches }: MissionCardProps) {
  return (
    <Card key={launches.id} sx={{ maxWidth: CARD_WIDTH }}>
      <CardMedia
        component="iframe"
        sx={{ height: CARD_HEIGHT / 2.5 }}
        src={`https://www.youtube.com/embed/${getYouTubeID(launches.links.video_link)}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {launches.mission_name}
        </Typography>
        <Typography p={2} variant="body2" sx={{ color: "text.primary" }}>
          {launches.details
            ? `${launches.details.slice(0, 100)} ...`
            : "No details available"}
        </Typography>
        <List>
          <ListItem>{launches.rocket.rocket_name}</ListItem>
          <ListItem>{launches.rocket.rocket_type}</ListItem>
        </List>
        <List>
          <ListItem>{launches.launch_year}</ListItem>
          <ListItem>{launches.launch_success ? "Success" : "Failure"}</ListItem>
        </List>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
