export const getPage = ({ body = "", title = "", meta = [] }) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      ${meta.map((item) => item())}
      <title>${title}</title>
    </head>
    <body>
      ${body}
    </body>
  </html>
  `;
};

export const getMeta = ({ name, content }) => {
  return () => `<meta name="${name}" content="${content}">`;
};
