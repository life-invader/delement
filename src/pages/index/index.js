import { getMeta, getPage } from "../../shared/lib";
import { Footer } from "../../widgets/footer/ui";
import { Header } from "../../widgets/header/ui";
import { Slider } from "../../widgets/slider/ui";

export default () => {
  return getPage({
    title: "Главная",
    meta: [ getMeta({ name: "description", content: "This is index page" }) ],
    body: ` 
    ${Header({})}
    <main class="main">
      <div class="container">
        <h1 class="title main__title">Главная</h1>
        ${Slider({  })}
        
        <section class="company">
          <div class="company__about">
            <h2 class="company__title">О нас</h2>
            <ul class="company__benefits">
              <li>
                <h3 class="company__subtitle">> 100 сотрудников</h3>
                <p class="company__text">Аттестованных middle и senior разработчиков со всеми необходимыми компетенциями для создания качественных продуктов, которые занимают призовые места на всероссийских и международных конкурсах.</p>
              </li>

              <li>
                <h3 class="company__subtitle">Своя диджитал академия</h3>
                <p class="company__text">Курсы по основам управления проектами, веб-разработки, программированию. Много практики, основанной на проектах нашей компании, познавательные лекции и море интерактива.</p>
              </li>
            </ul>
          </div>

          <div class="company__course">
            <h2 class="company__title">Как пройти курс</h2>
            <div class="company__course-wrapper">
              <div>
                <p class="company__course-text">Записывайтесь и получайте новые знания! Делайте репост и отправляйте друзьям, которым эта новость будет полезна.</p>
                <p class="company__course-text-bottom company__subtitle">Ждем вас на наших курсах!</p>
              </div>

              <img class="company__course-qr" src="images/qr.png" />
            </div>
          </div>
        </section>
      </div>
    </main>
    ${Footer()}
    `,
  });
};
