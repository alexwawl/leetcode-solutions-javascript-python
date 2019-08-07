class Solution(object):
    def exist(self, board, word):
        """
        :type board: List[List[str]]
        :type word: str
        :rtype: bool
        """
        for row in range(len(board)):
            for col in range(len(board[0])):
                if self.find(board, row, col, word):
                    return True
                
        return False
    
    def find(self, board, i, j, word):
        if len(word) == 0:
            return True

        if i < 0 or i >= len(board) or j < 0 or j >= len(board[0]) or word[0] != board[i][j]:
            return False
        
        tmp = board[i][j]
        board[i][j] = '#'
        
        new_word = word[1:]
        result = self.find(board, i+1, j, new_word) or self.find(board, i-1, j,new_word) or self.find(board, i, j+1, new_word) or self.find(board, i, j-1, new_word)

        board[i][j] = tmp
        return result