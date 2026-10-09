x,y,z = map(int,input("Enter:").split())

a = abs(x - z)
b = abs(y - z)

if a > b:
    print("Cat a")
elif b > a:
    print("Cat b")
else:
    print("Mouse c")