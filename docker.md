# Run busybox
```bash
docker run busybox echo "Hello World"    
```

# Build docker file
```bash
docker build -t kubia .  
```

# Check image
```bash
docker images 
```

# Run container, -d means run in background
```bash
docker run --name kubia-container -p 8080:8080 -d kubia
```

# Connectto container bash
```bash
docker exec -it kubia-container bash 
```

# Stop container
```bash
docker stop kubia-container      
```

# Delete conatiner
```bash
docker rm kubia-container 
```

# Add tag to image and push to docker hub, the user name should be the same as docker hub
```bash
docker login      

docker tag kubia dhyana1984/kubia   

docker push dhyana1984/kubia   
```

# Check progress
```bash
ps aux | grep app.js     
```