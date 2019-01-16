# ts-sync-request
## TypeScript strongly-typed wrapper for sync-request library

## Make synchronous http calls in TypeScript

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
    IsValid: boolean;
}
```

**Usage**

```
import { SyncRequestService } from 'ts-sync-request/dist';
```

```
     let url = "http://localhost:59039/api/Movies/validateEmail";
     let request = new Request();
     request.Email = "jdoe@xyz.com";

     let response = new SyncRequestService().post<Request, Response>(url, request);
```