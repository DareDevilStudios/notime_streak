import mongoose from "mongoose"


import { HTTP_RESOURCES } from "@/config/http-resources"



const userSchema = new mongoose.Schema({
  name:String,
  email:String,
  image:String,
  emailVerified:String
}, { strict: false })




  export const Users =
  mongoose.models.users || mongoose.model("users", userSchema)
export const RESOURCE_SCHEMA_MAPPER = {
  users:Users
}