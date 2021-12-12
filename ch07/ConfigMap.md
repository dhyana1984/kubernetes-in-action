# Create ConfigMap, by using --from-literal could add multiple configs, this is create from env variable
```bash
$ kubectl create configmap fortune-config --from-literal=sleep-interval=25

$ kubectl create configmap myconfigMap --from-literal=a=1 --from-literal=b=2 --from-literal=c=2
```

# Create ConfigMap from file
```bash
$ kubectl create configmap my-config --from-file=config-file.conf
```