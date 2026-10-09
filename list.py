# num = [10,20,30,40,50]
# for i in range(len(num)-1,-1,-1):
#     print(num[i], end=" ")



#add all numbers. in a list
# num =[10,20,30]
# print(num[0]+num[1]+num[2])
# length = len(num)
# sum = 0
# for i in num:
#     sum += i
# print(sum)

num = [10, 20, 30, 40, 50]
sum = 0
for i in range(len(num)):
    sum = sum +num[i] // len(num)
print(sum)