import { commonComponentProps, createNodeFromString } from "../lib/index";

export const Modal = (props) => {
  const { baseClass = "modal", getCN, message } = { ...commonComponentProps, ...props };
  const getClassName = (elem, mod) => getCN(baseClass, elem, mod);

  const node = createNodeFromString(
    `
    <div class="${getClassName()}">
      <div class="${getClassName("wrapper")}">
        <p class="${getClassName("text")}">${message}</p>
        <button class="${getClassName("button")}" type="button">Закрыть</button>
      </div>   
    </div>
    `,
  );

  return node;
};
