# Start minikube
```bash
$ minikube start 
```

# Check k8s cluster
```bash
$ kubectl cluster-info
```

# Deploy application
```bash
$ kubectl run kubia --image=dhyana1984/kubia --port=8080
```

# Check pods
```zsh
$ ubectl get pods
```

# Create service
First, create replication ymal file
Then run
```bash
$ kubectl apply -f replication.yaml   
```
Expose the replication controller external ip
```bash
$ kubectl expose rc kubia --type=LoadBalancer --name kubia-http
```
Check services
```bash
$ kubectl get svc 
```
Now the EXTERNAL-IP should be pending, if we are using minikube, we should run below command to get the external IP
```bash
 $ minikube service kubia-http
 ```

 # Check ReplicationControllers
 ```bash
 $ kubectl get replicationcontrollers
 ```

 # Add more pods in the ReplicationControllers
 ```bash
$ kubectl scale rc kubia --replicas=3
 ```

 # Open minikube dashboard
 ```bash
 $ minikube dashboard  
 ```
