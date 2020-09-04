# Count Groups In A Board Exercise

A Node.js with TypeScript implementation for an exercise to count groups within a board of nxn cells, where each cell has either 0 representing an empty cell or 1 representing a full cell.  
A group is all full cells that are near each other verticallhy and horizontally.

# Requirements
NodeJS, I used v12.

## How To Run
```
npm install # for the first time
npm run build && npm start
```

# Output Example
```
created board:
[
  [ 0, 1, 0, 0, 0 ],
  [ 1, 0, 0, 0, 1 ],
  [ 1, 0, 0, 0, 1 ],
  [ 0, 1, 1, 1, 1 ],
  [ 1, 0, 0, 0, 1 ]
]
found 4 groups in board
```