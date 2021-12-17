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

# Connect to a container sh
```bash
$ kubectl exec -it curl -- sh
```

# Check the env variables
```bash
$ env | grep KUBERNETES_SERVICE
```
# Visit the kubernetes API inside pod
```bash
$ curl --cacert /var/run/secrets/kubernetes.io/serviceaccount/ca.crt https://kubernetes
$ export CURL_CA_BUNDLE=/var/run/secrets/kubernetes.io/serviceaccount/ca.crt
$ TOKEN=$(cat /var/run/secrets/kubernetes.io/serviceaccount/token)
$ curl -H "Authorization: Bearer $TOKEN" https://kubernetes

```