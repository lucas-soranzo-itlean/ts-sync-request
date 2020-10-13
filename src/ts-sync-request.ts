import request from 'sync-request';

export interface ISyncRequestClient {
    addHeader(key: string, value: string): ISyncRequestClient;

    addHeaders(headers: SyncRequestHeader[]): ISyncRequestClient;
    
    get<TModel>(url: string): TModel;

    post<TRequestModel, TResponseModel>(url: string, req: TRequestModel) : TResponseModel;

    create<TModel>(url: string, req: TModel) : TModel;

    put<TModel>(url: string, req: TModel): any;

    delete<TModel>(url: string) : TModel;
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

    addHeaders(headers: SyncRequestHeader[]): ISyncRequestClient {
        headers.forEach(header => this.headers.push(header));

        return this;
    }

    get<TModel>(url: string): TModel {
        return this.service.get(url, this.headers, this.options);
    }

    post<TRequestModel, TResponseModel>(url: string, req: TRequestModel) : TResponseModel {
        return this.service.post(url, req, this.headers, this.options);
    }

    create<TModel>(url: string, req: TModel) : TModel {
        return this.service.create(url, req, this.headers, this.options);
    }

    put<TModel>(url: string, req: TModel) {
        this.service.put(url, req, this.headers, this.options);
    }

    delete<TModel>(url: string) : TModel {
        return this.service.delete(url, this.headers, this.options);
    }
}

export class SyncRequestService
{    

    get<TModel>(url: string, headers?: SyncRequestHeader[], opts?: SyncRequestOptions): TModel {
        let options: any = {};
        let res = null;        

        if (opts != null)
        {
            options = this.addOptions(opts);
        }
         
        if (headers != null && headers.length > 0)
        {
            this.addHeaders(options, headers);

            res = request('GET', url, options);
        }
        else {
            res = request('GET', url);
        }

        var body = res.getBody('utf8');

        var o = JSON.parse(body);

        return o;        
    }

    post<TRequestModel, TResponseModel>(url: string, req: TRequestModel, headers?: SyncRequestHeader[], opts?: SyncRequestOptions) : TResponseModel {
        let options: any = {};

        if (opts != null)
        {
            options = this.addOptions(opts);
        }

        let res = null;        
        
        this.addHeaders(options, headers);

        options["json"] = JSON.parse(JSON.stringify(req));

        res = request('POST', url, options);

        var body = res.getBody('utf8');

        var o = JSON.parse(body);

        return o;
    }

    create<TModel>(url: string, req: TModel, headers?: SyncRequestHeader[], opts?: SyncRequestOptions) : TModel {
        let options: any = {};

        if (opts != null)
        {
            options = this.addOptions(opts);
        }

        let res = null;        
        
        this.addHeaders(options, headers);        

        options["json"] = JSON.parse(JSON.stringify(req));

        res = request('POST', url, options);

        var body = res.getBody('utf8');

        var o = JSON.parse(body);

        return o;
    }    

    put<TModel>(url: string, req: TModel, headers?: SyncRequestHeader[], opts?: SyncRequestOptions) {
        let options: any = {};

        if (opts != null)
        {
            options = this.addOptions(opts);
        }
        
        let res = null;     
        
        this.addHeaders(options, headers);

        options["json"] = JSON.parse(JSON.stringify(req));

        res = request('PUT', url, options);
        
        var body = res.getBody('utf8');

        var o = JSON.parse(body);

        return o;        
    }
    
    delete<TModel>(url: string, headers?: SyncRequestHeader[], opts?: SyncRequestOptions) : TModel {
        let options: any = {};
        let res = null;        

        if (opts != null)
        {
            options = this.addOptions(opts);
        }   
        
        this.addHeaders(options, headers);
         
        res = request('DELETE', url, options);

        var body = res.getBody('utf8');

        var o = JSON.parse(body);

        return o;
    }    

    private addHeaders(options: any, headers?: SyncRequestHeader[]) {
        if (headers != null && headers.length > 0) {
            let tmp: any = {};

            headers.forEach(h => {
                tmp[h.Key] = h.Value;
            });            
            options["headers"] = tmp;        
        }        
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
