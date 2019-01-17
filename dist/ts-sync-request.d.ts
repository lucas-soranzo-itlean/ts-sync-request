export interface ISyncRequestClient {
    addHeader(key: string, value: string): ISyncRequestClient;
    get<TResponse>(url: string, headers?: SyncRequestHeader[]): TResponse;
    post<TRequest, TResponse>(url: string, req: TRequest, headers?: SyncRequestHeader[]): TResponse;
}
export declare class SyncRequestClient implements ISyncRequestClient {
    private service;
    private headers;
    addHeader(key: string, value: string): ISyncRequestClient;
    get<TResponse>(url: string): TResponse;
    post<TRequest, TResponse>(url: string, req: TRequest): TResponse;
}
export declare class SyncRequestService {
    get<TResponse>(url: string, headers?: SyncRequestHeader[]): TResponse;
    post<TRequest, TResponse>(url: string, req: TRequest, headers?: SyncRequestHeader[]): TResponse;
}
export declare class SyncRequestHeader {
    private key;
    private val;
    constructor(key: string, val: string);
    Key: string;
    Value: string;
}
