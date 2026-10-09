graph = [
    [0,4,1,0],
    [4,0,2,5],
    [1,2,0,8],
    [0,5,8,0],
]
n = len(graph)
distance = [999,999,999,999]
visited = [False,False,False,False]
distance[0] = 0
for i in range(n):
    min_distance = 999
    for j in range(n):
        if visited[j] == False and distance[j] < min_distance:
            min_distance = distance[j]
            current = j
    visited[current]=True
    for j in range(n):
        if graph[current][j] !=0:
            new_distance = distance[current] + graph[current][j]
            if new_distance < distance[j]:
                distance[j] = new_distance 
print('shortest distance from vertex 0:')
for i in range(n):
    print("0 -> ", i, "=", distance[i])
    

