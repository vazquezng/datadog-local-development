docker stop $(docker ps -q --filter name=datadog-agent)
docker rm $(docker ps -a -q --filter name=datadog-agent)
