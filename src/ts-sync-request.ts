import request from 'sync-request';

export class SyncRequestService
{    

    get<TResponse>(url: string, headers?: SyncRequestHeader[]): TResponse {
        let syncHeaders = null;
        let res = null;        
         
        if (headers != null)
        {
            let headersJson = JSON.parse(JSON.stringify(headers));

            syncHeaders = {
                            headers: {
                                headersJson
                            }
                          };

            res = request('GET', url, syncHeaders);
        }
        else {
            res = request('GET', url);
        }

        var body = res.getBody('utf8');

        var o = JSON.parse(body);

        return o;        
    }

    post<TRequest, TResponse>(url: string, req: TRequest, headers?: SyncRequestHeader[]) : TResponse {
        let options = null;
        let res = null;        
        
        if (headers != null)
        {
            let headersJson = JSON.parse(JSON.stringify(headers));

            options = {
                            json: JSON.parse(JSON.stringify(req)),
                            headers: {
                                headersJson
                            }
                      };

            res = request('POST', url, options);
        }
        else {
            options = {
                json: JSON.parse(JSON.stringify(req))                
            };

            res = request('POST', url, options);
        }

        var body = res.getBody('utf8');

        var o = JSON.parse(body);

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