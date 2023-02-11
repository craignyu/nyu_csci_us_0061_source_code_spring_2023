// let's get an array of all elements that are a member of the
// 'yellowBackground' class
const allYellowDivs = document.getElementsByClassName('yellowBackground');

// if we print this out we will see an array of nodes
console.log(allYellowDivs);

// we can iterate over this array using a standard 'for' loop
for (let i = 0; i < allYellowDivs.length; i++) {
  // we can access each element using indexing
  console.log( allYellowDivs[i] );

  // we can then update each element using standard DOM manipulation techniques
  allYellowDivs[ i ].style['font-family'] = 'monospace';
}


// we an also get access to a collection of elements based on their tag names
let allDivs = document.getElementsByTagName('div');
console.log(allDivs);

// we can then iterate over this collection and make changes accordingly
for (i = 0; i < allDivs.length; i++) {
  allDivs[ i ].style['border-radius'] = '10px';
}



// we can also use contextual selectors to obtain a collection of elements
let allSubListItems = document.querySelectorAll('ul li ul li');
for (i = 0; i < allSubListItems.length; i++) {
  allSubListItems[ i ].classList.add('yellowBackground');
  allSubListItems[ i ].classList.add('thinBorder');
}
