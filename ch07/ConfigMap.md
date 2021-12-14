# Create ConfigMap, by using --from-literal could add multiple configs, this is create from env variable
```bash
$ kubectl create configmap fortune-config --from-literal=sleep-interval=25

$ kubectl create configmap myconfigMap --from-literal=a=1 --from-literal=b=2 --from-literal=c=2
```

# Create ConfigMap from folder configmap-files
```bash
$ kubectl create configmap fortune-config --from-file=../configmap-files  
```

# Define forward, (start the service for debug)
```bash
$ kubectl port-forward fortune-configmap-volume 8080:80
$ curl -H "Accept-Encoding: gzip" -I localhost:8080
```
# Check the configmap volume
```bash
$ kubectl exec fortune-configmap-volume -c web-server cat /etc/nginx/conf.d/my-nginx-config.conf
```
# Edit configMap
```bash
$ kubectl edit configmap fortune-config
```
# Reload nginx in K8s
```bash
$  kubectl exec fortune-configmap-volume -c web-server -- nginx -s reload
```

# Describe a secret
```bash
$ kubectl describe secrets
```