class Solution(object):
    def rearrangeBarcodes(self, barcodes):
        """
        :type barcodes: List[int]
        :rtype: List[int]
        """
        
        length = len(barcodes)
        result = [0] * length
        index = 0
        for el, count in collections.Counter(barcodes).most_common():
            for _ in range(count):
                result[index] = el
                index = index + 2
                if index >= length:
                    index = 1
        return result