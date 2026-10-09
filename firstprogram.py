file = open("hello.txt", "w")
file.write("Hello, World!")
file.close()

file = open("hello.txt", "r")
content = file.read()
print(content)
file.close()

file = open("hello.txt", "a")
file.write("\nThis is an appended line.")
file.close()
