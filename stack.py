stack =[]
max = 4
while True:
    print('\n 1: Push \n 2: Pop \n 3: Peak \n 4: Display')
    choice = int(input('Enter your choice: '))
    if choice == 1:
        if len(stack) == max:
            print('Stack is full')
        else:
            x = int(input('Enter the element to push: '))
            stack.append(x)
            print(f'Pushed {x} to stack')
    elif choice == 2:
        if len(stack) == 0:
            print('Stack is empty')
        else:
            x = stack.pop()
            print(f'Popped {x} from stack')
    elif choice == 3:
        if len(stack) == 0:
            print('Stack is empty')
        else:
            print(f'Top element is: {stack[-1]}')
    elif choice == 4:
        if len(stack) == 0:
            print('Stack is empty')
        else:
            print('Stack elements are: ', stack)
    else:        print('Invalid choice, please try again')  