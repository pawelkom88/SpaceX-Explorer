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
import { Maybe } from "graphql/jsutils/Maybe";
import React from "react";
import { Link } from "react-router-dom";
import { Launch } from "../../gql/graphql";
import { CARD_HEIGHT, CARD_WIDTH } from "../../utils/constants";
import { getYouTubeID } from "../../utils/helpers";
import classes from "./mission-card.module.css";

const cardProps = {
  height: CARD_HEIGHT * 1.3,
  maxWidth: CARD_WIDTH,
  boxShadow: "2px 1px 1px 1px rgba(255, 255, 255, 0.2)",
};

interface MissionCardProps {
  launch: Launch;
}

export function MissionCard({ launch }: MissionCardProps) {
  const { id, mission_name, details, launch_year, launch_success, links, rocket } = launch;
  return (
    <Link className={classes["card-link"]} to={`/mission/${id}`}>
      <Card className={classes.card} key={id} sx={cardProps}>
        <VideoEmbed videoLink={links?.video_link} />
        <CardContent sx={{ padding: 3 }}>
          <MissionTitle title={mission_name} />
          <MissionDetails details={details} />
          <List component="ul" disablePadding sx={{ marginTop: 2 }}>
            <Item icon={<Rocket />} text={rocket?.rocket_name} />
            <Item icon={<DateRange />} text={launch_year} />
            <LaunchStatus success={launch_success} />
          </List>
        </CardContent>
      </Card>
    </Link>
  );
}

interface VideoEmbedProps {
  videoLink: Maybe<string>;
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
  title: Maybe<string>;
}

function MissionTitle({ title }: MissionTitleProps) {
  return (
    <Typography gutterBottom variant="h5" component="div">
      {title}
    </Typography>
  );
}

interface MissionDetailsProps {
  details: Maybe<string>;
}

function MissionDetails({ details }: MissionDetailsProps) {
  return (
    <Typography height={CARD_HEIGHT / 7} variant="body2" sx={{ color: "text.primary" }}>
      {details ? `${details.slice(0, 100)} ...` : "No details available"}
    </Typography>
  );
}

interface ItemProps {
  icon: React.ReactElement;
  text: Maybe<string>;
}

function Item({ icon, text }: ItemProps) {
  return (
    <ListItem>
      {icon}
      <ListItemText sx={{ marginLeft: 1, fontStyle: "italic" }}>{text}</ListItemText>
    </ListItem>
  );
}

interface LaunchStatusProps {
  success: Maybe<boolean>;
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
