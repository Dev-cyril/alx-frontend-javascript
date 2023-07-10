import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors = 0) {
    super(sqft);
    this._floors = floors;
  }
  
  get floors() {
    return this._floors;
  }

  evacuationWarningMessage() {
    return `Evacuate the ${this.floors} floors slowly`;
  }
}
