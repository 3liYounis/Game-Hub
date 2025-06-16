import createHTTPService from "./HTTPService";
export interface Game {
    id: number,
    name: string
}
export interface Games {
    count: number,
    results: Game[]
}
export default createHTTPService("/games");