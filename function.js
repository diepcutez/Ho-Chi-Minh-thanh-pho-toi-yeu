function openPage(pageName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
  
    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";
  
    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();

// Print Dialog Functions
function showPrintDialog() {
    document.getElementById('printDialog').style.display = 'block';
}

function closePrintDialog() {
    document.getElementById('printDialog').style.display = 'none';
}

function printMap() {
    // Get print options
    const printer = document.getElementById('printerSelect').value;
    const pages = document.getElementById('pageSelect').value;
    const color = document.getElementById('colorSelect').value;

    // Close the dialog
    closePrintDialog();

    // Get the printer instance
    const printerControl = document.querySelector('.leaflet-control-easyPrint a');
    if (printerControl) {
        printerControl.click();
    }
}