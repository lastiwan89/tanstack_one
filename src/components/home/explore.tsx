import { createServerFn } from "@tanstack/react-start"

type User = {
    id:number,
    name: string,
    age: number
}

const ExploreLocation = createServerFn({
    method: 'GET'
}).handler(
    async () => {
    await 
    }
)