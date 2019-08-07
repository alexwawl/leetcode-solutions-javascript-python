class Solution(object):
    def minMutation(self, start, end, bank):
        """
        :type start: str
        :type end: str
        :type bank: List[str]
        :rtype: int
        """
        if len(start) < 1 or len(end) < 1 or len(bank) < 1 or not end in bank:
            return -1
        
        queue = []
        queue.append((start,0))
        bankSet = set(bank)
        while queue:
            current_mutation, current_level = queue.pop(0)
            if current_mutation == end:
                return current_level
            
            for index in range(len(current_mutation)):
                for char in 'ACGT':
                    mutation = current_mutation[:index] + char + current_mutation[index+1:]
                    if mutation in bankSet:
                        bankSet.remove(mutation)
                        queue.append((mutation,current_level+1))
        
        return -1