import string
s = input()
a_set = set(string.ascii_lowercase)
input_letter = set(s.lower())

if a_set.issubset(input_letter):
     print("yes")
else:
    print("no")       