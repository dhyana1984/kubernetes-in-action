# Get the crash pod log. when previous pod crash, new pod will be created, --previous to check the crashed pod log
```bash
$ kubectl logs mypod --previous

# Check the restarted pod describe
$ kubectl describe po kubia-liveness
```