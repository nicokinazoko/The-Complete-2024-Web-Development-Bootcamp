var housekeeper1 = {
  name: 'Nico',
  age: 20,
  language: ['English', 'Spain'],
  skill: ['Cooking'],
  yearsOfExperience: 12,
};

function HouseKeeper(name, age, language, skill, yearsOfExperience) {
  this.name = name;
  this.age = age;
  this.language = language;
  this.skill = skill;
  this.yearsOfExperience = yearsOfExperience;
}

var houseKeeper2 = new HouseKeeper('Nico', '25', ['English'], ['Cooking'], 12);

function BellBoy(name, age, hasWorkPermit, languages) {
  this.name = name;
  this.age = age;
  this.hasWorkPermit = hasWorkPermit;
  this.language = languages;
}

var bellBoy1 = new BellBoy('Timmy', 19, true, ['French', 'English']);
