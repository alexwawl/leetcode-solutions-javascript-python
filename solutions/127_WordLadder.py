class Solution(object):
    def ladderLength(self, beginWord, endWord, wordList):
        """
        :type beginWord: str
        :type endWord: str
        :type wordList: List[str]
        :rtype: int
        """
        if len(beginWord) < 1 or len(endWord) < 1 or len(wordList) < 1 or not endWord in wordList:
            return 0
        
        dict = {}
        result = 0
        for word in wordList:
            for index in range(len(beginWord)):
                key = word[:index] + '*' + word[index+1:]
                if key in dict:
                    dict[key].append(word)
                else:
                    dict[key] = [word]
        """
            {u'do*': [u'dot', u'dog'],
            u'h*t': [u'hot'],
            u'*ot': [u'hot', u'dot', u'lot'],
            u'd*t': [u'dot'],
            u'lo*': [u'lot', u'log'],
            u'ho*': [u'hot'],
            u'c*g': [u'cog'],
            u'l*g': [u'log'],
            u'd*g': [u'dog'],
            u'*og': [u'dog', u'log', u'cog'],
            u'co*': [u'cog'],
            u'l*t': [u'lot']}
        """
        
        queue = []
        visited = {}
        visited[beginWord] = True
        queue.append((beginWord,1))
        
        while queue:
            current_word, current_level = queue.pop(0)
            for index in range(len(current_word)):
                middle_word = current_word[:index] + '*' + current_word[index+1:]
                possible_words = dict[middle_word] if middle_word in dict else []
                if possible_words:
                    for p_word in possible_words:
                        if p_word == endWord:
                            return current_level+1
                        
                        if not p_word in visited:
                            visited[p_word] = True
                            queue.append((p_word,current_level+1))
            
                dict[middle_word] = []
        
        return result