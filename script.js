//your JS code here. If required.
function removeColor() {
      const select = document.getElementById("colorSelect");
      const selectedOption = select.value;
      const optionIndex = select.selectedIndex;
      select.remove(optionIndex);
    }
