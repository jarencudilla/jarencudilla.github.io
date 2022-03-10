def abbrev_name(name)
  #get first word and last word split using space
  #return first word first character.last word first character
  #optional force capitalization
  
  first, last = name.split(" ")
    return "#{first[0].upcase}.#{last[0].upcase}"

end