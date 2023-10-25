import { ArcGISIdentityManager } from "@esri/arcgis-rest-request";
import { getItem } from "@esri/arcgis-rest-portal";

const ENV = process.env;

const session = await ArcGISIdentityManager.signIn({
  username: ENV.username,
  password: ENV.password
});

const options = { authentication: session }
const id = '4fc59e73edc440338334b29cfd43fabf';

const item = await getItem(id, options);
console.log(item);
