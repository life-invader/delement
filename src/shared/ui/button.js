export const button = ({ type = "button", content = "", classnames = [] }) => {
  const buttonClassnames = classnames.join(" ");
  return `<button class="button ${buttonClassnames}" type=${type}>${content}</button>`;
};
