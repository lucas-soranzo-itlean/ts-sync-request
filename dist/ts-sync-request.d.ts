export interface ISyncRequestClient {
    addHeader(key: string, value: string): ISyncRequestClient;
    get<TResponse>(url: string, headers?: SyncRequestHeader[]): TResponse;
    post<TRequest, TResponse>(url: string, req: TRequest, headers?: SyncRequestHeader[]): TResponse;
}
export declare class SyncRequestClient implements ISyncRequestClient {
    private options?;
    private service;
    private headers;
    constructor(options?: SyncRequestOptions | undefined);
    addHeader(key: string, value: string): ISyncRequestClient;
    get<TResponse>(url: string): TResponse;
    post<TRequest, TResponse>(url: string, req: TRequest): TResponse;
}
export declare class SyncRequestService {
    get<TResponse>(url: string, headers?: SyncRequestHeader[], opts?: SyncRequestOptions): TResponse;
    post<TRequest, TResponse>(url: string, req: TRequest, headers?: SyncRequestHeader[], opts?: SyncRequestOptions): TResponse;
    private addOptions;
}
export declare class SyncRequestHeader {
    private key;
    private val;
    constructor(key: string, val: string);
    Key: string;
    Value: string;
}
export declare class SyncRequestOptions {
    followRedirects: boolean;
    maxRedirects: number;
    timeout: boolean;
    retry: boolean;
    retryDelay: number;
    maxRetries: number;
}
