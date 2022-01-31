import { gql } from "apollo-server";

export default gql`  
  type Plant {
    id:               Int!
    name:	            String!
    variety:          String
    scientific_name:  String
    season:           [Season]
    family:           String
    description:      String
    sunlight:         [Sunlight]
    soil:             String
    soil_description: String
    ph_low:           Float
    ph_high:          Float
    lifecycle:	      [Lifecycle]
    ease:             Ease
    height:	          String
    spread:	          String
    bloom_time:       [BloomTime]
    shape:            [Shape]
    propagate:        [Propagate]
    germination_low:  Int
    germination_high: Int
    emergence_low:    Int
    emergence_high:   Int
    years:            Int
    care:             String
    users:            [User]
  }

  enum BloomTime {
    EARLY_SPRING
    MID_SPRING
    LATE_SPRING
    EARLY_SUMMER
    MID_SUMMER
    LATE_SUMMER
    EARLY_FALL
    MID_FALL
    LATE_FALL
  }

  enum Ease {
    EASY
    MODERATE
    DIFFICULT
  }

  enum Lifecycle {
    ANNUAL
    PERENNIAL
    BIANNUAL
  }

  enum Propagate {
    SEED
    DIVISION
    SEPARATION
    CUTTINGS
  }

  enum Season {
    COOL
    WARM
  }

  enum Shape {
    CUSHION
    SPREADING
    UPRIGHT
    CLIMBING
    TRAILING
    GRASS
    FAN
  }

  enum Sunlight {
    FULL
    PARTIAL
    SHADE
  }
`;