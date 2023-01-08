document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const textArea = document.querySelector('textarea');
const button = document.querySelector('button');


// each text will convert to camelCase 
// -1. convert all text into lowerCase first
// -2. delete all white space 
// -3. converse the second words into UpperCase then assemble them without space (camelCase) 
// -4. print each text increment with a nice check mark ✅ at the end of the string incremented


button.addEventListener('click', (e) => {
  const texts = textArea.value.split('\n');
  // loop through an array of texts then print into console
  texts.forEach((text, i) => {
    // Remove whitespace 
    // const textLower = text.toLowerCase().trim();
    const textLower = text.toLowerCase().replace(/\s/g, '');

    // Converting string
    const camelCaseStr = textLower.replace(/_[a-z]/g, (match) => {
      return match[1].toUpperCase();
    })

    // Print string
    const nicePrintStr = `${camelCaseStr.padEnd(20)}${'✅'.repeat(i + 1)}`
    console.log(nicePrintStr);
  })
});

