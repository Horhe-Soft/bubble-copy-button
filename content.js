var bubbleButton;

document.addEventListener("mouseup", async function(event) {
  // Get the selected text
  var selectedText = window.getSelection().toString();

  // If there is selected text
  if (selectedText) {
    // Remove the button if it already exists
    if (bubbleButton) {
      bubbleButton.remove();
    }

    // Get the position of the selected text
    var range = window.getSelection().getRangeAt(0);
    var rect = range.getBoundingClientRect();

    // Create a bubble button
    bubbleButton = document.createElement("button");
    bubbleButton.style.backgroundImage = "url('https://media.discordapp.net/attachments/856781399617306658/1071036244047450142/image.png')";
    bubbleButton.style.backgroundSize = "cover";
    bubbleButton.style.width = "29px";
    bubbleButton.style.height = "28px";
    bubbleButton.style.backgroundColor = "transparent";
    bubbleButton.style.borderColor = "transparent";
    bubbleButton.style.borderRadius = "10%";
    bubbleButton.style.position = "fixed";
    bubbleButton.style.zIndex = "999";
    bubbleButton.style.left = rect.right + window.scrollX + 5 + "px";
    bubbleButton.style.top = rect.bottom + window.scrollY + 5 + "px";

    // Add the button to the page
    document.body.appendChild(bubbleButton);

    // Copy the selected text to the clipboard and clear the selection when the button is pressed
    bubbleButton.addEventListener("mousedown", async function() {
      await navigator.clipboard.writeText(selectedText);
      window.getSelection().removeAllRanges();
      bubbleButton.remove();
    });

    // Remove the button if it's not pressed
    document.addEventListener("mousedown", function(event) {
      if (event.target !== bubbleButton) {
        bubbleButton.remove();
      }
    });
  } else {
    // Remove the button if no text is selected
    if (bubbleButton) {
      bubbleButton.remove();
    }
  }
});