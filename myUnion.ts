let score: number | string = 33

score = 44

score = "55"

type User = {
    name: string
    id: number
}

type Admin = {
    username: string
    id: number
}

let jo: User | Admin = { name: "jo", id: 123 }

// this is allowed
jo = { username: "joe@gsajh", id: 3 }

// function getDbId(id: number | string) {
//     // making some API calls
//     console.log(`DB id is  S{id}`)
// }
getDbId(3)
getDbId("3")

function getDbId(id: number | string) {
    if (typeof id === "string") {
        id.toLowerCase()
    }
    else {
        id.toFixed(3)
    }
}

// array

const data: number[] = [1, 2, 3, "4"] // this once's now allowing
const data3: (string | number)[] = [1, 2, 3, "4"] // this one's common error
// this means data3 is either all numbers or all strings

let pi: 3.24 = 3.24

let seatAllotment: "aisle" | "middle" | "widow"
seatAllotment = "aisle"
seatAllotment = "crew"