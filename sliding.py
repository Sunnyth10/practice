#Sliding window algorithm implementation
def sliding_window(arr, k):
    if len(arr) < k:
        return None

    max_sum = float('-inf')
    window_sum = sum(arr[:k])
    max_sum = window_sum

    for i in range(k, len(arr)):
        window_sum += arr[i] - arr[i - k]
        max_sum = max(max_sum, window_sum)

    return max_sum
# Example usage
arr = [2, 1, 5, 1, 3, 2]
k = 3
result = sliding_window(arr, k)
print(f"Maximum sum of {k} consecutive elements is: {result}")



#Sliding window 

def longest_substring(nums):
    length = 0
    L = 0

    for R in range(len(nums)):
        if nums[L] != nums[R]:
            L = R
        length = max(length, R - L + 1)
    return length
# Example usage
nums = [5,2,2,3,3,3]
print(longest_substring(nums))



