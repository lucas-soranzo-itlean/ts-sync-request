export declare class SyncRequestService {
    get<TResponse>(url: string): TResponse;
    post<TRequest, TResponse>(url: string, req: TRequest): TResponse;
}
