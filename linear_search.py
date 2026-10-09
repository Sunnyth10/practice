#linear search implementaion inpython 
def linear_search(arr,target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1
#Example
arr = [10, 23, 45, 70, 11, 15]
target = 70
result = linear_search(arr,target)
if result != -1:
    print(f"Element found at index {result}")
else:
    print("Element not found in the array")

# Example usage
nums = [2, 7, 8, 2, 5, 2]
target = 9
class Solution:
    def twoSum(self, nums, target):
        for i in range(len(nums)):
            for j in range(i+1, len(nums)):
                if nums[i] + nums[j] == target:
                    return [i, j]
solution = Solution()
result = solution.twoSum(nums, target)
if result:
    print(f"Indices found: {result}")
solution = Solution()