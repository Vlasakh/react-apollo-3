async function getButton(label, { contains = false } = {}) {
  const locator = contains ? `//div[button[contains(., '${label}')]]/button` : `button*=${label}`;

  return await $(locator);
}

module.exports = {
  getButton,
};
