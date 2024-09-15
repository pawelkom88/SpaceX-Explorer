import { gql } from "@apollo/client";

// !! if query repeats use fragments

export const GET_LAUNCHES = gql`
  query Launches($offset: Int = 6, $limit: Int = 6, $sort: String = "launch_date_local") {
    launches(offset: $offset, limit: $limit, sort: $sort) {
      mission_name
      id
      launch_date_local
      links {
        video_link
      }
      details
      rocket {
        rocket_name
        rocket_type
      }
      launch_year
    }
    launchesPastResult {
      result {
        totalCount
      }
    }
  }
`;

export const GET_LAUNCH = gql`
  query Launch($launchId: ID!) {
    launch(id: $launchId) {
      id
      launch_date_local
      links {
        article_link
        video_link
        wikipedia
      }
      mission_name
      rocket {
        rocket {
          id
        }
      }
    }
  }
`;


export const GET_ROCKET = gql`
  query Rocket($rocketId: ID!) {
    rocket(id: $rocketId) {
      id
      description
    }
  }
`