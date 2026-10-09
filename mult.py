n = int(input("Please enter a positive number:"))

for i in range(1, n+1):
    for j in range(1,11):
        print(f"{i} * {j} = {i * j}")