# ts-sync-request
## TypeScript strongly-typed wrapper for sync-request library

## Make synchronous http calls in TypeScript

The package exports a **SyncRequestService** class which has methods to make synchronous GET, POST calls.

[**sync-request library on npm**](https://www.npmjs.com/package/sync-request)

[**ts-sync-request library on npm**](https://www.npmjs.com/package/ts-sync-request)

## Sample usage

**TypeScript classes**

```
class Request
{
    Email: string;
}

class Response
{
    isValid: boolean;
}
```

**Usage**

```
import { SyncRequestService, SyncRequestHeader } from 'ts-sync-request/dist';
```

**GET**:

```
     let email = "jdoe@xyz.com";
     let url = "http://localhost:59039/api/Movies/validateEmail/" + email;

     // Add headers
     let header = new SyncRequestHeader("user-agent", "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0");
     let headers: SyncRequestHeader[] = new Array<SyncRequestHeader>();
     headers.push(header);     

     let response = new SyncRequestService().get<Response>(url, headers);
```

**POST**:

```
     let url = "http://localhost:59039/api/Movies/validateEmailPost";
     let request = new Request();
     request.Email = "jdoe@xyz.com";

     // Add headers
     let header = new SyncRequestHeader("user-agent", "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0");
     let headers: SyncRequestHeader[] = new Array<SyncRequestHeader>();
     headers.push(header);     

     let response = new SyncRequestService().post<Request, Response>(url, request, headers);
```
 
The **headers** parameter is optional.