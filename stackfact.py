#factorial code using stack
stack = []
n = 5
if n == 0 or n == 1:
        result = 1
else:
    while n > 0:
        stack.append(n)
        n -= 1
        result = 1
print(stack)
while stack:
    
    result *= stack.pop()


print(result)

