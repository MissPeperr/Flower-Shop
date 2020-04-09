import { useRetailers } from "./RetailerProvider.js"
import { RetailerHTML } from "./Retailer.js"
import { useDistributors } from "../distributors/DistributorProvider.js"
import { useFlowers } from "../flowers/FlowerProvider.js"
import { useNurseryFlowers, useNurseryDistributors, useNurseries } from "../nurseries/NurseryProvider.js"

const retailerContainer = document.querySelector(".retailerContainer")

const render = () => {
    const allRetailers = useRetailers()
    const allDistributors = useDistributors()
    const allFlowers = useFlowers()
    const allNurseries = useNurseries()
    const allNurseryFlowers = useNurseryFlowers()
    const allNurseryDistributors = useNurseryDistributors()

    retailerContainer.innerHTML = allRetailers.map(retailer => {
        // find the ONE distributor that the retailer uses
        const foundDistributor = allDistributors.find(distributor => distributor.id === retailer.distributorId)

        // all nursery distributor relationships for one distributor; returns array of NurseryDistributor objects
        const filteredNurseryDistributorsByDistributor = allNurseryDistributors.filter(nd => nd.distributorId === foundDistributor.id)

        let filteredNurseries = []
        // filter for nurseries
        filteredNurseryDistributorsByDistributor.forEach(nd => {
            const foundNursery = allNurseries.filter(nursery => nd.nurseryId === nursery.id)
            filteredNurseries = [...filteredNurseries, ...foundNursery]
        })

        // find all nursery flowers relationships for one nursery and store it in an array
        let filteredNurseryFlowersByNursery = []
        filteredNurseries.forEach(nursery => {
            const foundRelationship = allNurseryFlowers.filter(nf => nf.nurseryId === nursery.id)
            filteredNurseryFlowersByNursery = [...filteredNurseryFlowersByNursery, ...foundRelationship]
        })

        // find the related flowers and store it in an array
        let filteredFlowers = []
        filteredNurseryFlowersByNursery.forEach(nf => {
            const foundFlower = allFlowers.filter(flower => flower.id === nf.flowerId)
            filteredFlowers = [...filteredFlowers, ...foundFlower]
        })

        return RetailerHTML(retailer, foundDistributor, filteredNurseries, filteredFlowers)
    }).join("")
}

export const RetailerList = () => {
    render()
}
