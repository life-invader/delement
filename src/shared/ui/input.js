export const input = ({
  type = "text",
  id = "",
  name = "",
  disabled = false,
  readOnly = false,
  placeholder = "",
  classnames = [],
}) => {
  const inputClassnames = classnames.join(" ");
  
  return `
    <input
      class="input ${inputClassnames}"
      type=${type}
      ${id ? `id=${id}` : ""}
      ${name ? `name=${name}` : ""}
      ${disabled ? "disabled=true" : ""}
      ${readOnly ? "readOnly=true" : ""}
      ${placeholder ? `placeholder="${placeholder}"` : ""}
      />
      `;
};
