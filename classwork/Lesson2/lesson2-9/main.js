let color = prompt('Please enter  color.');

switch(color){
    case 'green':
        console.log('Go!');
        break;
    case 'yellow':
        console.log('wait');
        break;
    case 'red':
        console.log('Stop!');
        break;
    default:
        console.log('error');
}
