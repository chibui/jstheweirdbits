// 42. Automatic semicolon

function getPerson() {

  return  { // if { is on a new line syntax parser will add a ; automatically
            firstName: 'Tony'
          }

 }
 
 console.log(getPerson()); 