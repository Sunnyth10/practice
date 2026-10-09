#two pointers technique 
def two_sum_sorted(arr, target):
    left = 0
    right = len(arr) - 1
    
    while left < right:
        current_sum = arr[left] + arr[right]
        if current_sum == target:
            return (left, right)
        elif current_sum < target:
            left += 1
        else:
            right -= 1
            
    return None 
# Example usage
arr = list(map(int, input("Enter sorted array elements separated by spaces: ").split()))
target = int(input("Enter the target sum: "))
result = two_sum_sorted(arr, target)
if result:
    print(f"Pair found at indices: {result}")
else:
    print("No pair found with the given sum.")