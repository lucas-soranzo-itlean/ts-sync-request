# ts-sync-request
## TypeScript strongly-typed wrapper for sync-request library

## Make synchronous http calls in TypeScript

The package exports **SyncRequestClient** and **SyncRequestService** classes which have methods to make synchronous GET, POST calls.

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

**Fluent API**

You can use the fluent API by using the **SyncRequestClient** class as shown below.

```
import { SyncRequestClient } from 'ts-sync-request/dist'
```

**GET**:

```
    let email = "jdoe@xyz.com";
    let url = "http://localhost:59039/api/Movies/validateEmail/" + email;

    var response = new SyncRequestClient()
                                .addHeader("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NDc2OTg1MzgsIm5iZiI6MTU0NzY5NDIxOCwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZSI6InN0cmluZyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6InN0cmluZyIsIkRPQiI6IjEvMTcvMjAxOSIsImlzcyI6InlvdXIgYXBwIiwiYXVkIjoidGhlIGNsaWVudCBvZiB5b3VyIGFwcCJ9.qxFdcdAVKG2Idcsk_tftnkkyB2vsaQx5py1KSMy3fT4")
                            .get<Response>(url)
```

**POST**:

```
    let url = "http://localhost:59039/api/Movies/validateEmailPost";
    let request = new Request();
    request.Email = "email";

    var response = new SyncRequestClient()
                                .addHeader("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NDc2OTg1MzgsIm5iZiI6MTU0NzY5NDIxOCwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZSI6InN0cmluZyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6InN0cmluZyIsIkRPQiI6IjEvMTcvMjAxOSIsImlzcyI6InlvdXIgYXBwIiwiYXVkIjoidGhlIGNsaWVudCBvZiB5b3VyIGFwcCJ9.qxFdcdAVKG2Idcsk_tftnkkyB2vsaQx5py1KSMy3fT4")
                            .post<Request, Response>(url, request)
```

The **addHeader** API is optional. You can call **addHeader** multiple times.

**Traditional API**:

```
import { SyncRequestService, SyncRequestHeader } from 'ts-sync-request/dist';
```

**GET**:

```
    let email = "jdoe@xyz.com";
    let url = "http://localhost:59039/api/Movies/validateEmail/" + email;

    // Add headers
    let header = new SyncRequestHeader("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NDc2OTg1MzgsIm5iZiI6MTU0NzY5NDIxOCwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZSI6InN0cmluZyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6InN0cmluZyIsIkRPQiI6IjEvMTcvMjAxOSIsImlzcyI6InlvdXIgYXBwIiwiYXVkIjoidGhlIGNsaWVudCBvZiB5b3VyIGFwcCJ9.qxFdcdAVKG2Idcsk_tftnkkyB2vsaQx5py1KSMy3fT4");
     
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
    let header = new SyncRequestHeader("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NDc2OTg1MzgsIm5iZiI6MTU0NzY5NDIxOCwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZSI6InN0cmluZyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6InN0cmluZyIsIkRPQiI6IjEvMTcvMjAxOSIsImlzcyI6InlvdXIgYXBwIiwiYXVkIjoidGhlIGNsaWVudCBvZiB5b3VyIGFwcCJ9.qxFdcdAVKG2Idcsk_tftnkkyB2vsaQx5py1KSMy3fT4");
     
    let headers: SyncRequestHeader[] = new Array<SyncRequestHeader>();
    headers.push(header);     

    let response = new SyncRequestService().post<Request, Response>(url, request, headers);
```
 
The **headers** parameter is optional.