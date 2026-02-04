# start redis using docker

```
docker run -d -p 6379:6379 redis
```
<br>
we can use redis for a bunch of things ,we can use it as a database ,pub-sub ,queue and streams

<br>

# shell access to redis-cli via docker container

```
docker exec -it [container_id] /bin/bash
```

```
redis-cli
```
# redis stream 

<p>it is a data structure ,that acts as an append only log but has more potential than a usual append only log. It include access in O(1) time, complex consumption strategies such as consumer groups</p>

<br>

```
HSET key field value
```

```
HGET key field 
```

# basic commands

XADD: adds a new entry to a stream 
<br>
XREAD: reads one or more entries ,starting at a given position and moving forward in time<br>
XRANGE: returns a range of entries between two suppplied entry IDs<br>
XLEN: returns a length of a stream
<br>
XDEL: removes entries from a stream
<br>
XTRIM: trims a stream by removing older entries
