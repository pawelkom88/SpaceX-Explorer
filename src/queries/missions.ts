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
