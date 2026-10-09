#Brute Force Approach
def max_sum(arr,k):
    max_sum = float('-inf')
    for i in range (0, len(arr)-k+1):
        curr_sum = 0
        for j in range (i,i+k):
            curr_sum += arr[j]
        max_sum = max(max_sum,curr_sum)
    return max_sum

arr = [2,1,5,1,3,2]
k = 3
result = max_sum(arr,k)
print(f"Maximum sum of {k} consecutive elements is: {result}")
