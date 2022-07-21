function change() {
  var modelCbs = document.querySelectorAll('.product input[type="checkbox"]');
  console.log(modelCbs);
  var processorCbs = document.querySelectorAll('.color input[type="checkbox"]');
  console.log(processorCbs);

  var filters = {
    products: getClassOfCheckedCheckboxes(modelCbs),
    colors: getClassOfCheckedCheckboxes(processorCbs),
  };

  filterResults(filters);
}

function getClassOfCheckedCheckboxes(checkboxes) {
  var classes = [];

  if (checkboxes && checkboxes.length > 0) {
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        classes.push(checkboxes[i].getAttribute("rel"));
      }
    }
  }

  return classes;
}

function filterResults(filters) {
  console.log(filters);
  var rElems = document.querySelectorAll(".result div");
  console.log(rElems);

  var hiddenElems = [];

  for (var i = 0; i < rElems.length; i++) {
    var el = rElems[i];

    if (filters.products.length > 0) {
      var isHidden = true;

      for (var j = 0; j < filters.products.length; j++) {
        var filter = filters.products[j]; //

        if (el.classList.contains(filter)) {
          isHidden = false;
          break;
        }
      }

      if (isHidden) {
        hiddenElems.push(el);
      }
    }

    if (filters.colors.length > 0) {
      var isHidden = true;

      for (var j = 0; j < filters.colors.length; j++) {
        var filter = filters.colors[j]; //

        if (el.classList.contains(filter)) {
          isHidden = false;
          break;
        }
      }

      if (isHidden) {
        hiddenElems.push(el);
      }
    }
  }

  for (var i = 0; i < rElems.length; i++) {
    rElems[i].style.cssText =
      "opacity:1;transform:scale(1);transition:.6s ease all;";
  }

  for (var i = 0; i < hiddenElems.length; i++) {
    hiddenElems[i].style.cssText =
      "opacity:0;transform:scale(0);transition:.6s ease all;visibility:hidden;width:0;height:0;margin:0;padding:0";
  }
}
