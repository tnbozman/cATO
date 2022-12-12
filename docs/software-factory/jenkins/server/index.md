# Setup Jenkins on Docker

Jenkins docker container allows you to spin up jenkins as a container.

To achieve this configure the docker-compose file below.

## Docker Compose

### Summary
Base Image: jenkins/jenkins:lts
Exposed Ports:
- 8080 - Jenkins UI
- 50000 - used to communicate between master and slaves servers
Volumes: 
- jenkins home (NOTE: replace **{username}** with your username)
- docker.sock

### docker-compose.yml

Copy the following to docker-compose.yml

```yml
version: '3.3'

services:
  jenkins:
    image: jenkins/jenkins:lts
    privileged: true
    user: root
    ports:
      - 8080:8080
      - 50000:50000
    container_name: jenkins
    volumes:
      - /home/**{username}**/jenkins_compose/jenkins_configuration:/var/jenkins_home
      - /var/run/docker.sock:/var/run/docker.sock
```

### Docker Compose Up

Bring the docker compose up with the following command:

```bash
docker-compose -f docker-compose.yml up -d
```

#### Retrieve Initial Password

To access Jenkins you need to recover the initial password from the jenkins logs.

```
docker logs jenkins | less
```

Look for a block enclosed with six lines of asterisks like this:

```
*************************************************************
*************************************************************
*************************************************************
 
Jenkins initial setup is required. An admin user has been created and a password generated.
Please use the following password to proceed to installation:
 
c061b679107a4893b5383617729b5c6a
 
This may also be found at: /var/jenkins_home/secrets/initialAdminPassword
 
*************************************************************
*************************************************************
*************************************************************
```

#### Create Admin Account


![create account](/jenkins/Jenkins_account.png)