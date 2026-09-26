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
    id.toLowerCase()
}