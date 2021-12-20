# Check the rollout status for Deployment
```bash
$ kubectl rollout status deployment kubia  
```

# The code in pods name is the hash value of pod template in Deployment, ReplicaSet has the same hash in name. Deployment don't manage pods, but the ReplicaSet created by Deployment manage pods
```bash
$ kubectl get pods 

NAME                     READY   STATUS    RESTARTS      AGE
kubia-6567ff5d85-k7bhl   1/1     Running   0             24s
kubia-6567ff5d85-lz68c   1/1     Running   0             24s
kubia-6567ff5d85-vmvml   1/1     Running   0             24s

$ kubectl get rs
NAME               DESIRED   CURRENT   READY   AGE
kubia-6567ff5d85   3         3         3       3m11s
```

# Change(add or update) single property, this will not trigger upgrade. minReadySeconds is the delay time of upgrade
```bash
$ kubectl patch deployment kubia -p '{"spec":{"minReadySeconds":10}}' 
```
# Upgrade the image of deployment
```bash
$ kubectl set image deployment kubia nodejs=luksa/kubia:v2
```

# Monitor the upgrade
```bash
$ minikube service kubia # Start service

$ while true; do curl  http://127.0.0.1:63003\; done # Keep send request and check response

$ kubectl set image deployment kubia nodejs=luksa/kubia:v2 # upgrade image of Deployment

# Now we can see the pod will be upgraded

```

# Rollback upgrade to last version
```bash
$ kubectl rollout undo deployment kubia  
```

# Rollback to a specific version
```bash
$ kubectl rollout undo deployment kubia --to-revision=1
```

# Check the upgrade history. When create deployment we need use --record, so the CHANGE-CAUSE will display the upgrade info
```bash
$ kubectl rollout history deployment kubia
```

# Pause and resume upgrade
```bash
$ kubectl rollout pause deployment kubia 

$ kubectl rollout resume deployment kubia
```