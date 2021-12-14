# Create cert and private key
```bash
# This will create a "https.key" file
$ openssl genrsa -out https.key 2048 
# This will create a "https.cert" file
$ openssl req -new -x509 -key https.key -out https.cert -days 3650 -subj /CN=www.kubia-example.com
```

# Create a secret for https cert
```bash
$ kubectl create secret generic fortune-https --from-file=https.key --from-file=https.cert --from-file=foo
```