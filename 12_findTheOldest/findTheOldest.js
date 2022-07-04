const findTheOldest = function(people) {
    const oldestPerson = people.reduce((oldest, person) => { 
      if ((person.yearOfDeath - person.yearOfBirth) > (oldest.yearOfDeath - oldest.yearOfBirth)) { 
          return person; 
      } else if ((person.yearOfDeath - person.yearOfBirth) <= (oldest.yearOfDeath - oldest.yearOfBirth)) { 
          return oldest; 
      }

  }); 
  return oldestPerson;
}; 


// Do not edit below this line
module.exports = findTheOldest;
