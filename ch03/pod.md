# Get the yaml of pod
Use below command to get the ymal
```bash
$ kubectl get po kubia-269fj -o yaml

$ kubectl get po kubia-manual -o json  
```
output should be
```ymal
apiVersion: v1  -- Kubernetes API version of yaml file in use
kind: Pod       -- Kubernetes object/type
metadata:       -- Including name,label, and other information of the pod
  creationTimestamp: "2021-11-23T18:43:54Z"
  generateName: kubia-
  labels:
    app: kubia
  name: kubia-269fj
  namespace: default
  ownerReferences:
  - apiVersion: v1
    blockOwnerDeletion: true
    controller: true
    kind: ReplicationController
    name: kubia
    uid: 1892b8f4-fba8-4fab-b2a2-bf0a44597a79
  resourceVersion: "62781"
  uid: 28a0b321-a50a-45e0-a81c-39c60170b417
spec:          -- Including the actual description of the pod, like container, volume, and other data
  containers:
  - image: dhyana1984/kubia
    imagePullPolicy: Always
    name: kubia
    ports:
    - containerPort: 8080
      protocol: TCP
    resources: {}
    terminationMessagePath: /dev/termination-log
    terminationMessagePolicy: File
    volumeMounts:
    - mountPath: /var/run/secrets/kubernetes.io/serviceaccount
      name: kube-api-access-ktl69
      readOnly: true
  dnsPolicy: ClusterFirst
  enableServiceLinks: true
  nodeName: minikube
  preemptionPolicy: PreemptLowerPriority
  priority: 0
  restartPolicy: Always
  schedulerName: default-scheduler
  securityContext: {}
  serviceAccount: default
  serviceAccountName: default
  terminationGracePeriodSeconds: 30
  tolerations:
  - effect: NoExecute
    key: node.kubernetes.io/not-ready
    operator: Exists
    tolerationSeconds: 300
  - effect: NoExecute
    key: node.kubernetes.io/unreachable
    operator: Exists
    tolerationSeconds: 300
  volumes:
  - name: kube-api-access-ktl69
    projected:
      defaultMode: 420
      sources:
      - serviceAccountToken:
          expirationSeconds: 3607
          path: token
      - configMap:
          items:
          - key: ca.crt
            path: ca.crt
          name: kube-root-ca.crt
      - downwardAPI:
          items:
          - fieldRef:
              apiVersion: v1
              fieldPath: metadata.namespace
            path: namespace
status:         -- Including the running pod current information, like the situation of the pod, status and description of each container, IP
  conditions:
  - lastProbeTime: null
    lastTransitionTime: "2021-11-23T18:43:54Z"
    status: "True"
    type: Initialized
  - lastProbeTime: null
    lastTransitionTime: "2021-11-25T18:21:09Z"
    status: "True"
    type: Ready
  - lastProbeTime: null
    lastTransitionTime: "2021-11-25T18:21:09Z"
    status: "True"
    type: ContainersReady
  - lastProbeTime: null
    lastTransitionTime: "2021-11-23T18:43:54Z"
    status: "True"
    type: PodScheduled
  containerStatuses:
  - containerID: docker://c44fa4a10d5994dba77b4fb107fcc166bfe49a5ff787506501abcf6c74a81957
    image: dhyana1984/kubia:latest
    imageID: docker-pullable://dhyana1984/kubia@sha256:e3e75027d298ceff89411358b2dc0634fbad9780e8e871ff03ee0075754a4281
    lastState:
      terminated:
        containerID: docker://ded128c6f50ac5b3c22b2a9b30ae23263042b14271392584b2631acfebb1c990
        exitCode: 137
        finishedAt: "2021-11-23T19:32:42Z"
        reason: Error
        startedAt: "2021-11-23T18:44:24Z"
    name: kubia
    ready: true
    restartCount: 1
    started: true
    state:
      running:
        startedAt: "2021-11-25T18:21:09Z"
  hostIP: 192.168.49.2
  phase: Running
  podIP: 172.17.0.6
  podIPs:
  - ip: 172.17.0.6
  qosClass: BestEffort
  startTime: "2021-11-23T18:43:54Z"
```

# Get the explain of API
```bash
$ kubectl explain pods
$ kubectl explain pod.spec
```

# Create pod from ymal file
```bash
$ kubectl create -f kubia-manual.ymal
```

# Get the log of pod
```bash
$ kubectl logs kubia-manual -c kubia
```
If there is multiple containers in one pod, we have to add -c and container name
```bash
$ kubectl logs kubia-manual -c kubia
```
# Connect to pod directly
Use port-forward command, 8888 is local port, 8080 is pod port
```bash
$ kubectl port-forward kubia-manual 8888:8080 # The console will handler the port forward

$ curl localhost:8888 # Open a new console and visit localhost:8888
# Then get below log
# Forwarding from 127.0.0.1:8888 -> 8080
# Forwarding from [::1]:8888 -> 8080
# Handling connection for 8888
# Handling connection for 8888
```

# Add labels in ymal
```ymal
apiVersion: v1
kind: Pod
metadata:
  name: kubia-manual-v2 # name of pod
  labels:
    creation_method: manual
    env: prod
spec:
  containers:
    - image: dhyana1984/kubia
      name: kubia # name of container
      ports:
        - containerPort: 8080
          protocol: TCP
```

# Display the labels of pod
```bash
$ kubectl get po --show-labels   

#List the labels that we need, creation_method and env are the key of labels
$ kubectl get po -L creation_method,env
```

# Add and edit label for pod. Add creation_method=manual label for kubia-manual
```bash
$ kubectl label po kubia-manual creation_method=manual

# Edit the label "env" value to "debug" for kubia-manual-v2, need add --overwrite 
$ kubectl label po kubia-manual-v2 env=debug --overwrite 
```

# Filter pod by label key. 
```bash
# Filter the pods that with "creation_method" label value is "manual"
$ kubectl get po -l creation_method=manual --show-labels  

# Filter the pods that with "env" label, whatever the  value is 
$ kubectl get po -l env --show-labels  

# Filter the pods that without 'env' label
$ kubectl get po -l '!env' 
```