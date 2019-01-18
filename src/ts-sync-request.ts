import request from 'sync-request';


export interface ISyncRequestClient {
    addHeader(key: string, value: string): ISyncRequestClient;
    
    get<TResponse>(url: string, headers?: SyncRequestHeader[]): TResponse;

    post<TRequest, TResponse>(url: string, req: TRequest, headers?: SyncRequestHeader[]) : TResponse;
}

export class SyncRequestClient implements ISyncRequestClient {
    private service: SyncRequestService = new SyncRequestService();
    private headers: SyncRequestHeader[] = new Array<SyncRequestHeader>();    

    constructor(private options?: SyncRequestOptions) {

    }

    addHeader(key: string, value: string): ISyncRequestClient {
        this.headers.push(new SyncRequestHeader(key, value));

        return this;
    }

    get<TResponse>(url: string): TResponse {
        return this.service.get(url, this.headers, this.options);
    }

    post<TRequest, TResponse>(url: string, req: TRequest) : TResponse {
        return this.service.post(url, req, this.headers, this.options);
    }
}

export class SyncRequestService
{    

    get<TResponse>(url: string, headers?: SyncRequestHeader[], opts?: SyncRequestOptions): TResponse {
        let syncHeaders: any = {};
        let res = null;        

        if (opts != null)
        {
            syncHeaders = this.addOptions(opts);
        }
         
        if (headers != null && headers.length > 0)
        {
            let tmp: any = {};

            headers.forEach(h => {
                tmp[h.Key] = h.Value;
            });

            syncHeaders["headers"] = tmp;

            res = request('GET', url, syncHeaders);
        }
        else {
            res = request('GET', url);
        }

        var body = res.getBody('utf8');

        var o = JSON.parse(body);

        return o;        
    }

    post<TRequest, TResponse>(url: string, req: TRequest, headers?: SyncRequestHeader[], opts?: SyncRequestOptions) : TResponse {
        let options: any = {};

        if (opts != null)
        {
            options = this.addOptions(opts);
        }

        let res = null;        
        
        if (headers != null && headers.length > 0)
        {
            let tmp: any = {};

            headers.forEach(h => {
                tmp[h.Key] = h.Value;
            });            
            options["headers"] = tmp;
        }

        options["json"] = JSON.parse(JSON.stringify(req));

        res = request('POST', url, options);

        var body = res.getBody('utf8');

        var o = JSON.parse(body);

        return o;
    }

    private addOptions(options: SyncRequestOptions) : any {
        let opts: any = <any>options;
        let o: any = {};

        for(var propertyName in options) {

            var value = opts[propertyName];

            if (value != null) {
                o[propertyName] = value;
            }
        }

        return o;
    }
}

export class SyncRequestHeader
{
    constructor(private key: string, private val: string) {

    }

    Key: string = this.key;
    Value: string = this.val;
}

export class SyncRequestOptions
{
    followRedirects: boolean = true;
    maxRedirects: number = Infinity;
    timeout: boolean = false;
    retry: boolean = false;
    retryDelay: number = 200;
    maxRetries: number = 5;
}