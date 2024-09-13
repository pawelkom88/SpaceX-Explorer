import { gql } from "@apollo/client";

// !! if query repeats use fragments

export const GET_LAUNCHES = gql`
  query Launches($offset: Int = 6, $limit: Int = 6) {
    launches(offset: $offset, limit: $limit) {
      mission_name
      id
      launch_date_local
      links {
        video_link
      }
      details
      rocket {
        rocket_name
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
