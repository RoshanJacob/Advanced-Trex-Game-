class Start {
  constructor() {
    this.input2 = createInput('Type your name here');
  }

  playerName() {
    var ref = database.ref('Profile').set({
      Name: this.input2.value(),
    });
  }
  display() {
    this.input2.position(540, 50);
  }
}
