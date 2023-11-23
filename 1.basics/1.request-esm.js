// Request example using ESM
import { request } from '@esri/arcgis-rest-request';

const result = await request("https://services9.arcgis.com/RHVPKKiFTONKtxq3/ArcGIS/rest/services/MODIS_Thermal_v1/FeatureServer/0/query", {
  params:{
    f: "json",
    where: "1=1",
    outFields: "*"
  }
});

console.log(result);