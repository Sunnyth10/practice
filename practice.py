# class grandfather:
#     def func4(self):
#         print("I have a house")

# class dad:
#     def func1(self):
#         print("I can drive my father's car")

# class mom:
#     def func2(self):
#         print("I can drive my mother's scooty")

# class children(dad,mom,grandfather):
#     def func3(self):
#         print("I can drive my own bike")

# obj=children()
# obj.func1()
# obj.func2()
# obj.func3()
# obj.func4()


# mystr = "banana is good"
# myit = iter(mystr)

# print(next(myit))
# print(next(myit))
# print(next(myit))
# print(next(myit))
# print(next(myit))
# print(next(myit))
# print(next(myit))
# print(next(myit))
# print(next(myit))
# print(next(myit))
# print(next(myit))
# print(next(myit))


# class calculator:
#     def add(self,a=0,b=0,c=0):
#         print(a+b+c)

# c = calculator()
# c.add(5)
# c.add(5,10)
# c.add(5,10,15)

# class phonepay:
#     def __init__(self,pin,bal):
#         self.__pin = pin
#         self.__bal = bal
        
#     def check_pin (self, pin):
#         if pin == self.__pin:
#             print(self.__bal)
#         else:
#             print("Wrong Pin")
# p = phonepay("1234", 10670)
# p.check_pin("234")

# from abc import ABC, abstractmethod
# class vehicle(ABC):
#     @abstractmethod
#     def start(self):
#         pass

#     @abstractmethod
#     def stop(self):
#         pass
# class car(vehicle):
#     def start(self):
#         print("Car started")

#     def stop(self):
#         print("Car stopped")

# class bike(vehicle):
#     def start(self):
#         print("Bike started")

#     def stop(self):
#         print("Bike stopped")

# c = car()
# c.start()
# c.stop()
# b = bike()
# b.start()
# b.stop()

file = open("sample.txt", "r")
file.write("Hello, my guys!")
file.close()

