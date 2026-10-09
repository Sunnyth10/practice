dict={
    "nigaMail": "nigaman@gmail.com",
    "rammail": "ram@gmail.com",
    "sitaMail": "sita@gmail.com"

}


for key in dict.items():
    if key[0]=="nigaMail":
        print("Found the email:",f"{key[0]} :{key[1]}")
        break
    else:
        print("Not found")


    
