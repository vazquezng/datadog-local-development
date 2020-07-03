# Developing locally with DataDog 

## Synopsis

This README aims to explain how to develop locally with DataDog. Note: using this method you will not run all of DataDog locally. For that you can create a _personal_ account. What you will find here is a read-up on how to host your local DataDog agent, and have your metrics sent to your very own DataDog environment.   

## Prerequisites

1. You have Docker installed ([Docker](https://docs.docker.com/docker-for-windows/))
2. You have a DataDog account ([at DataDog](https://www.datadoghq.com/))
3. You have an API key on your DataDog account ([over here](https://app.datadoghq.com/account/settings#api))

### Running the Docker container

We are going to want to ramp up a Docker container which hosts the DataDog Agent.

```
docker run -d --name datadog-agent \
        --network datadognet \
        -e DD_API_KEY=fbf915d8590b7e9ac96b0a227d2992fb \
        -e DD_APM_ENABLED=true \
        -e DD_APM_NON_LOCAL_TRAFFIC=true \
        -e DD_LOGS_ENABLED=true \
        -e DD_LOGS_CONFIG_CONTAINER_COLLECT_ALL=true \
        -e DD_AC_EXCLUDE="name:datadog-agent" \
        -v /var/run/docker.sock:/var/run/docker.sock:ro \
        -v /proc/:/host/proc/:ro \
        -v /opt/datadog-agent/run:/opt/datadog-agent/run:rw \
        -v /sys/fs/cgroup/:/host/sys/fs/cgroup:ro \
        datadog/agent:latest
```

Note: in the above command please replace _DataDog_API_KEY_ with [your API key](https://app.datadoghq.com/account/settings#api).

### Stopping and removing the container

When you want to shut the container down and remove it, execute the following commands to stop and remove the container.

```
docker stop $(docker ps -q --filter name=dd-agent)
docker rm $(docker ps -a -q --filter name=dd-agent)
```

## Notes for Windows 7 users

Make sure to connect to the DataDog Agent using the IP Address of your Docker VM. The default is: ```192.168.99.100```. For Windows 10 you can _probably_ use ```localhost```.
