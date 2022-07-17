/*Write a module named studentHogwarts:

It contains two variables privateScore set to 0, and name set to null
It contains one private method changeScoreBy, it takes points in argument and add it to privateScore
The module gives access to four public methods (return an object):
setName, it takes into argument newName, and set the private variable name
rewardStudent, it calls the method changeScoreBy with 1
penalizeStudent, it calls the method changeScoreBy with -1
getScore, it returns name: score (ex: Harry: 14)
Create one variable named harry, that is an instance of studentHogwarts:

Set the name of the object to Harry
Reward the student four times
Log to the console the name and score
Create one variable named draco, that is an instance of studentHogwarts:

Sets the name of the object to Draco
Reward the student one time
Penalize the student three times
Log to the console the name and score */
class studentHogwarts {
  constructor(privateScore, name) {
    this.privateScore = 0;
    this.name = null;
  }

  #changeScoreBy(points) {
    this.privateScore += points;
  }

  setName(newName) {
    this.name = newName;
  }

  rewardStudent() {
    this.#changeScoreBy(1);
  }

  penalizeStudent() {
    this.#changeScoreBy(-1);
  }

  getScore() {
    return `${this.name}: ${this.privateScore}`;
  }
}

let harry = new studentHogwarts();

harry.name = "Harry";

for (let i = 0; i < 4; i++) {
  harry.rewardStudent();
}

console.log(harry.getScore());

let draco = new studentHogwarts();

draco.name = "Draco";

draco.rewardStudent();

for (let i = 0; i < 3; i++) {
  draco.penalizeStudent();
}

console.log(draco.getScore());
