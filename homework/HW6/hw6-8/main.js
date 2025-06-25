const coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

const updateCouses = coursesAndDurationArray
    .sort((a, b) => b.monthDuration - a.monthDuration)
    .filter(value => value.monthDuration >5)
    .map((value, index) => ({id: index + 1, ...value}));
console.log(updateCouses);
