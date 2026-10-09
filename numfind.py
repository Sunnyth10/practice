num = [10,-1,20,0,0,-2,3,0]

positive = []
negative = []
zero = []

for i in range(len(num)):
    if num[i] > 0:
        positive.append(num[i])
    elif num[i] < 0:
        negative.append(num[i])
    else:
        zero.append(num[i])

print("positive:",positive)
print("negative:",negative)
print("zero:",zero)
