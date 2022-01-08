import { gql } from "apollo-server";

export const typeDefs = gql`
  type User {
    id:       Int!
    name:     String
    password: String
  }

  type Plant {
    id:             Int!
    name:	          String!
    variety:        String
    scientificName: String
    type:           [Type]
    lifecycle:	    [Lifecycle]
    sunExposure:	  [SunExposure]
    soilPh:	        [SoilPh]
    bloomSeason:	  [Season]
    daysToMaturity: String
    yield:	        String
    sowMethod:	    String
    plantingNotes:	String
    spacing:	      String
    height:	        String
    spread:	        String
    fruitSize:	    String
    hardinessZones: [Int]
  }

  type PlantToUser {
    id:      Int!
    plant:   Plant
    plantId: Int
    user:    User
    userId:  Int
  }

  enum Lifecycle {
    ANNUAL
    PERENNIAL
    BIANNUAL
  }

  enum Season {
    WINTER
    SPRING
    SUMMER
    FALL
  }

  enum SoilPh {
    SLIGHTLY_ALKALINE
    SLIGHTLY_ACIDIC
    NEUTRAL
  }

  enum SunExposure {
    FULL
    PARTIAL
    SHADE
  }

  enum Type {
    VEGETABLE
    FRUIT
    HERBS
    ANNUAL
    PERENNIAL
  }

  type Query {
    AllPlants: [Plant!]!
  }

  type Mutation {
    AddPlant(body: String!): Plant!
  }
`