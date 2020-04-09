import { useFlowers } from "./FlowerProvider.js"
import { FlowerHTML } from "./Flower.js"

const flowerContainer = document.querySelector(".flowerContainer")

const render = (flowerArray) => {
    const HTMLElements = flowerArray.map((flower) => {
        return FlowerHTML(flower)
    }).join("")
    return HTMLElements
}

export const FlowerList = (flowerArray) => {
    return render(flowerArray)
}
