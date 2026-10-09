"""Quicksort implementations.

Contains a functional (returns new list) implementation and an in-place
implementation using the Lomuto partition scheme. Running the file
as a script shows example usage.
"""

def quick_sort(arr):
    """Return a new sorted list using Quicksort (not in-place)."""
    if len(arr) <= 1:
        return arr[:]
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quick_sort(left) + middle + quick_sort(right)


def _partition_lomuto(arr, low, high):
    pivot = arr[high]
    i = low - 1
    for j in range(low, high):
        if arr[j] <= pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return i + 1


def quick_sort_inplace(arr, low=0, high=None):
    """Sort list `arr` in-place using Quicksort (Lomuto partition)."""
    if high is None:
        high = len(arr) - 1
    if low < high:
        p = _partition_lomuto(arr, low, high)
        quick_sort_inplace(arr, low, p - 1)
        quick_sort_inplace(arr, p + 1, high)


if __name__ == "__main__":
    import sys

    if len(sys.argv) > 1:
        try:
            numbers = list(map(int, sys.argv[1:]))
        except ValueError:
            print("Please provide integers as arguments.")
            sys.exit(1)
    else:
        numbers = [3, 6, 8, 10, 1, 2, 1]

    print("Original:", numbers)
    print("Functional quick_sort:", quick_sort(numbers))
    arr_copy = numbers[:]
    quick_sort_inplace(arr_copy)
    print("In-place quick_sort:", arr_copy)
