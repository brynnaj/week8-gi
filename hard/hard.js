function createPatient(name, ssn) {
  // Private object
  var PII = {
    name: name,
    SSN: ssn
  };

  // Public function to access name property
  function getName() {
    return PII.name;
  }

  // Public function to access SSN property
  function getSSN() {
    return PII.SSN;
  }

  // Return an object with public methods only
  return {
    getName: getName,
    getSSN: getSSN
  };
}

var patient2 = createPatient("John", "123-45-6789");

console.log(patient2.names); 
console.log(patient2.ssn); 
console.log(patient2.getName()); 
console.log(patient2.getSSN())