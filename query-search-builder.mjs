import { searchItems, SearchQueryBuilder } from "@esri/arcgis-rest-portal";

const startDate = new Date("2020-01-01");
const endDate = new Date("2022-09-01");
const query = new SearchQueryBuilder()
 .match("hhkaos2")
 .in("owner")
 .and()
 .from(startDate)
 .to(endDate)
 .in("created")
 .and()
 .startGroup()
   .match("Web Mapping Application")
   .in("type")
   .or()
   .match("Mobile Application")
   .in("type")
   .or()
   .match("Application")
   .in("type")
 .endGroup()
 .and()
 .match("Demo");
// console.log(query)
searchItems(query).then((res) => {
  console.log(res.results[0]);
});

