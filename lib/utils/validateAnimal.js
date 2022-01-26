const properties = ['animal_name', 'kingdom', 'phylum', 'animal_class', 'animal_order', 'suborder', 'family', 'subfamily', 'genus', 'species'];

module.exports = function(animal) {
  for(let i = 0; i < properties.length; i++) {
    const propVal = animal[properties[i]];
    if(typeof propVal === 'undefined' || propVal === null) throw new Error(`${properties[i]} must be defined`);
  }
};
