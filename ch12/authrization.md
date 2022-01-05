# Create service account
```bash
$ kubectl create serviceaccount foo
```

# Check service account object, sa is service account
```bash
$ kubectl describe sa foo

Name:                foo
Namespace:           default
Labels:              <none>
Annotations:         <none>
Image pull secrets:  <none>
Mountable secrets:   foo-token-9klml # secret object
Tokens:              foo-token-9klml
Events:              <none>
```

# Create role and role binding
```bash
# Create role
$ kubectl create role service-reader --verb=get --verb=list --resource=services -n bar  
$ kubectl create -f service-reader.yml -n foo   # from file

# Create role binding, create a test role binding and bind service-reader and default service account in foo namespace
$ kubectl create rolebinding test --role=service-reader --serviceaccount=foo:default -n foo

# Then pod can visit services via default service account
$ kubectl exec -it test -n foo --  curl localhost:8001/api/v1/namespaces/foo/services
```

# Create cluster role and cluster role binding
```bash
$ kubectl create clusterrole pv-reader --verb=get,list --resource=persistentvolumes
$ kubectl create clusterrolebinding pv-test --clusterrole=pv-reader --serviceaccount=foo:default
```

# If use cluster role and normal role binding, all namespace could reuse the cluster role, but pod only can visit the resouce in it's namespace