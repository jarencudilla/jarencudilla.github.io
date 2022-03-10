def reverse_alternate(string)
  #split string into an words https://rubydoc.info/stdlib/core/String#split-instance_method
  #check each of the split words we can use index as marker https://rubydoc.info/stdlib/core/Enumerable:each_with_index
  #if index is odd reverse it https://rubydoc.info/stdlib/core/String#reverse!-instance_method
  #if index is even do nothing
  #join all the words then return the newstring https://rubydoc.info/stdlib/core/Array#join-instance_method
  
  words = string.split(' ')
  words.each_with_index do |word, index|
   word.reverse! if index.odd?
  end
  
  return words.join(' ')

end
