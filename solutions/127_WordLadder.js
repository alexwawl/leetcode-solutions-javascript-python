/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    // let check edge cases:
    if(!endWord || !wordList ||wordList.indexOf(endWord) < 0 || !beginWord){
        return 0;
    }
    
    // create dict with all possible combination of word.
    // changing 1 letter at a time.
    let all_combo_dict = {};
    for(let i=0;i<wordList.length;i++){
        let word = wordList[i];
        for(let j =0;j<beginWord.length;j++){
            let key = word.slice(0,j) + '*' + word.slice(j+1);
            if(all_combo_dict[key]){
                all_combo_dict[key].push(word)
            } else {
                all_combo_dict[key] = [word]
            }
            
        }
    }
    /*all_combo_dict:
    { '*ot': [ 'hot', 'dot', 'lot' ],
      'h*t': [ 'hot' ],
      'ho*': [ 'hot' ],
      'd*t': [ 'dot' ],
      'do*': [ 'dot', 'dog' ],
      '*og': [ 'dog', 'log', 'cog' ],
      'd*g': [ 'dog' ],
      'l*t': [ 'lot' ],
      'lo*': [ 'lot', 'log' ],
      'l*g': [ 'log' ],
      'c*g': [ 'cog' ],
      'co*': [ 'cog' ] }
     */
    
    //BFS:
    let queue = [];
    queue.unshift([beginWord,1]);
    let visited_key = beginWord + '';
    let visited = {};
    visited[visited_key] = true;
    while(queue.length > 0){
        let current = queue.shift();
        let current_word = current[0];
        let current_level = current[1];
        for(let i=0;i<beginWord.length;i++){
            // the same as key in dict;
            let intermidiate_word = current_word.slice(0,i) + '*' + current_word.slice(i+1);
            let possible_words = all_combo_dict[intermidiate_word];
            if(possible_words){
               for(let j=0;j<possible_words.length;j++){
                    let word = possible_words[j]
                    if(word == endWord){
                        return current_level + 1;
                    }

                    if(!visited[word]){
                        visited[word] = true;
                        queue.push([word,current_level+1])
                    }
                }
            }

            all_combo_dict[intermidiate_word]=[];
            
            
        }
    }
   return 0
};