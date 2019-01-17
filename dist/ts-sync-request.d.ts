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
