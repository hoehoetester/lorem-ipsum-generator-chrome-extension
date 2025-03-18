document.getElementById('generate').addEventListener('click', function () {
  const loremText =
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis qui totam praesentium tempora non voluptatum explicabo illum repudiandae assumenda natus possimus illo aliquid reiciendis iusto, quae dolore beatae fugit alias?';

  // Split the loremText into words and normalize it by trimming and splitting by spaces
  const loremWords = loremText.trim().split(/\s+/);

  const count = parseInt(document.getElementById('count').value, 10);
  const mode = document.getElementById('mode').value;
  let output = '';

  if (mode === 'words') {
    // Slice the loremWords array to match the count
    output = loremWords.slice(0, count).join(' '); // Join the words with spaces
    output = output.charAt(0).toUpperCase() + output.slice(1); // Capitalize the first letter
  } else if (mode === 'letters') {
    // Join words into a single string (with spaces)
    let fullText = loremWords.join(' ');

    // Slice the string up to the 'count' value
    output = fullText.slice(0, count);
  }

  document.getElementById('output').textContent = output;
});

// Copy the output text to the clipboard using Clipboard API
document.getElementById('copy-button').addEventListener('click', function () {
  // Get the selected text, if any
  const selectedText = window.getSelection().toString();

  // If no text is selected, copy all text from #output
  const outputText =
    selectedText || document.getElementById('output').textContent;

  // Use the Clipboard API to copy the text
  navigator.clipboard
    .writeText(outputText)
    .then(() => {
      // Get the copy button
      const copyButton = document.getElementById('copy-button');

      // Add the 'copied-active' class to show "Copied"
      copyButton.classList.add('copied-active');

      // Reset the state after 1.5 seconds
      setTimeout(() => {
        copyButton.classList.remove('copied-active');
      }, 1500);
    })
    .catch((err) => {
      alert('Failed to copy text: ' + err);
    });
});
