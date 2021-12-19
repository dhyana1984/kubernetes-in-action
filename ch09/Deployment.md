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
