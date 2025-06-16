import apiClient from "./api-client";
interface Entity {
    id: number;
}
class HTTPService {
    controller = new AbortController();
    endpoint: string;
    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }
    getControllerAbort() {
        return () => this.controller.abort()
    }
    getAll<T>() {
        return apiClient.get<T>(this.endpoint, { signal: this.controller.signal });
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