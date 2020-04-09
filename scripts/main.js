import { getRetailers } from "./retailers/RetailerProvider.js";
import { RetailerList } from "./retailers/RetailerList.js";
import { getFlowers } from "./flowers/FlowerProvider.js"
import { getDistributors } from "./distributors/DistributorProvider.js";
import { getNurseries, getNurseryDistributors, getNurseryFlowers } from "./nurseries/NurseryProvider.js";

getRetailers()
    .then(getFlowers)
    .then(getDistributors)
    .then(getNurseries)
    .then(getNurseryDistributors)
    .then(getNurseryFlowers)
    .then(RetailerList)