let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

for (const course of coursesArray) {
    let divCourse = document.createElement('div');

    let courseTitle = document.createElement('div');
    courseTitle.innerText = course.title;

    let container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = '20px';

    let mDuration = document.createElement('div');
    mDuration.innerText = course.monthDuration;

    let hDuration = document.createElement('div');
    hDuration.innerText = course.hourDuration;

    let listModules = document.createElement('ul');

        for (const module of course.modules) {
            let moduleItem = document.createElement('li');
            moduleItem.innerText = module;

            listModules.appendChild(moduleItem);
        }

    container.append(mDuration, hDuration);
    divCourse.append(courseTitle, container, listModules);
    document.body.appendChild(divCourse);
}
