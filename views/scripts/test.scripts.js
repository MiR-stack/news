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

function element(tag, attr, value) {
  const el = document.createElement(tag);

  for (key in attr) {
    el.setAttribute(key, attr[key]);
  }
  el.innerText = value;

  return el;
}


module.exports = {container,element}