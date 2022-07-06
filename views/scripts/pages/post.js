let p = 2;

// adding multiple attributes in element
function setAttributes(el, attrs) {
  for (var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}

// create delete button
const Delete = document.createElement("i");
const form = document.querySelector(".needs-validation");

setAttributes(Delete, {
  class: `btn btn-dark fa-solid fa-trash-can delete`,
  style: "cursor:pointer",
});

// select parent element
const parent = document.querySelector(".inputs");

//select buttons
const addp = document.querySelector(".addp");
const addH=document.querySelector('.addH')
const icons = document.querySelector(".icons");
const image = document.querySelector(".addI");
const quote = document.querySelector(".addQ");
const strong = document.querySelector(".addS");

// create html element

function element(
  btn,
  parentEl,
  inputType,
  innerHTML,
  name,
  style,
  type,
  classList = "form-control"
) {
  btn.addEventListener("click", () => {
    const main = document.createElement(parentEl);
    main.classList.add("my-3");
    const label = document.createElement("label");
    label.innerHTML = innerHTML;
    label.classList.add("form-label");
    const input = document.createElement(inputType);

    setAttributes(input, {
      id: name + p,
      name:`${name}_${p}`,
      class: classList,
      style: style,
      type:type,
      minlength:'100',
      required:''
    });

    main.append(label);
    main.append(input);
    Delete.setAttribute("onclick", `deleteP()`);
    icons.append(Delete);

    parent.append(main);
    p += 1;
  });
}

// create new pera

element(addp, "div", "textarea", "pera :", "p", "height:150px");

// create header
element(addH,'div','input','heding','h','','text')

// create sub image input

image.addEventListener("click", () => {
  const img = document.createElement("div");
  const div = document.createElement("div");

  const label = document.createElement("label");
  label.innerHTML = `sub image :`;
  label.classList.add("form-label");
  const imageInput = document.createElement("input");
  const imagediv1 = document.createElement("div");
  const imagediv2 = document.createElement("div");
  const source = document.createElement("input");
  const shortDec = document.createElement("input");

  // div attributes
  img.setAttribute("class", "my-2 row g-2");

  div.setAttribute("class", "col-12");

  imagediv1.setAttribute("class", "col-sm-6");
  imagediv2.setAttribute("class", "col-sm-6");

  // image input attributes
  setAttributes(imageInput, {
    type: "file",
    id: `i${p}`,
    name: `i_${p}`,
    class: "form-control",
  });

  // image source input attributes
  setAttributes(source, {
    type: "text",
    placeholder: "Source",
    id: `is${p}`,
    name: `is_${p}`,
    class: "form-control ",
  });

  // short deccription attributes

  setAttributes(shortDec, {
    type: "text",
    placeholder: "short deccription",
    id: `isd${p}`,
    name: `isd_${p}`,
    class: "form-control ",
  });

  div.append(label);
  div.append(imageInput);
  img.append(div);
  imagediv1.append(source);
  imagediv2.append(shortDec);
  img.append(imagediv1);
  img.append(imagediv2);
  Delete.setAttribute("onclick", `deleteP()`);
  icons.append(Delete);

  parent.append(img);
  p += 1;
});

// add quote

element(quote, "div", "textarea", "quote :", "q", "height:80px");

// add highlighted text

element(strong, "div", "textarea", "highlighted text :", "s", "height:80px");

// delete last paragraph

function deleteP() {
  if (p < 4) {
    parent.lastChild.remove();
    p -= 1;
    return document.querySelector(`.delete`).remove();
  }
  parent.lastChild.remove();
  p -= 1;
}

// changing formate
const formate = document.querySelector("#formate");

function Formate() {
  const text = document.querySelector(".text");
  const html = document.querySelector(".html");

  if (formate.value === "html") {
    text.classList.add("d-none");
    return html.classList.remove("d-none");
  }
  text.classList.remove("d-none");
  html.classList.add("d-none");
}


// creating subimage for html

let h = 2;

// create sub image input
const addImg = document.querySelector(".addImg");
const mainH = document.querySelector(".mainH");
const html = document.querySelector(".html");

addImg.addEventListener("click", () => {
  const img = document.createElement("div");
  const div = document.createElement("div");

  const label = document.createElement("label");
  label.innerHTML = `sub image :`;
  label.classList.add("form-label");
  const imageInput = document.createElement("input");
  const imagediv1 = document.createElement("div");
  const imagediv2 = document.createElement("div");
  const imagediv3 = document.createElement("div");
  const source = document.createElement("input");
  const shortDec = document.createElement("input");
  const peraNo = document.createElement("input");

  // div attributes
  img.setAttribute("class", "my-2 row g-2");

  div.setAttribute("class", "col-12");

  imagediv1.setAttribute("class", "col-sm-5");
  imagediv2.setAttribute("class", "col-sm-5");
  imagediv3.setAttribute("class", "col-sm-2");

  // image input attributes
  setAttributes(imageInput, {
    type: "file",
    id: `i${h}`,
    name: `i_${h}`,
    class: "form-control",
  });

  // image source input attributes
  setAttributes(source, {
    type: "text",
    placeholder: "Source",
    id: `is${h}`,
    name: `is_${h}`,
    class: "form-control ",
  });

  // short deccription attributes

  setAttributes(shortDec, {
    type: "text",
    placeholder: "short deccription",
    id: `isd${h}`,
    name: `isd_${h}`,
    class: "form-control ",
  });

  // para no attrubute
  setAttributes(peraNo, {
    type: "text",
    placeholder: "para no",
    id: ` pno${h}`,
    name: `pno_${h}`,
    class: "form-control ",
  });

  div.append(label);
  div.append(imageInput);
  img.append(div);
  imagediv1.append(source);
  imagediv2.append(shortDec);
  imagediv3.append(peraNo);
  img.append(imagediv1);
  img.append(imagediv2);
  img.append(imagediv3);
  Delete.setAttribute("onclick", `deleteImg()`);
  html.append(Delete);

  mainH.append(img);
  h += 1;
});

// delete img
function deleteImg() {
  if (h < 4) {
    mainH.lastChild.remove();
    h -= 1;
    return document.querySelector(`.delete`).remove();
  }
  mainH.lastChild.remove();
  h -= 1;
}

// tag input
(function () {
  $("input")
    .on("change", function (event) {
      var $element = $(event.target);
      var $container = $element.closest(".example");

      if (!$element.data("tagsinput")) return;

      var val = $element.val();
      if (val === null) val = "null";
      var items = $element.tagsinput("items");

      $("code", $("pre.val", $container)).html(
        $.isArray(val)
          ? JSON.stringify(val)
          : '"' + val.replace('"', '\\"') + '"'
      );
      $("code", $("pre.items", $container)).html(
        JSON.stringify($element.tagsinput("items"))
      );
    })
    .trigger("change");
});
