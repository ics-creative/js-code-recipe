const targetString = 'JavaScriptを覚えよう';

document.querySelector('.result1').innerHTML = targetString.includes('JavaScript');
document.querySelector('.result2').innerHTML = targetString.includes('覚えよう');
document.querySelector('.result3').innerHTML = targetString.includes('覚えよう', 12);
document.querySelector('.result4').innerHTML = targetString.includes('HTML');
document.querySelector('.result5').innerHTML = targetString.startsWith('覚えよう');
document.querySelector('.result6').innerHTML = targetString.endsWith('覚えよう');
