#Backtracking  algorithm for chess 
N = 4
board = [[0 for x in range(N)] for y in range(N)]

def valid(board):
    queen = []

    for i in range(N):
        for j in range(N):
            if board[i][j] == 1:
                queen.append((i,j))

        
    if len(queen) == 0:
        return True
    elif len(queen) != N:
        return False
    
    for i in range(N):
        for j in range(i +1,N):
            r1, c1 = queen[i]
            r2, c2 = queen[j]
            if c1 == c2 or r1 + c1 == r2 + c2 or r1 - c1 == r2 - c2:
                return False
    return True 
