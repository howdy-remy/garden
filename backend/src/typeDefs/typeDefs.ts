import { gql } from "apollo-server";

export const typeDefs = gql`
  type ZipData {
    id:         Int!
    zip:        String!
    stcountyfp: String
    city:       String
    state:      String
    countyname: String
    classfp:    String
    user:       [User]
  }

  type User {
    id:        Int!
    email:     String
    issuer:    String
    zipData:   ZipData
    zipDataId: Int!
    plants:    [Plant]
  }

  type PlantToUser {
    id:      Int!
    plant:   Plant
    plantId: Int!
    user:    User
    userId:  Int!
  }

  input PlantInputFilter {
    name: String
    season: Season
    sunlight: Sunlight
    ease: Ease 
  }

  type Query {
    AllPlants(input: PlantInputFilter): [Plant!]!
    PlantsForUser(email: String!): [Plant!]!
    User(email: String!): User
  }

  type Mutation {
    Login(email: String!, issuer: String!, zip: String): User!
    AddPlantToUser(plantId: Int!, email: String!): PlantToUser!
    DeletePlantToUser(plantId: Int!, email: String!): PlantToUser!
  }
`