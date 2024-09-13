import { gql } from "@apollo/client";

export const GET_LANCHES = gql`
  query Launches($limit: Int) {
    launches(limit: $limit) {
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
      launch_success
      launch_site {
        site_id
        site_name
      }
    }
  }
`;
