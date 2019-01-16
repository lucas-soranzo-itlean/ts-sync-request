import request from 'sync-request';

export class SyncRequestService
{    
    get<TResponse>(url: string): TResponse {
        var res = request('GET', url);

        var body = res.getBody('utf8');

        var o = JSON.parse(body);

        return o;        
    }

    post<TRequest, TResponse>(url: string, req: TRequest) : TResponse {
        const options = {
            json: JSON.parse(JSON.stringify(req))
        };
        
        var res = request('POST', url, options);

        var body = res.getBody('utf8');

        var o = JSON.parse(body);

        return o;
    }
}