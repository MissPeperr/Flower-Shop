import { FlowerList } from "../flowers/FlowerList.js"

export const RetailerHTML = (retailerObj, distributorObj, nurseryArray, flowerArray) => {
    return `
        <section class="retailer">
            <h2>${retailerObj.name}</h2>
            <div class="retailer_address">${retailerObj.address}, ${retailerObj.city}, ${retailerObj.state}</div>
            <h4>${retailerObj.name} is getting flowers from:</h4>
            <div class="distributor">
                <div>${distributorObj.name}</div>
                <div>${distributorObj.address}, ${distributorObj.city}, ${distributorObj.state}</div>
                </div>
            <h4>${distributorObj.name} is getting flowers from:</h4>
            <div class="nursery_list">
                ${
                    nurseryArray.map(nursery => {
                        return `<div class="nursery">${nursery.name}</div>`
                    }).join("")
                }
            </div>
            <h4>Available Flowers:</h4>
            <div class="flower_list">
                ${FlowerList(flowerArray)}
            </div>
        </section>
    `
}