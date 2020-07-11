# A dominoes challenge in Javascript

## The challenge is as follows:

Write a program which allows two players to play Dominoes against each other:

- The 28 tiles are shuffled face down and form the stock. Each player draws seven tiles.
- Pick a random tile to start the line of play.
- The players alternately extend the line of play with one tile at one of its two ends;
- A tile may only be placed next to another tile, if their respective values on the
  connecting ends are identical.
- If a player is unable to place a valid tile, they must keep on pulling tiles from the stock
  until they can.
- The game ends when one player wins by playing their last tile.

This is not an interactive application.

The game should look something like this:

```
Game starting with first tile: <4:1>
Alice plays <0:4> to connect to tile <4:1> on the board
Board is now: <0:4> <4:1>
Bob plays <0:5> to connect to tile <0:4> on the board
Board is now: <5:0> <0:4> <4:1>
Alice plays <1:1> to connect to tile <1:4> on the board
Board is now: <5:0> <0:4> <4:1> <1:1>
Bob can't play, drawing tile <1:6>
Bob plays <1:6> to connect to tile <1:1> on the board
Board is now: <5:0> <0:4> <4:1> <1:1> <1:6>
Alice plays <6:6> to connect to tile <1:6> on the board
Board is now: <5:0> <0:4> <4:1> <1:1> <1:6> <6:6>
Bob plays <4:6> to connect to tile <6:6> on the board
Board is now: <5:0> <0:4> <4:1> <1:1> <1:6> <6:6> <6:4>
Alice plays <5:5> to connect to tile <0:5> on the board
Board is now: <5:5> <5:0> <0:4> <4:1> <1:1> <1:6> <6:6> <6:4>
Bob plays <3:4> to connect to tile <4:6> on the board
Board is now: <5:5> <5:0> <0:4> <4:1> <1:1> <1:6> <6:6> <6:4> <4:3>
Alice plays <0:3> to connect to tile <3:4> on the board
Board is now: <5:5> <5:0> <0:4> <4:1> <1:1> <1:6> <6:6> <6:4> <4:3> <3:0>
Bob can't play, drawing tile <1:5>
Bob plays <1:5> to connect to tile <5:5> on the board
Board is now: <1:5> <5:5> <5:0> <0:4> <4:1> <1:1> <1:6> <6:6> <6:4> <4:3> <3:0>
Alice plays <0:2> to connect to tile <0:3> on the board
Board is now: <1:5> <5:5> <5:0> <0:4> <4:1> <1:1> <1:6> <6:6> <6:4> <4:3> <3:0> <0:2>
Bob plays <2:3> to connect to tile <0:2> on the board
Board is now: <1:5> <5:5> <5:0> <0:4> <4:1> <1:1> <1:6> <6:6> <6:4> <4:3> <3:0> <0:2> <2:3>
Alice plays <0:1> to connect to tile <1:5> on the board
Board is now: <0:1> <1:5> <5:5> <5:0> <0:4> <4:1> <1:1> <1:6> <6:6> <6:4> <4:3> <3:0> <0:2> <2:3>
Player Alice has won!
```

## Setting it up

1. Clone the repo.
2. `node index.js`

## Extra info

- The rest of the code is found inside the `./src` directory.
- Tests were super helpful throughout the challenge. Run npm with `npm i` to download Jest. Thereafter, run `npm test` to run the test suite.
