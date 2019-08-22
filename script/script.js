// Platform Game Layout

let simpleLevelPlan = `
......................
..#................#..
..#..............=.#..
..#.........o.o....#..
..#.@......#####...#..
..#####............#..
......#++++++++++++#..
......##############..
......................`;

// Level 1  

class level{
    constructor(plan){
        let rows = plan.trim().split("\n").map(e=>[...e]);
        this.height = rows.length;
        this.width = rows[0].length;
        this.startActors = [];
        this.rows = rows.map((row, y) => {
            return new.map(ch, x) => {
                level type = level
            }
        })
    }
}