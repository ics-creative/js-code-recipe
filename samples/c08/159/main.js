const information = document.querySelector('#information');

// colorプロパティーの変更
information.style.color = 'white';
// font-sizeプロパティーの変更
information.style.fontSize = '70px';
// font-weightプロパティーの変更
information.style.fontWeight = '600';

const strokeColor = '#c52b84';
// -webkit-text-strokeプロパティーの変更
information.style.webkitTextStroke = `2px ${strokeColor}`;
// text-strokeプロパティーの変更
information.style.textStroke = `2px ${strokeColor}`;
// text-shadowプロパティーの変更
information.style.textShadow = `7px 7px 0 #bf3384`;
