class Tv {
  constructor(size, brand) {
    this._size = size;
    this._brand = brand;
  }
  get size() {
    return this._size;
  }
  set size(x) {
    this._size = x;
  }
}

const stevesTV = new Tv("30inch", "LG");
console.log(stevesTV); // Tv {size: '30inch', brand: 'LG'}
//console.log(stevesTV.size()); // err
console.log(stevesTV.size); // 30inch
//console.log(stevesTV.size("99feet")); //err
stevesTV.size = "150feet"
console.log(stevesTV.size); // 150feet
console.log(stevesTV);

