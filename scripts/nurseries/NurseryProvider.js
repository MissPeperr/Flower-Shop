let nurseries = []
let nurseryFlowers = []
let nurseryDistributors = []

export const useNurseries = () => nurseries.slice()
export const useNurseryFlowers = () => nurseryFlowers.slice()
export const useNurseryDistributors = () => nurseryDistributors.slice()

export const getNurseries = () => {
    return fetch("http://localhost:8088/nurseries")
        .then((response) => response.json())
        .then((parsedNurseries) => {
            nurseries = parsedNurseries
        })
}
export const getNurseryFlowers = () => {
    return fetch("http://localhost:8088/nurseryFlowers")
        .then((response) => response.json())
        .then((parsedNurseryFlowers) => {
            nurseryFlowers = parsedNurseryFlowers
        })
}
export const getNurseryDistributors = () => {
    return fetch("http://localhost:8088/nurseryDistributors")
        .then((response) => response.json())
        .then((parsedNurseryDistributors) => {
            nurseryDistributors = parsedNurseryDistributors
        })
}