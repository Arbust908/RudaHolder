/**
 * 
 * @param {*} selecThor 
 * @param {*} small 
 * @param {*} big 
 * @param {*} breakpoint 
 * @param {*} debug 
 */
function svgBoxResize(selecThor, small = null, big = null, breakpoint = 768, debug = false)
{
  const DEBUG = debug;
  let ele = selecThor;
  console.log(DEBUG ? ele : '');
  let vBox = ele.dataset.vbox;
  console.log(DEBUG ? vBox : '');
  vBox = vBox.split(' ');
  DEBUG ? console.log(vBox) : '';
  small =  small == null ? vBox[3] : small;
  big   =  big == null ? vBox[3] : big;
  if (window.innerWidth < breakpoint) {
    vBox[3] = small;
    DEBUG ? console.log('small '+ vBox[3]) : '';
  } else {
    vBox[3] = big;
    DEBUG ? console.log('big '+ vBox[3]) : '';
  }
  ele.setAttribute('viewBox', vBox.join(' ') );
  DEBUG ? console.log(ele.getAttribute('viewBox')) : '';
}