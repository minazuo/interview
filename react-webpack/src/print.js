async  function printMe() {
    const { default: _ } = await import('lodash');
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'print'], ' ');
    return element;
}
export default printMe;