import LessonTemplate from "templates/lesson-template";
import Hotkey from "components/Hotkey";
import {
  Image,
  Relative,
  HorizontalCodeEditor,
  ImgIcon,
  StackItemContainer,
} from "components/lessons/reveal";
import backgroundHtml from "./images/html_background.png";
import markupDefinition from "./snippets/markup-definition.html";
import spaces from "./snippets/spaces.html";
import htmlStructure from "./snippets/structure.html";
import listExampleHtml from "./snippets/list-example.html";
import imgHtml from "./snippets/img.html";
import browsers from "./browsers.png";
import rip from "./rip.png";
import bug from "./bug.jpg";
import internet from "./usage/internet.jpg";
import silpo from "./usage/silpo.jpg";
import ibox from "./usage/ibox.webp";
import kfc from "./usage/kfc.jpg";
import metro from "./usage/metro.jpg";
import tag from "./images/tag.jpg";
import wikiCharset from "./images/wiki-charset.png";
import attributeImgUrl from "./images/attribute.png";
import liveReloadUrl from "./images/live-reload.png";
import { ReactComponent as VSCodeSvg } from "./images/vscode.svg";
import { ReactComponent as ChromeSvg } from "./images/chrome.svg";
import { HtmlLogo } from "components/common/Icons.jsx";

export default function FirstLesson() {
  return (
    <LessonTemplate>
      <section
        data-background={backgroundHtml}
        data-background-position="top left"
        data-background-opacity={0.1}
      >
        <h3>Урок 1. </h3>
        <h1>Героическое вступление в</h1>
        <HtmlLogo height="30vh" />
      </section>
      <section>
        <section>
          <div className="r-stack">
            <div>
              <h1>Кому нужен HTML?</h1>
              <h2 className="fragment">Всем*</h2>
              <h6 className="fragment">
                *Кто как-то связан с программированием
              </h6>
            </div>
            <StackItemContainer className="fragment fade-in-then-out">
              <img src={internet} />
            </StackItemContainer>
            <StackItemContainer className="fragment fade-in-then-out">
              <img src={silpo} />
            </StackItemContainer>
            <StackItemContainer className="fragment fade-in-then-out" >
              <img src={ibox} />
            </StackItemContainer>
            <StackItemContainer className="fragment fade-in-then-out">
              <img src={kfc} />
            </StackItemContainer>
            <StackItemContainer className="fragment fade-in-then-out">
              <img src={metro} />
            </StackItemContainer>
          </div>
        </section>
      </section>
      <section>
        <section>
          <h1>Основные понятия</h1>
        </section>
        <section>
          <b>Браузер</b> <i>(от англ. Browser - обозреватель)</i> - программа,
          через которую вы заходите в интернет.
          <Relative>
            <Image height="15vh" src={browsers} />
            <Image
              height="15vh"
              position="absolute"
              left="20px"
              src={rip}
              className="fragment"
              data-fragment-index={1}
            />
            <div
              className="fragment"
              data-fragment-index={2}
              style={{
                position: "absolute",
                width: "40%",
                border: "2px solid red",
                height: "100%",
                right: 0,
                top: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "black",
                fontSize: "3rem",
              }}
            >
              <span style={{ transform: "rotate(30deg)" }}>Еще живы 😭</span>
            </div>
          </Relative>
          <p>
            <span className="fragment fade-in-then-out" data-fragment-index={1}>
              Хорошие новости
            </span>
            <span className="fragment fade-in-then-out" data-fragment-index={2}>
              Плохие новости
            </span>
          </p>
        </section>
        <section>
          <p className="frament">
            <b>HTML</b>{" "}
            <i>
              (от англ. HyperText Markup Language — «язык гипертекстовой
              разметки»)
            </i>{" "}
            — стандартизированный язык разметки веб-страниц во Всемирной паутине
            (интернете).
          </p>
          <p className="fragment">© Wikipedia</p>
          <p className="fragment">
            <b>Ваши мысли в этот момент: </b>
            <i>
              Ну и, я и сам могу это в википедии прочитать, что это вообще
              значит, умник?
            </i>
          </p>
        </section>
        <section>
          <b>Гипертекст</b> <i>(англ. HyperText)</i> - текст, отличающийся от
          обычного тем, что содержит{" "}
          <a
            href="https://www.w3.org/WhatIs.html#:~:text=Hypertext%20is%20text%20which%20contains,to%20use%20this%20term%20too."
            target="_blank"
            rel="noreferrer"
          >
            гиперссылки
          </a>{" "}
          (далее просто ссылки), т.е можно из одного текста перейти в другой
          текст по ссылке.
        </section>
        <section>
          <HorizontalCodeEditor source={markupDefinition} />
        </section>
        <section>
          <b>Тег</b> <i>(англ. HTML Tag)</i> - единица языка HTML. Тегами
          обозначается структура HTML документа, определяется его служебная
          информация и контент.
        </section>
        <section data-background-image={tag} />
        <section data-background-image={bug}>
          <p
            style={{
              background: "rgba(0,0,0,0.6)",
              color: "white",
              padding: "20px",
              borderRadius: "10px",
            }}
            className="fragment fade-out"
          >
            <b>Баг</b> <i>(англ. software bug)</i> - ошибка допущенная в коде
            программы, повлекшая за собой неожиданный результат. Определенние
            появилось во времена, когда вычислительные машины занимали целые
            команаты. Баги возникают как и по вине разработчика так и в
            следствии ошибок в инструментах разработки.
          </p>
        </section>
      </section>
      <section>
        <section>
          <h1>Програмное обеспечение</h1>
        </section>
        <section>
          Google © заплатил мне кучу денег, так что мы будет использовать Google
          Chrome © в качестве браузера.
        </section>
        <section
          data-preload
          data-background-iframe="https://www.google.com/chrome/"
        />
        <section>
          <p>
            Чтобы писать код, нам нужна специальная программа - редактор кода.
          </p>
          <p>
            Использовать будем бесплатный{" "}
            <a href="https://code.visualstudio.com/" target="_blank">
              Visual Studio Code
            </a>{" "}
            (сокращенно VSCode).
          </p>
          <p className="fragment">
            К сожалению, Microsoft © мне не заплатили, так что отдельного слайда
            они не получат и скачать его можно по ссылке.
          </p>
        </section>
        <section>
          <p>Обе программы поддерживают плагины от сторонних разработчиков.</p>
          <p>
            Для мгновенного обновления страницы будем использовать Live Reload ©
            плагин для{" "}
            <a
              href="https://marketplace.visualstudio.com/items?itemName=ziishaned.livereload"
              target="_blank"
            >
              Visual Studio Code
            </a>{" "}
            © и{" "}
            <a
              href="https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=ru"
              target="_blank"
            >
              Google Chrome
            </a>{" "}
            ©.
          </p>
          <p>Для начала нужно просто их установить.</p>
        </section>
      </section>
      <section>
        <section>
          <h1>Начинаем работу с HTML</h1>
        </section>
        <section>
          <p>
            Если сильно упростить - то интернет это набор HTML файлов, которые
            лежат на специальных компьюетрах, называемыми серверами.
          </p>
          <p className="fragment">Давай-те же создадим вам первый HTML файл!</p>
        </section>
        <section>
          <table>
            <thead>
              <tr>
                <th>Действие</th>
                <th>🔥 Hotkey / Icon</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Создаем папку my-website</td>
                <td>
                  <Hotkey mac={["ctrl", "shift", "N"]} />
                </td>
              </tr>
              <tr>
                <td>Открываем VSCode</td>
                <td>
                  <ImgIcon as={VSCodeSvg} />
                </td>
              </tr>
              <tr>
                <td>Открываем папку в VSCode</td>
                <td>
                  <Hotkey mac={["ctrl", "O"]} />
                </td>
              </tr>
              <tr>
                <td>Создаем новый файл</td>
                <td>
                  <Hotkey mac={["ctrl", "N"]} />
                </td>
              </tr>
              <tr>
                <td>Сохраняем пустой файл</td>
                <td>
                  <Hotkey mac={["ctrl", "S"]} />
                </td>
              </tr>
              <tr>
                <td>Называем файл index.html</td>
                <td>
                  <Hotkey mac={["enter"]} />
                </td>
              </tr>
              <tr>
                <td>Немножко магии</td>
                <td>
                  <Hotkey mac={["!", "tab"]} />
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <section>
          <p>
            В интернете так принято, что первая страница, которая открывается
            пользователю называется <code>index.html</code>.
          </p>
          <p className="fragment">
            <a href="https://www.google.com/" target="_blank">
              google.com
            </a>{" "}
            =={" "}
            <a href="https://www.google.com/index.html" target="_blank">
              google.com.ua/index.html
            </a>
          </p>
        </section>
        <section>
          <p>
            Для удобной нужно запустить LiveReload плагин, который будет
            перезагружать страницу каждый раз, когда мы ее сохраняем.
          </p>
          <p>
            <ImgIcon as={VSCodeSvg} />: <Hotkey mac={["ctrl", "shift", "P"]} />{" "}
            -&gt; LiveReload: Enable/Disable server
          </p>
          <p style={{ display: "inline-flex" }}>
            <ImgIcon as={ChromeSvg} />: Нажать на кнопку{" "}
            <ImgIcon src={liveReloadUrl} /> в панеле разширений
          </p>
        </section>
      </section>
      <section>
        <section>
          <h1>Структура HTML</h1>
        </section>
        <section>
          <pre>
            <code dangerouslySetInnerHTML={{ __html: htmlStructure }} />
          </pre>
        </section>
        <section>
          <b>&lt;!DOCTYPE html&gt;</b> - говорит интерпретатору что далее в
          документе будет использован язык HTML версии 5.
        </section>
        <section>
          <p>
            <b>&lt;html lang=&quot;ru&quot; /&gt;</b> - тег, открывающий html
            документ. Является обязательным корневым тегом. Атрибут <b>lang</b>{" "}
            определяет язык документа и является обязательным.
          </p>
          <p className="fragment">
            Атрибут lang принимает значения в формате{" "}
            <a href="https://r12a.github.io/app-subtags/" target="_blank">
              BCP47
            </a>
            . Звучит страшно, но на деле это в основном "en", но если нужен
            какой-то другой язык его можно найти или проверить по ссылке.
          </p>
        </section>
        <section>
          <p>
            <b>&lt;head /&gt;</b> - тег, содержащий служебную информацию для
            браузера.
          </p>

          <ul className="fragment">
            <li>
              Элементы, которые могут использоваться внутри{" "}
              <code>&lt;head&gt;</code>:
              <ul style={{ columns: "2" }}>
                <li>
                  <a
                    href="/ru/docs/Web/HTML/Element/title"
                    title="HTML-элемент заголовка (<title>) определяет заголовок документа, который отображается в заголовке окна браузера или на вкладке страницы. Он содержит только текст, а теги внутри элемента игнорируются."
                  >
                    <code>&lt;title&gt;</code>
                  </a>
                </li>
                <li>
                  <a
                    href="/ru/docs/Web/HTML/Element/base"
                    title="HTML элемент&nbsp;<base>&nbsp;определяет&nbsp;основной адрес (URL), используемый для всех относительных адресов (URLs) в документе. Может быть только один&nbsp;<base>&nbsp;элемент в одном документе.&nbsp;
 Основной адрес (URL) документа можно запросить скриптом используя&nbsp;document.baseURI."
                  >
                    <code>&lt;base&gt;</code>
                  </a>
                </li>
                <li>
                  <a
                    className="new"
                    href="/ru/docs/Web/HTML/Element/link"
                    rel="nofollow"
                    title="Документация об этом ещё не написана; пожалуйста, поспособствуйте её написанию!"
                  >
                    <code>&lt;link&gt;</code>
                  </a>
                </li>
                <li>
                  <a
                    href="/ru/docs/Web/HTML/Element/style"
                    title="HTML-элемент <style> содержит стилевую информацию для документа или его части. По умолчанию стилевые инструкции внутри этого элемента считаются написанными на CSS."
                  >
                    <code>&lt;style&gt;</code>
                  </a>
                </li>
                <li>
                  <a
                    href="/ru/docs/Web/HTML/Element/meta"
                    title="HTML элемент <meta> представляет такие метаданные, которые не могут быть представлены другими HTML-метатегами, такими как <base>, <link>, <script>, <style> или <title>."
                  >
                    <code>&lt;meta&gt;</code>
                  </a>
                </li>
                <li>
                  <a
                    href="/ru/docs/Web/HTML/Element/script"
                    title="HTML Элемент&nbsp;<script> "
                  >
                    <code>&lt;script&gt;</code>
                  </a>
                </li>
                <li>
                  <a
                    href="/ru/docs/Web/HTML/Element/noscript"
                    title="Элемент&nbsp;HTML <noscript>&nbsp;определяет секцию html кода, которая будет вставлена, если в&nbsp;браузере пользователя нет либо отключена поддержка&nbsp;JavaScript'а."
                  >
                    <code>&lt;noscript&gt;</code>
                  </a>
                </li>
                <li>
                  <a
                    href="/ru/docs/Web/HTML/Element/template"
                    title="HTML элемент контент шаблона  <template> - это механизм для отложенного создания клиентского контента, который не отображается во время загрузки, но может быть инициализирован при помощи JavaScript."
                  >
                    <code>&lt;template&gt;</code>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </section>
        <section>
          <p>
            <b>&lt;meta /&gt;</b> - тег, описывающий метаданные.{" "}
            <a
              href="https://developer.mozilla.org/ru/docs/%D0%A1%D0%BB%D0%BE%D0%B2%D0%B0%D1%80%D1%8C/%D0%9C%D0%B5%D1%82%D0%B0%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5"
              target="_blank"
            >
              Метаданные
            </a>{" "}
            - это данные, что описывают другие данные. Мета теги очень сильно
            зависят от атрибутов, которые в них объявленны.
          </p>
          <p>
            Работа с мета-тегами чаще всего относится к другой IT отрасли,
            которая называется <b>&quot;Поисковая Оптимизация&quot;</b>{" "}
            <i>(англ. Search Engine Optimization или просто SEO)</i>.
          </p>
        </section>
        <section>
          <img
            src={wikiCharset}
            style={{ minWidth: "998px", minHeight: "635px" }}
          />
        </section>
        <section>
          <p>
            <b>&lt;meta charset=&quot;UTF-8&quot; /&gt;</b> - тег задающий
            кодировку.
          </p>
          <p>
            Кракозябры в 99.9% случаев свидетельствуют о проблемах с кодировкой.
          </p>
          <p>
            Если кракозябры в браузере - значит был некорректно указан метатег с
            атрибутом charset.
          </p>
          <p>
            Если кракозябры в файле - то или файл был сохранен с неверной
            кодировкой или читается с неверной кодировкой.
          </p>
        </section>
        <section>
          <b>
            &lt;meta name="viewport" content="width=device-width,
            initial-scale=1.0"&gt;
          </b>{" "}
          - метатег, отвечающий за корректное отображение на мобильных
          телефонах. Фактически он говорит, что ширина области отображения
          (viewport) должна равняться ширине девайса, а изначальный масштаб
          (inital scale) не будет изменен (не отдален и не приближен, а равен 1)
        </section>
        <section>
          <b>&lt;body /&gt; </b> - тег тела документа. Содержит визуальную часть
          HTML документа. На странице может быть только один &lt;body /&gt; тег.
        </section>
      </section>
      <section>
        <section>
          <h1>Текст в HTML</h1>
        </section>
        <section>
          <HorizontalCodeEditor source={spaces} />
        </section>
        <section>
          <p>Самые умные из вас уже наверное подумали:</p>
          <p className="fragment">
            <i>- А что будет, если я захочу написать два пробела, йопта?</i>
          </p>
          <p className="fragment">
            Ответ: у специальных символов есть свои{" "}
            <a
              href="https://www.freeformatter.com/html-entities.html"
              target="_blank"
            >
              HTML спецсимволы
            </a>
          </p>
        </section>
        <section>
          <table>
            <thead style={{ verticalAlign: "top" }}>
              <tr>
                <th>символ</th>
                <th>код c буквами</th>
                <th>код с цифрами</th>
                <th>описание</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>&nbsp;</td>
                <td>&amp;nbsp;</td>
                <td>&amp;#160;</td>
                <td>
                  <a
                    href="https://ru.wikipedia.org/wiki/%D0%9D%D0%B5%D1%80%D0%B0%D0%B7%D1%80%D1%8B%D0%B2%D0%BD%D1%8B%D0%B9_%D0%BF%D1%80%D0%BE%D0%B1%D0%B5%D0%BB"
                    target="_blank"
                  >
                    Неразрывный пробел
                  </a>
                </td>
              </tr>
              <tr>
                <td>&#32;</td>
                <td>нету 😔</td>
                <td>&amp;#32;</td>
                <td>Пробел</td>
              </tr>
              <tr>
                <td>&amp;</td>
                <td>&amp;amp;</td>
                <td>&amp;#38;</td>
                <td>Амперсант</td>
              </tr>
              <tr>
                <td>&lt;</td>
                <td>&amp;lt;</td>
                <td>&amp;#60;</td>
                <td>
                  Меньше <i>(less then)</i>
                </td>
              </tr>
              <tr>
                <td>&gt;</td>
                <td>&amp;gt;</td>
                <td>&amp;#62;</td>
                <td>
                  Меньше <i>(greater then)</i>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <section>
          <p>
            Отступы осуществляются с помощью тега &lt;p&gt;&lt;/p&gt;, который
            назван в честь слова &quot;параграф&quot;
          </p>
          <p>
            Спецификация HTML запрещает вкладывать тег &lt;p /&gt; в другой тег
            &lt;p/&gt;, поэтому отступы внутри &lt;p /&gt; осуществляются с
            помощью тега &lt;br /&gt;.
          </p>
        </section>
        <section>
          <p>
            <b>Вложеность</b> <i>(англ. nesting)</i> - свойство тегов содержать
            в себе другие теги.
          </p>
          <p>
            Самое важно правило вложенности - первым закрывается самый последний
            открытый тег.
          </p>
          <pre>
            <code data-line-numbers="1|2">{listExampleHtml}</code>
          </pre>
        </section>
        <section>
          <p>
            <b>Атрибуты тега</b> <i>(англ. tag attribute)</i> - дополнительные
            опции тега.
          </p>
          <img className="r-stretch" src={attributeImgUrl} />
          <p>
            Атрибут <b>href</b> <i>(англ. Hyper REFerence)</i> задает адрес
            документа ссылки.
          </p>
        </section>
        <section>
          <div style={{ height: "80vh" }}>
            <HorizontalCodeEditor source={imgHtml} />
          </div>
        </section>
        <section>
          <ul>
            <li>
              Чтобы ссылка открылась в новом окне, необходимо указать атрибут{" "}
              <b>target</b> со значением <b>"_blank"</b>.
            </li>
            <li>
              <b>href</b> заёдается в формате{" "}
              <a
                href="https://developer.mozilla.org/ru/docs/Learn/Understanding_URLs"
                target="_blank"
              >
                URL
              </a>
              . Адрес <b>hipstacoding.school</b> будет открываться относительно
              текущей страницы. Правильно будет указать:
            </li>
          </ul>
          <pre>
            <code>
              https://hipstacoding.school &lt;!-- или --&gt;
              //hipstacoding.school
            </code>
          </pre>
        </section>
      </section>
    </LessonTemplate>
  );
}
