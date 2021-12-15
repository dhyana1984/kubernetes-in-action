# Get kubernete server URL
```bash
$ kubectl cluster-info    
```

# Visit https in a insecure way
```bash
$ curl https://127.0.0.1:12345 -k # or --insecure
```

# Launch k8s proxy server, then we can visit k8s by the proxy url
```bash
$ kubectl proxy
```

# Get all the job object by APJ
```bash
$ curl 127.0.0.1:8001/apis/batch/v1/jobs
```