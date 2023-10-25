import { ArcGISIdentityManager } from "@esri/arcgis-rest-request";
import { createGroup } from "@esri/arcgis-rest-portal";

const ENV = process.env;

const authentication = await ArcGISIdentityManager.signIn({
  username: ENV.username,
  password: ENV.password
});
// console.log(ENV)
console.log(authentication)
// const options = { authentication: session }

createGroup({
  group: {
    title: "No Homers",
    access: "public"
  },
  authentication
}).then(response => {
  console.log("Response=",response)
})
