# Boxing-game
> Boxing Game Exercise

## Instructions
> File/Environment Setup

1. Create a JavaScript file called `boxing.js` in your `week3` directory
2. Open up the file in VSCode, all the code in this assignment will be added the `boxing.js`

### Setting Up the Boxers Using JavaScript Objects

1. Each group should create two boxers with starting health points and Name.
   > What data structure would help us accomplish this? We need some sort of container that will allow us to add properties such as name and health points. 
   > An object is the best data structure to store multiple key value pairs to one collection. Below we created two object for each respective boxer

   
## Getting Started

Apply if, else if, and else statements to handle different gameplay scenarios 
(e.g., basic hit, critical hit, knockout) to exemplify understanding of conditional branching
By using conditionals to determine game outcomes and player health status, 
you will problem-solve and troubleshoot their projects to create functional gameplay via the VSCode terminal


### Overall Gameplay
Below is an explanation of how the game works. It will breakdown how the hits are delivered and how each hit differs in the damage delivered.
- Players take turns delivering damage to their opponent. Damage is randomly set between 1 and 10 points.
- Basic Hit: Damage less than 6.
- Critical Hit: Damage between 6 and 9 (inclusive).
- Knockout: Damage equal to 10.
- If either player's health drops to 0 or below, they are knocked out, and the game ends.


### Gameplay Sequence

> Below is the sequence of events you should see emulated in your boxing game.
> We use this logic to determine the direction our code should go in.
> This would be a good example of developing pseudo code before jumping into our scripts.


1. Check whose turn it is to determine who is taking damage
2. Set damage to a random number
3. Check what category the damage falls under
4. Reduce damage the player receiving the hit
5. Check their health at its current state to determine a knockout
6. Switch player turns


### Expected Output

When the program runs, it alternates hits between the two boxers, displaying the results of each hit until one boxer is knocked out.


## Additional Documentation and Acknowledgments
- Project folder on server:
- Link to project on production [title] (https://tokslaw.com)




