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