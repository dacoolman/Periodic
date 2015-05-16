# Periodic
Files for a periodic table generated through javascript

html only has one div. Everything is populated through javascript.

Javascript file has an object with all elements, with each element being an object inside of the elements object containing
all the information about the object, including which color it should be.

There is an 8 by 19 array that contains the position of where each element/space/text should go

There is a for loop that goes through through each position in the array and generates inner html based on what the value is.
It uses an algorithm to determine where each block should be positioned (they are positioned absolute in the CSS). 
The algorithm also determines if it needs to account for a space between the 2nd and 3rd column

A second algorithm of green elements are implemented below in a separate array
