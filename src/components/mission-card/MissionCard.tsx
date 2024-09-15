import { DateRange, Rocket } from "@mui/icons-material";
import {
  Box,
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
import { RouteConfig } from "../../router/Router";
import { CARD_HEIGHT, cardProps } from "../../utils/constants";
import { getYouTubeID } from "../../utils/helpers";
import classes from "./mission-card.module.css";

interface MissionCardProps {
  launch: Launch;
}

export function MissionCard({ launch }: MissionCardProps) {
  const { id, mission_name, details, launch_year, links, rocket } = launch;
  return (
    <Link className={classes["card-link"]} to={`${RouteConfig.MISSION}/${id}`}>
      <Card className={classes.card} key={id} sx={cardProps}>
        <VideoEmbed videoLink={links?.video_link} />
        <CardContent sx={{ padding: 3 }}>
          <MissionTitle title={mission_name} />
          <MissionDetails details={details} />
          <List component="ul" disablePadding sx={{ marginTop: 2 }}>
            <Item icon={<Rocket />} text={rocket?.rocket_name} />
            <Item icon={<DateRange />} text={launch_year} />
          </List>
        </CardContent>
      </Card>
    </Link>
  );
}

interface VideoEmbedProps {
  videoLink: Maybe<string>;
  height?: number;
}

export function VideoEmbed({ videoLink, height = CARD_HEIGHT / 2.5 }: VideoEmbedProps) {
  return (
    <CardMedia
      component="iframe"
      sx={{ height }}
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
    <Box sx={{ height: CARD_HEIGHT / 3 }}>
      <Typography variant="body2" sx={{ color: "text.primary" }}>
        {details ? `${details.slice(0, 100)} ...` : "No details available"}
      </Typography>
    </Box>
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
