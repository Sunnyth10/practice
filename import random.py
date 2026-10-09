# import random
# import string

# def generate_random_letters(n=3):
#     letters = (random.choice(string.ascii_lowercase) for _ in range(n))
#     return ''.join(letters)

# def encode_word(word):
#     if len(word) >= 3:
#         modified = word[1:] + word[0]
#         return generate_random_letters() + modified + generate_random_letters()
#     else:
#         return word[::-1]

# def decode_word(word):
#     if len(word) >=3:
#         core = word[3:-3] #Removes 3 letters from the beginning and end
#         return core[-1] + core[:-1] #adding last letter + remaining letter 
#     else:
#         return word[::-1] 
           

# def main():
#     choice = input("Do you want to encode or decode? (e/d): ").strip().lower()
    
#     if choice == 'e':
#         text = input("Enter the text: ").strip()
#         encoded_words = [encode_word(w) for w in text.split()]
#         print("Encoded text:", ' '.join(encoded_words))
#     elif choice == 'd':
#         text = input("Enter the text: ").strip()
#         decoded_words = [decode_word(w) for w in text.split()]
#         print("Decoded text:", ' '.join(decoded_words))
#     else:
#         print("Invalid choice!")

# if __name__ == "__main__":
#     main()

# n = int(input("Enter a number: "))
# for i in range(1, n+1):
#     print(" " * (n - i) ,end="")
#     for j in range(1, i+1):
#         print("*",end="",)
#     print() 

import random as r
import string as s
def generate_random_letters(n=3):
    letters = (r.choice(s.ascii_lowercase) for _ in range(n))
    return ''.join(letters)
