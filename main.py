# Find the second largest number among a, b, and c
a = 10
b = 20
c = 30
d = 40 
e = 50

numbers = [a, b, c, d, e]
if a == b == c == d == e:
    print("All numbers are equal.")
else:
    numbers.sort(reverse=True)
    second_largest = numbers[1]
    print("Second largest number:", second_largest)

