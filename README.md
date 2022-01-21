# _Mr. Roboger's Neighborhood_

#### _An application to count up to a user inputted number_

#### By _**Mikah Mathews**_

## Description

_An exercise using arrays and looping to take a user inputted number, then count up to that number while making exceptions for 1, 2, and 3._

## Setup/Installation Requirements

* Clone this repository.
* Navigate to index.html file through your file interface.
* Right click and open in the browser of your choice.

* Alternatively, open the webpage at https://mikah-mathews.github.io/mr-robogers-neighborhood/

## Known Bugs

No known bugs at this time.

## Support and contact details

If you have any suggestions or questions please email me at mikah@outofband.org

## Technologies Used

HTML
CSS
Git and GitHub
JavaScript
Bootstrap
jQuery

## Prompt

Given an integer "num":

1) Count up from 0 to num
2) Print out "Beep" if the number is 1
3) Print out "Boop" if the number is 2
4) Print out "Won't you be my neighbor" if the number is 3
5) If a number contains 1, print out "Beep". 
6) If a number contains 2, and/or 1, print out "Boop"
7) If a number contains 3, and/or 1/2, print out "Won't you be my neighbor"
8) The input should refresh when the user wants to rerun it

## Tests
Describe: beepBoop()

Test: "It should return 0 if 0 is inputted"
Code: beepBoop(0);
Expected Output: 0

Test: "It should count up to an inputted number"
Code: beepBoop(3);
Expected Output: 0, 1, 2, 3

Test: "It should return Beep if one is inputted"
Code: beepBoop(1);
Expected Output: 0, Beep

Test: "It should return Boop if two is inputted"
Code: beepBoop(2);
Expected Output: 0, Beep, Boop

Test: "It should return "Won't you be my neighbor" if three is inputted"
Code: beepBoop(3);
Expected Output: 0, Beep, Boop, Won't you be my neighbor

Test: "It should return "Won't you be my neighbor" if there is a three in the number"
Code: beepBoop(13);
Expected Output: ... 9, 10, 11, 12, Won't you be my neighbor

Test: "It should return Boop if there is a two in the number
Code: beepBoop(12);
Expected Output: ... 9, 10, 11, Boop

Test: "It should return Beep if there is a one in the number"
Code: beepBoop(13);
Expected Output: ... 9, Beep, Beep, Boop, Won't you be my neighbor


### License

This software is licensed under the MIT license.

Copyright (c) 2022 **_Mikah Mathews_**