# Get services
```bash
$ kubectl get svc
```

# Execute command in a existing pod
```bash
# http://10.101.164.66  is the service IP in kubenetes
# -- means end of kubectl command
$ kubectl exec kubia-x88c2 -- curl -s http://10.101.164.66 
```

# Check the env variables of pod, we can check the service IP and port
```bash
$ kubectl exec kubia-m5znd env 
```

# SSH to a pod
```bash
$ kubectl exec -it kubia-m5znd bash
```
# The k8s DNS servic
```bash
# Login to pod
$ kubectl exec -it kubia-m5znd bash

# Execute the curl in pod
$ curl http://kubia.default.svc.cluster.local

# If current pod is in the same namespace as service's pod, we can ignore svc.cluster.local
$ curl http://kubia.default 
$ curl http://kubia.default 
```

# Get endpoints
```bash
$ kubectl get endpoints kubia  
```

# If using GKE cluster, find the external IP then visit the NodePort service
```bash
$ kubectl get nodes -o jsonpath='{.items[*].status.addresses[?(@.type=="ExternalIP")].address}'
$ curl http://<ExternalIP>:<port>
```

# If using minikube, we need to start the service first
```bash
$ minikube service <service-name>[-n <spacename>]
```

# Check the addons
```bash
$ minikube addons list 

# Install ingress
$ minikube addons enable ingress
```

# Get all pod from all namespaces
```bash
$ kubectl get po --all-namespaces
```