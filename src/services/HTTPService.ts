import apiClient from "./api-client";
interface Entity {
    id: number;
}
class HTTPService {
    endpoint: string;
    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }
    getAll<T>(signal?: AbortSignal) {
        return apiClient.get<T>(this.endpoint, { signal: signal });
    }
    delete(userID: number) {
        return apiClient.delete(this.endpoint + "/" + userID);
    }
    create<T>(newUser: T) {
        return apiClient.post(this.endpoint, newUser);
    }
    update<T extends Entity>(updatedUser: T) {
        return apiClient.patch(this.endpoint + "/" + updatedUser.id, updatedUser);
    }
}
const createHTTPService = (endpoint: string): HTTPService => new HTTPService(endpoint);
export default createHTTPService;