# Get the crash pod log. when previous pod crash, new pod will be created, --previous to check the crashed pod log
```bash
$ kubectl logs mypod --previous

# Check the restarted pod describe
$ kubectl describe po kubia-liveness
```

# Get ReplicationControllers
```bash
$ kubectl get rc      
```

# Check the information of ReplicationController
```bash
$ kubectl describe rc kubia  
```

# Edit the template of rc, we could edit the Spec or Template of rc
```bash
$ kubectl edit rc kubia 
```

# Scale rc
```bash
$ kubectl scale rc kubia --replicas=10
```
# Delete rc but keep pods
```bash
$ kubectl delete rc kubia --cascade=orphan
```

# Get ReplicaSet
```bash
$ kubectl get rs
```