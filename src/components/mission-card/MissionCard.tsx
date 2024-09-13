import { DateRange, Rocket } from "@mui/icons-material";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import {
  Card,
  CardContent,
  CardMedia,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { CARD_HEIGHT, CARD_WIDTH } from "../../utils/constants";
import { getYouTubeID } from "../../utils/helpers";
import classes from "./mission-card.module.css";

const cardProps = {
  height: CARD_HEIGHT * 1.3,
  maxWidth: CARD_WIDTH,
  boxShadow: "2px 1px 1px 1px rgba(255, 255, 255, 0.2)",
};

interface MissionCardProps {
  launch: any;
}

export function MissionCard({ launch }: MissionCardProps) {
  return (
    <Link className={classes["card-link"]} to={`/mission/${launch.id}`}>
      <Card className={classes.card} key={launch.id} sx={cardProps}>
        <VideoEmbed videoLink={launch.links.video_link} />
        <CardContent sx={{ padding: 3 }}>
          <MissionTitle title={launch.mission_name} />
          <MissionDetails details={launch.details} />
          <CardList icon={<Rocket />} text={launch.rocket.rocket_name} />
          <List component="ul">
            <CardList icon={<DateRange />} text={launch.launch_year} />
            <LaunchStatus success={launch.launch_success} />
          </List>
        </CardContent>
      </Card>
    </Link>
  );
}

interface VideoEmbedProps {
  videoLink: string;
}

function VideoEmbed({ videoLink }: VideoEmbedProps) {
  return (
    <CardMedia
      component="iframe"
      sx={{ height: CARD_HEIGHT / 2.5 }}
      src={`https://www.youtube.com/embed/${getYouTubeID(videoLink)}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
}

interface MissionTitleProps {
  title: string;
}

function MissionTitle({ title }: MissionTitleProps) {
  return (
    <Typography gutterBottom variant="h5" component="div">
      {title}
    </Typography>
  );
}

interface MissionDetailsProps {
  details: string;
}

function MissionDetails({ details }: MissionDetailsProps) {
  return (
    <Typography variant="body2" sx={{ color: "text.primary" }}>
      {details ? `${details.slice(0, 100)} ...` : "No details available"}
    </Typography>
  );
}

interface CardListProps {
  icon: React.ReactElement;
  text: string;
}

function CardList({ icon, text }: CardListProps) {
  return (
    <List component="ul">
      <ListItem>
        {icon}
        <ListItemText sx={{ marginLeft: 1, fontStyle: "italic" }}>{text}</ListItemText>
      </ListItem>
    </List>
  );
}

interface LaunchStatusProps {
  success: boolean;
}

function LaunchStatus({ success }: LaunchStatusProps) {
  return (
    <ListItem>
      <ListItemText
        sx={{
          marginLeft: 1,
          fontStyle: "italic",
        }}
      >
        {success ? <ThumbUpIcon /> : <ThumbDownIcon />}
        {success ? "Success" : "Failure"}
      </ListItemText>
    </ListItem>
  );
}
