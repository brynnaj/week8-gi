function Person(name, job, age) {
    this.name = name;
    this.job = job;
    this.age = age;
  }
  
  Person.prototype.exercise = function () {
    console.log("Running is the bane of my existence");
  };
  
  Person.prototype.fetchJob = function () {
    console.log(`${this.name} is a ${this.job}`);
  };
  
  // Programmer constructor, inherits from Person
  function Programmer(name, job, age, languages) {
    Person.call(this, name, job, age);
    this.languages = languages;
    this.busy = true; // Set to true by default
  }
  
  // Inherit Person's prototype methods
  Programmer.prototype = Object.create(Person.prototype);
  
  Programmer.prototype.completeTask = function () {
    this.busy = false;
  };
  
  Programmer.prototype.acceptNewTask = function () {
    this.busy = true;
  };
  
  Programmer.prototype.offerNewTask = function () {
    if (this.busy) {
      console.log(`${this.name} can't accept any new tasks right now.`);
    } else {
      console.log(`${this.name} would love to take on a new responsibility.`);
    }
  };
  
  Programmer.prototype.learnLanguage = function (newLanguage) {
    this.languages.push(newLanguage);
  };
  
  Programmer.prototype.listLanguages = function () {
    console.log(`${this.name} knows the following languages: ${this.languages.join(', ')}`);
  };
  
  

  
  const person1 = new Person("Harold", "Backend Engineer", 20);
  const c1 = new Programmer("Liana", "DevOps", 35, ["HTML", "C#", "LUA"]);
  const c2 = new Programmer("Edwin", "Janitor", 55, ["HTML", "SASS", "Ruby"]);
  const c3 = new Programmer("Manny", "SysOps", 31, ["HTML", "CSS", "JS", "R"]);
  
  c1.learnLanguage("CSS");
  c2.learnLanguage("C++");
  c3.learnLanguage("JAVA");
  
  console.log(c1.listLanguages());
  console.log(c2.listLanguages());
  console.log(c3.listLanguages());
  console.log(person1);
  console.log(c1);
  console.log(c2);
  console.log(c3);
  
  person1.exercise();
  person1.fetchJob();
  
  
  
  
  
  
  
