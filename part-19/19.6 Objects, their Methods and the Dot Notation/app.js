function HouseKeeper(
  name,
  age,
  language,
  skill,
  yearsOfExperience,
  cleaningRepertoire
) {
  this.name = name;
  this.age = age;
  this.language = language;
  this.skill = skill;
  this.yearsOfExperience = yearsOfExperience;
  this.clean = cleaningRepertoire;
}

var houseKeeper2 = new HouseKeeper(
  'Nico',
  '25',
  ['English'],
  ['Cooking'],
  12,
  function () {
    alert('cleaning in progress');
  }
);
