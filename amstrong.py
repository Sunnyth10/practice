#amstrong number 
a = 153
sum = 0
temp = a
power = len(str(a))

while a > 0:
    digit = a % 10
    sum += digit ** power
    a //= 10 

if sum == temp:
    print("The number is an Armstrong number.")
else:
    print("The number is not an Armstrong number.")
 