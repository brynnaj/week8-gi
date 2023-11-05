function exerciseOfTheDay() {
    let exercise = '';
  
    function setExercise(name) {
      exercise = name;
      console.log(`Today's exercise: ${exercise}`);
    }
  
    return setExercise;
  }
  
  const printExercise = exerciseOfTheDay();
  printExercise('running');
  printExercise('swimming');
  printExercise('dancing');
  printExercise('fencing');