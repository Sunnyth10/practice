#1)
# a = int(input("Enter a number: "))
# if a > 0:
#     print("Positive number")
# elif a < 0:
#     print("Negative number")
# else:
#     print("Zero")


#2
# n = int(input("enter your number: "))
# sum1 = 0
# for i in range(1, n + 1):
#     sum1 = sum1 + i
# print(sum1)

#3
# a = int(input("enter your first number:"))
# b = int (input("enter your sec number: "))
# if a > b :
#     print("a is greater")
# elif b > a :
#     print("b is greater")
# else :
#     print("a = b")

#4
# factorial of the number
# n = int(input("enter your number: "))
# factorial = 1
# for i in range(1, n + 1):
#     factorial = factorial * i
# print(factorial)


# def factorial(n):
#     if n == 0 or n == 1:
#         return 1
#     else:
#         return n * factorial (n -  1)
# num = int(input("Enter a number: "))
# result = factorial(num)
# print(f"The factorial of {num} is {result}")        


#5
#factors of a number 
# n = int(input("enter your number: "))
# for i in range(1, n + 1):
#     if n % i == 0:
#         print(i)

#6
#check whether a number is perfect number or not
# n = int(input("enter your number: "))
# sum1 = 0
# for i in range(1, n):
#     if n % i == 0:
#         sum1 = sum1 + i
# if sum1 == n:
#     print("perfect number")
# else:
#     print("not a perfect number")



# n = int(input("enter your number: "))
# m = int(input("enter your number: "))
# sum1 = 0
# sum2 = 0
# for i in range(1, n +1 ):
#     if n % i == 0:
#         sum1 = sum1 + i

# for j in range(1, m +1 ):
#     if m % j == 0:
#         sum2 = sum2 + j

# if sum1// n == sum2// m and  n != m:
#     print("same numbers")
# else:
#     print("not same numbers")


#7
# Harshad number
# n = int(input("enter your numebr: "))
# sum1 = 0
# temp = n
# while temp > 0:
#     digit = temp % 10
#     sum1 = sum1 + digit
#     temp = temp // 10
# if n % sum1 == 0:
#     print("Harshad number")
# else:
#     print("not a Harshad number")



A = [2, 4, 6, 8, 10]

# Construct prefix array
prefix = [0] * len(A)
prefix[0] = A[0]

for i in range(1, len(A)):
    prefix[i] = prefix[i-1] + A[i]

# Range sum from index 1 to 3
L, R = 1, 3
range_sum = prefix[R] - prefix[L-1]

print("Prefix:", prefix)
print("Sum from 1 to 3:", range_sum)



