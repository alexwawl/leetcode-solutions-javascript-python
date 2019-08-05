class Solution(object):
    def isValidSudoku(self, board):
        """
        :type board: List[List[str]]
        :rtype: bool
        """
        def is_valid(arr):
            dict = {}
            tmp = []
            for el in arr:
                if el != '.':
                    tmp.append(el)
                    dict[el] = True
            return len(dict.keys()) == len(tmp)
        
        def is_rows_valid(board):
            for row in board:
                if not is_valid(row):
                    return False
            return True
        
        def is_cols_valid(board):
            for col in zip(*board):
                if not is_valid(col):
                    return False
            return True
        
        def is_square_valid(board):
            squares_start = [0,3,6]
            for start_y in squares_start:
                for start_x in squares_start:
                    tmp = []
                    for x in range(3):
                        for y in range(3):
                            tmp.append(board[start_x + x][start_y+y])
                    if not is_valid(tmp):
                        return False
            return True
        
        return is_rows_valid(board) and is_cols_valid(board) and is_square_valid(board)