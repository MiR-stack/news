/**
 *
 * @param {String} tag
 * @param {Object} attr
 * @param {Array} children
 */

function container(tag, attr, children) {
  const el = document.createElement(tag);

  for (key in attr) {
    el.setAttribute(key, attr[key]);
  }

  children.forEach((child) => el.appendChild(child));

  return el;
}

/**
 *
 * @param {String} tag
 * @param {Object} attr
 * @param {String} value
 */

function element(tag, attr, value = null) {
  const el = document.createElement(tag);

  for (key in attr) {
    el.setAttribute(key, attr[key]);
  }
  el.innerText = value;

  return el;
}

/**
 *
 * @param {String} btnName
 * @param {Array} inputs
 */
function subImage(btnName, inputs) {
  const btn = document.querySelector(btnName);
  const n = inputs.length / 12;
  btn.addEventListener("click", () => {
    const subImg = container("div", { class: "my-2" }, [
      element("label", { class: "form-label" }, "sub image:"),
      element("input", { type: "file", class: "form-control", required: null }),
      container(
        "div",
        { class: "row g-2 my-2" },
        inputs.map((obj) => {
          container("div", { class: `col-sm-${n}` }, [
            element("input", {
              type: "text",
              class: "form-control ",
              required: null,
              ...obj,
            }),
          ]);
        })
        // container("div", { class: "col-sm-6" }, [
        //   element("input", {
        //     type: "text",
        //     placeholder: "Source",
        //     id: `is${p}`,
        //     name: `is_${p}`,
        //     class: "form-control ",
        //     required: null,
        //   }),
        // ]),
        // container("div", { class: "col-sm-6" }, [
        //   element("input", {
        //     type: "text",
        //     placeholder: "short deccription",
        //     id: `isd${p}`,
        //     name: `isd_${p}`,
        //     class: "form-control ",
        //     required: null,
        //   }),
        // ]),
      ),
    ]);
    document.querySelector(".inputs").appendChild(subImg);
  });
}

subImage(".addI", [
  { name: "is", placeholder: "source" },
  { name: "is", placeholder: "deccription" },
]);
