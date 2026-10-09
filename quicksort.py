# quick sort
def quick_sort(arr):
    qs(arr,0,len(arr)-1)
    return arr

def qs(arr,low,high):
    if low<high:
        pi= part(arr, low, high)
        qs(arr,low, pi-1)
        qs(arr,pi+1,high)

def part(arr, low, high):
    i = low
    j = high
    pivot = arr[low]
    while i < j :
        while arr[i] <= pivot and i <= high - 1:
            i += 1
        while arr[j] >= pivot and j >= low + 1:
            j -= 1
        if i<j:
            arr[i], arr[j] = arr[j], arr[i]
    arr[low], arr[j] = arr[j], arr[low]
    return j

arr = list(map(int,input("Enter your numbers;").split()))
print("Sorted array:", quick_sort(arr))
