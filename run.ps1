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

