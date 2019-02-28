// import _ from 'lodash';
import { cube } from './math.js';
import printMe from './print.js';
import './style.css';
import Icon from './icon.svg';
import Data from './data.xml';

if(process.env.NODE_ENV !== 'production'){
    console.log('Looks like we are in development mode!');
}

function component(){
    // var element = document.createElement('div');
    var element = document.createElement('pre');
    var btn = document.createElement('button');

    // element.innerHTML = _.join(['Hello', 'webpack', '你好，中国！'], ' ');
    element.innerHTML = [
        'Hello webpack!',
        '5 cubed is equal to ' + cube(5)
    ].join('\n\n');
    element.classList.add('hello');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);

    var myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    console.log(Data);

    return element;
}

document.body.appendChild(component());

if(module.hot){
    module.hot.accept('./print.js', function(){
        console.log('Accepting the updated printMe module!');
        printMe();
    })
}