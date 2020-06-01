$.getScript('https://rawgit.com/gka/d3-jetpack/master/build/d3v4%2Bjetpack.js')

var month = '1-1-2017';

function step() {
    d3.selectAll('path.area').style('opacity', d => d.id == month ? 0.85: 0);
    if (month++ <= 2060) setTimeout(step, 100);
}

setTimeout(() => {
    d3.selectAll('path.area').style('opacity',0);
    setTimeout(step, 2000);
}, 3000);
