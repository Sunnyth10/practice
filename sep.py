# print("apple\n","banana\n","cherry\n",sep='dog\n')
# print("Hello\nworld")
# greet="Good morning@@@"
# wish=greet.strip("@")
# print(wish)
# print(greet.split())
# print(greet.upper())
# print(greet.lower())
# print(greet.replace("morning@@@","night"))
# print(greet.replace("morning@@@","Afternoon"))
# print(' '.join(greet))
# list = ["Apple Banana Cherry Mango"]
# tuple = ("good morning")
# print("-".join(list))
# print("-".join(tuple))

# a = (" nikhil is gay for satya ")
# print(len(a))
# n = "hello"

# print(n[0])
# print(n[1])
# print(n[2])
# print(n[3])
# print(n[4])
# a = "Mathematics"
# b = "0123456789"
# print(a[1::])
# word ="mathematics"
# ch = "h"
# index = word.find(ch)
# print("Index of",ch,"is",index)
# print(type(word))
# age =int(input("enyter your age:"))
# if age >= 18:
#     print('adult')
# else:
#     print("minor BKL")
# x = "123"
# y = 3456
# z = int(x)
# print(x + y)
# print(10/3)
# print(10//3)
# print(10%5)
# a = 5
# a+=5
# print(a)
# a = 1
# for i in range():
#     print(i)
# info ={1:"john",2:"raju"}
# print("race",info)
# print(type(info))
# a = ['a','b','c']
# print('d'in a)
# result = 6 + 24//3**2
# rex = 5 + 3*2-4/2

# print(result,rex)
# rex = 7+3*(10//5)
# print(rex)
#l = 15
#b = 12
# Length = int(input("Enter the length:"))
# breadth = int(input("Enter the breadth:"))
# print("Area =",Length*breadth)
#Q2)Ask the user for the base and height of a triangle and calc its area 
# base=int(input("Enetr the base:"))
# height=int(input("Enter the height:"))
# print("Area=",0.5*base*height)


# print("\u2764Satya\u2764Nikhil\u2764")

# name = ("Alice")
# Age = 25
# print(f"my name is {name} and I am {Age} old")
# print(f"I will be {Age+1} next year")
# print("My name is {} and I am {} years old ".format(name,Age))
# print("name is %s and age is %d years old")
# print("I like {1} but I love {0}".format('boys',"girls"))

# a = 10 
# b = 20 
# a,b = b,a 
# print(a)
# print(b)
# a = 17 
# b = 22
# temp = a 
# a = b
# b = temp
# print(a,b)
#Q)1
# no_friends = int(input("Enter no of people:"))
# each_eats =int(input("Enter how many slices each persons will have:"))
# one_box = int(input("Enter the no of slices a box has:"))
# cost_of_pizza = int(input("Enter the cost of pizza:"))

# print("Total number of slices required =",no_friends*each_eats)
# print("Total no of pizza boxes required =",no_friends*each_eats//one_box)
# print("Total cost = ",no_friends*each_eats//one_box*cost_of_pizza)
# #Q2)
# Enter = int(input("Enter your number:"))
# if Enter >= 0:
#     print("Postive number ra babu")
#     if Enter%2 == 0 :
#         print("Even ra babu")
#     elif Enter%2 != 0:
#         print("Odd ra babu")
# elif Enter <= 0:
#     print("Negative ra babu")
# else:
#     print("0 ra babu")

#Q)
# user_name =input("Enter your Username:")
# password=input("Enter your password:")
# if user_name == "Games_Satya" and password=="Games_Nikhil":
#     print("Login successful")
# if user_name != "Games_Satya" and password !="Games_Nikhil":
#     print("Invalid user name and password")
# elif  user_name != "Games_Satya":
#         print("Invalid Username, try again")
# elif password != "Games_Nikhil":
#         print("Invalid password, try again")
# Q)
# running_burn =int(input("Enter how many calaries you burned by running:"))
# Cycling_burn = int(input("Enter how many calaries you burned by cycling:"))
# goal = int(input("Enter your target:"))
# if running_burn + Cycling_burn < goal:
#     print(f"You have under over {goal}cal,burn { goal - (running_burn + Cycling_burn) } to achieve the goal")
    
    
# elif running_burn + Cycling_burn > goal:
#     print(f"You have over under {goal} cal,you have burned {(running_burn + Cycling_burn) - goal}cal more than the target")

# else:
#     print("you have achieved your target")
# Q)
# likes =int (input ("Likes:"))
# shares =int (input ("Shares:"))
# comments =int (input ("Comments:"))
# total = likes + shares + comments
# p_likes = likes/total*100
# p_shares = shares/total*100
# P_comments = comments/total*100
# print("Total enagagement =",total)
# print("Likes percentage=",p_likes)
# print("Shares percentage=",P_Shares)
# print("Comments percentage=",P_comments)

#Q)
# base_fare = int(input("Enter base charge :"))
# fare_per_KM = int(input("Enter fare per KM:"))
# Km_travel = float(input("Enter KM:"))
# total_fare = base_fare + fare_per_KM*Km_travel

# tip = 15/100*total_fare 
# print("Tip =",tip)
# print("Total fare =",tip+total_fare)
#Q)

# wwe = str(input("What do you want to find? age or leap year test (A/L):")).upper()

# if wwe == "L":
#     yrs =int(input("Enter year:"))
#     if yrs %4 == 0:
#         print(yrs, "is leap year ra")
#     else:
#         print(yrs,"is not a leap year")
    
# if wwe == 'A':
#     year =int(input("ENTER YEAR OF BIRTH:"))
#     month = int(input("ENTER MONTH:"))
#     date = int(input("ENTER DATE:"))

# current_year = int("Enter current year:")
# current_month = int(input("Enter current month:"))
# current_day = int(input("Enter current date:"))
# goals = int(input("E")),int(input("E"))+int(input("E"))+int(input("E"))+int(input("E"))
# games = 5
# avg = sum(goals)/games
# print(avg)








# import time
# timestamp = time.strftime("%H:%M:%S")
# print(timestamp)
# print(dir(time))
# print(time.ctime())


# fruits = ["apple","banana","mango"]
# for i in fruits:
#     print(i)


# for char in "python":
#     print(char)
# for i in range(3):
#     print("hello world")

# for i in range(11):
#     print(i)
# for i in range(1,101,2):
#     print(i)
# for vowels in "amaterasu":
#     print(vowels)
# text = input('Enter text: ')
# for char in text:
#     if char.lower() in 'aeiou':
#         print(char)   
# for i in range(1,11):
#     print(i*7)

# for i in range(0,20):
#     if i % 2  != 0 :
#         continue
#     print(i)
# for i in range(11):
#     print("hello world")
# num = int(input("Enter your number:"))
# if num /2 == 0:
#     print("Even number")
# elif num /2 == 1:
#     print("Odd number") bgv bgv
# num = int(input("Enter your number:"))
# div = num//200
# print("200s are =",div)
# remaining = num %200
# print("100s = ", remaining)


#26-08-2025
#Q)1

# side1= int(input("Enter the first side:"))
# side2 = int(input("Enter the second side:"))
# side3 = int(input("Enter your third side:"))
# if side1 == side2 == side3:
#     print("Its a equilateral triangle")

# elif side1 == side2 or side1 == side3 or side2 == side3:
#     print("Its an isocoles triangle")

# elif side1 != side2 != side3:
#     print("Its a scalen triangle")

#Q)2
# a = int(input("Enter your digit:"))
# b = int(input("Enter your second digit:"))
# if a + b <= 20 and a+b >= 15:
#     print("RANGES BETWEEN 15 - 20 (20)")
# if a + b >20 or a + b < 15:
#     print("NOT IN THE RANGE OF (15 -20)",a +b)

#Q)3
# text = str(input("Enter your alphabet :"))
# if text in "aeiou":
#     print(f"{text} is a vowel")
# elif text != 'a' or 'e' or 'i' or 'o' or 'u':
#     print(f"{text} is not a vowel")
#Q)3
# import math
# a = int(input("Enter your 1st side:"))
# b = int(input("ENter your 2nd side:"))
# temp= a**2 + b**2
# (pow = 1/2
#mald = temp**1/2)

# hypo = math.sqrt(temp)
# print(hypo)

#q4)
# text = str(input("Enter your text:"))
# count = 0
# for i in text:
#     count+=1
#     print(count)

# name = "Abhishek"
# i = 0
# for i in name:
#     i += 1
#     print(name)
# list = [10,20,20,20,20,30,30,30,40]
# list.append([122,333,44,45,5,])
# list.extend([122,333,44,45,5,])
# list.insert(2,"c++")
# list.remove(10)
# list.pop(0)
# print(list.index(20))
# print(list.count(20))
# l1 = list.copy()
# must = [12,233,44,5,6,3]
# list.sort()
# print(list)
# # list.reverse
# print(list.reverse)
# print(sum(list))
# print(max(list))

# l =[0,2,0,5,2,3]
# print(any(l))
# print(all(l))
# print(len(l))
# l = [8,7,3,10,12]
# l.sort(reverse=True)
# print(l)

# n1 = ["python",'flask','django','tkinter']
# n2 = n1
# n3 = n1[:2]
# n2[0]='scipy'
# n3[1]="numpy"

# s=10
# for i in (n1,n2,n3):
#     if i[0] == 'python':
#         s += 1
#     if i[1] == 'python':
#         s += 2
# print(n1)
# print(n2)
# print(n3)

# print(s)

# list = ["hi","Beautiful",'girls','and','handsome','boys']
# list.sort(key=len)
# print(list)

# l = [1,2,['abc','hi',452],78,100,[124]]
# l[5] += [20]
# print(l[5])

# list = ['Bahubali',"pushpa",'sarainodu','arya','coolie']

# print(list[0],list[4])
# l = list(map(int,"123"))
# print(l)
# l = ["1",'2','3','4','5','6','7','8']
# b = l[1::2]
# print(b)

# l =[]
# for i in range(3):
#     first = int(input('Enter your number:'))
#     l.append(first)
#     print("final list:",l)

# fruits =['apple','banana','cherry','elephant','danger',"dih"]
# fruits.sort(key = len)
# print(fruits)


# l =[]
# j=[]
# for i in range(3):
#        first_list=int(input("enter your num:"))
#        print("Enter sec list")
#        l.append(first_list)
# for i in range(3):
#        sec_list=int(input("enter your num:"))
#        j.append(sec_list)
    
# m=l + j

# m.sort()
# m = [int(i) for i in m]
# print(m)

# a=input("enter ur numbr=").split()
# b=input("enter ur numbr2=").split()
# c=a+b
# c=[int(i) for i in c ]
# c.sort()
# print(c)
# my_list = input().split()
# first_dig = my_list[0]
# no_list = str([int(i) for i in my_list[1:-1]])
# final_dig = str(my_list[-1]) + my_list[1::-1]+ str(my_list[0])
# new_list = my_list[1:-1]
# last_list =[final_dig,new_list,first_dig]

# print(final_dig)


# a = input().split()
# b=[]
# for i in a :
#     if i not in b:
#         b.append(i)
# print(b)
# i = input().split()
# temp=i[0]
# i[0]=i[-1]
# i[-1]=temp
# print(i)

# a =['a','b','c','d']
# print(list(enumerate(a)))

# a =['bag','pen','cap','pen']
# b =['naruto','Rutherford']
# c =['nigga','mane','nock']
# a.extend(b)
# print("old_list:",a)
# a.append("oil")
# a.insert(2,"nigga")
# a = a + b +c
# a.remove("pen")
# a.pop(1)
# del a[1:3]
# a *= 5
# print("memory address of my list:",id(a))
# print("new_list:",a)
# a = list(map(int,input().split()))
# a.sort()
# print(sum(a[:3]))
# a = list(map(int,input().split()))
# print(max(a))
# print(min(a))

# a =list(map(int,input("Enter da number:").split()))
# b = []
# c = []

# for i in a:
#     if i%2 == 0 and i not in b:
#         b.append(i)
#         b.sort(reverse=True)
# for i in a:
#     if i%2 !=0 and i not in c:
#         c.append(i)
#         c.sort(reverse=False)
# b+=c
# print(b)

# a = list(map(int,input().split()))
# b = list(map(int,input().split()))
# a = a[:-1]
# a.extend(b)
# print(a)

# year = int(input())
# if year/4 == 0 and year != 100 or year %400==0:
#     print("leap year,not a century year")
# else:
#     print("not a leap year")
    
# year = int(input())
# m = year/4
# if year%4 == 0:
#     print("LEAP YEAR")
#     if m%5 ==0:
#         print("CENTURY YEAR")
#     else:print("NOT A CENTURY YEAR")
# else:
#     print("not a leap year ")

# num = int(input("enter:"))
# reverse = 0
# while num>0:
#     remainder =num%10
#     reverse=(reverse*10)+remainder
#     num=num//10
#     print(reverse)
# word = input("Enter word:")
# rev = word[::-1]

# if word == rev:
#     print("Palendrome")
# else:print("not a palendrome")

# string = 'prepinsta is fabulous'
# string = "".join(string.split())
# print("After removing space string is:",string)

# string = input("Enter your string")
# string = string[0:1].upper() + string[1:]
# print(string)
# True = False
# while True:
#     print(True)
#     break
# 
# for letter in "python":
#     if letter == "h":
#         pass
# print( "current letter :",letter)
# t =(1,2,4,3,6,5,10,9)
# t1 = tuple([i**2 for i in t[::2]])
# print(t1)


# t = tuple(input("Enter:").split())
# t1 = tuple(input())
# if t1 in t:
#     print("True")
# if t1 not in t:
#     print("False")

# t = tuple(input().split())
# ele = input()
# print(ele in t)

# t = tuple(input().split())
# t1 = t[::-1]
# print(t1)
# y = reversed(t)
# print(''.join(y))
# print(tuple(y))

# t1 = input("enter num u wanna find:")
# y = t.count(t1)
# z = t.index(t1)
# print("count = ",y,"\n" "Index =",z)
# t = tuple(input("enter first tup:").split())
# t1 = tuple(input("enter second tup:").split())
# z = t + t1
# print(z)
# list= [1,(2,3,4),5,6,(),2,4,5,()]
# list=[t for t in list if t]
# print(list)


# f = open("sample.txt","+r")
# f.write("This is a sample file")
# print(f.read())
# f.close()


# temperature = int(input("Enter the temperature:"))
# weather = str(input("Is it raining (YES/NO):"))
# if temperature > 30:
#     print("Its hot")
#     if weather == "yes":
#         print("Stay indoor")
#     else: print('Wear light clother')
# elif 15<=temperature>=30:
#     print("Weather is pleasent")
# else:
#     print("Its cold, wear a jacket")
# for i in range (25, 36):
#     if i % 2== 0 or i % 3 == 0:
#         print(i)
# for i in range (15,5,-2):
#     if i % 4 !=0:
#         print(i)
# find the diff between sum of even numbers and sum of off numbers (1- 100)
# sum = 0 
# pro = 1
# for i in range(1,10):
#     if i % 2== 0:
#         pro = pro * i
#     else:
#         sum = sum +i
# print(pro-sum)
# n = 12 
# count = 0 
# while n!= 1:
#     if n%2 ==0:
#         n = n//2
#     else:
#         n = 3 * n+1
#         count += 1
# print(count)
# n = int(input("enetr:"))
# for i in range(1,n+1):
#   print ('  ' * (n - i) + '* ' *(2*i -1))
# n = int(input())
# for i in range(n):
#     if i == 0 or i == n-1:
#         print(" * "*n)
#     else:
#         print(" * "," "*(n-2)," *")

# n = int(input())
# for i in range (1, n+1):
#     for j in range(1,i +1):
#         print(j,end =" ")
    
# for i in range(1 , n + 1):
#     for k in range(1 , n-i+1):
#         print(" ", end=" ")
#     for j in range(1, i +1):
#         print(j, end=" ")
#     print()

# n= int(input("enter:"))
# i = 1 
# for i in range(1,n +1):
#    for j in range(1, i+1):
#       print(i, end =" ")
#       i +=1
# print()

# l =[5,9,12,7,9]
# #.  0 1  2 3 4 
# #. -5-4 -3-2-1
# l.remove(22)
# print(l.pop(2))
# l.clear()
# del l
# print(l)


#2d lists
# l=[[7,9,8],[12,9,6]]
# l[0][1]=19
# print
# l=[[18,0],[24,1],[6,2],[16,0],[20,0],[4,2]]
# total_score=0
# total_wickets=0
# for r,w in l:
#     total_score+=r
#     total_wickets+=w
# print(total_score)
# print(total_wickets)
# n= int(input("enter numb:"))
# p =1 
# for i in range(1,n):
#     i=i+1
#     p=p+i
# print(p)

# l=(input("enter your number:"))

# for num in l:
#     print(len(l))


# try:
#     a = float(input("Enter first number: "))
#     b = float(input("Enter second number: "))
#     c = float(input("Enter third number: "))
# except ValueError:
#     print("Invalid input: please enter numeric values.")
# else:
#     largest = max(a, b, c)
#     print(f"The largest number is {largest}")



# try:
#     n = int(input("Enter a positive integer: "))
#     if n < 1:
#         print("Please enter a positive integer.")
#     else:
#         total = 0
#         for i in range(1, n + 1):
#             total += i
#         print(f"Sum of 1 to {n} is {total}")
# except ValueError:
#     print("Invalid input: please enter an integer.")

# L=list(map(int,input().split()))
# for i in range(0,len(L)):
#     if L[i]>100:
#         break
#     if L[i]%5==0:
#         print(L[i])

# L=list(map(int,input("NUM:").split()))
# for i in L:
#     if i >100:
#         break
#     if i%5==0:
#         print(i)



