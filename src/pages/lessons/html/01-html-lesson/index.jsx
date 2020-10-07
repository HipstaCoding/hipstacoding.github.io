import React from "react";
import LessonTemplate from "templates/lesson-template";
import htmlLogo from "./html-logo.png";
import Editor from "components/editor";
import Hotkey from "components/Hotkey";
import { Image, Relative } from "components/Reveal";

import markupDefinition from "./snippets/markup-definition.html";
import spaces from "./snippets/spaces.html";
import tagHtml from "./snippets/tag.html";
import htmlStructure from "./snippets/structure.html";

import browsers from "./browsers.png";
import rip from "./rip.png";
import bug from "./bug.jpg";
import internet from "./usage/internet.jpg";
import silpo from "./usage/silpo.jpg";
import ibox from "./usage/ibox.webp";
import kfc from "./usage/kfc.jpg";
import metro from "./usage/metro.jpg";
import htmlCap from "./usage/html-cap.jpg";
import tag from "./images/tag.jpg";
import doomers from "./images/doomers.jpg";
import boomer from "./images/boomer.jpg";
import wikiCharset from "./images/wiki-charset.png";
import { ReactComponent as VSCode } from "./images/vscode.svg";

const ParagraphWithSourse = ({ source }) => {
  const [code, setCode] = React.useState(source);

  return (
    <>
      <Editor value={code} onChange={e => setCode(e.target.value)} />
      <p dangerouslySetInnerHTML={{ __html: code }} />
    </>
  );
};

export default function FirstLesson() {
  return (
    <LessonTemplate>
      <div className="slides">
        <section>
          <h3>Урок 1. </h3>
          <h1>Героическое вступление в</h1>
          <Image height="30vh" src={htmlLogo} />
        </section>
        <section>
          <section>
            <h1>Кому нужен HTML?</h1>
            <h2 className="fragment">Всем*</h2>
            <h6 className="fragment">*Кто как-то связан с программированием</h6>
          </section>
          <section>Где используется HTML в повседневной жизни:</section>
          <section data-background-image={internet} />
          <section data-background-image={silpo} />
          <section data-background-image={ibox} />
          <section data-background-image={kfc} />
          <section data-background-image={metro} />
          <section data-background-image={htmlCap} />
        </section>
        <section>
          <section>
            <h1>Програмное обеспечение</h1>
          </section>
          <section>
            Google © заплатил мне кучу денег, так что мы будет использовать
            Google Chrome © в качестве браузера.
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
              К сожалению, Microsoft © мне не заплатили, так что отдельного
              слайда они не получат и скачать его можно по ссылке.
            </p>
          </section>
          <section>
            <p>
              Обе программы поддерживают плагины от сторонних разработчиков.
            </p>
            <p>
              Для мгновенного обновления страницы будем использовать Live Reload
              © плагин для{" "}
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
              <p>Для начала нужно просто их установить.</p>
            </p>
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
          </section>
          <section>
            {/* <ol>
              <li>Создаем папку my-website</li>
              <li>Открываем VSCode</li>
              <li>
                Открываем в VSCode созданную папку{" "}
                <Hotkey mac="⌘+O" win="CTRL+O" />
              </li>
              <li>
                Создаем новый файл <code>CTRL+N</code> или <code>⌘+N</code>
              </li>
              <li>
                Сохраняем пустой файл <code>CTRL+S</code> или <code>⌘+S</code>
              </li>
              <li>Называем этот файл index.html и нажимаем кнопку сохранить</li>
            </ol> */}
            <table>
              <thead>
                <tr>
                  <th>Действие</th>
                  <th>🔥 Hotkey / Icon</th>
                </tr>
              </thead>
              <tr>
                <td>Создаем папку my-website</td>
                <td>
                  <Hotkey mac={["ctrl", "shift", "N"]} />
                </td>
              </tr>
              <tr>
                <td>Открываем VSCode</td>
                <td>
                  <VSCode style={{ display: "block" }} width="54px" />
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
            </table>
          </section>
        </section>
        <section>
          <section>
            <h1>Основные понятия</h1>
          </section>
          <section>
            <b>Браузер</b> <i>(от англ. Browser - обозреватель)</i> - программа,
            через которую вы заходите в интернет.
            <p>
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
                  <span style={{ transform: "rotate(30deg)" }}>
                    Еще живы 😭
                  </span>
                </div>
              </Relative>
            </p>
            <p>
              <span
                className="fragment fade-in-then-out"
                data-fragment-index={1}
              >
                Хорошие новости
              </span>
              <span
                className="fragment fade-in-then-out"
                data-fragment-index={2}
              >
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
              — стандартизированный язык разметки веб-страниц во Всемирной
              паутине (интернете).
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
            <ParagraphWithSourse source={markupDefinition} />
          </section>
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
            <h1>Текст в HTML</h1>
          </section>
          <section>
            <ParagraphWithSourse source={spaces} />
          </section>
          <section>
            <h1>HTML Tags</h1>
          </section>
          <section data-background-image={tag} />
          <section>
            <ParagraphWithSourse source={tagHtml} />
          </section>
          <section>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "80vh",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  maxHeight: "50%",
                  width: "100%",
                  position: "relative",
                }}
              >
                <span style={{ position: "absolute", left: 0, top: 0 }}>
                  Парные:
                </span>
                <img src={doomers} />
              </p>
              <p
                style={{
                  maxHeight: "50%",
                  width: "100%",
                  position: "relative",
                }}
              >
                <span style={{ position: "absolute", left: 0, top: 0 }}>
                  Не парные:
                </span>
                <img src={boomer} />
              </p>
            </div>
          </section>
          <section>
            <ul>
              <li>Служебные</li>
              <li>Визуальные</li>
            </ul>
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
              документ. Является обязательным корневым тегом. Атрибут{" "}
              <b>lang</b> определяет язык документа и является обязательным.
            </p>
            <p className="fragment">
              Атрибут lang принимает значения в формате{" "}
              <a href="https://r12a.github.io/app-subtags/" target="_blank">
                BCP47
              </a>
              . Звучит страшно, но на деле это в основном &amp;#39;en&amp;#39;,
              но если нужен какой-то другой язык его можно найти или проверить
              по ссылке.
            </p>
          </section>
          <section>
            <p>
              <b>&lt;head /&gt;</b> - тег, содержащий служебную информацию для
              браузера.
            </p>
            <p className="fragment">
              <ul>
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
            </p>
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
              Кракозябры в 99.9% случаев свидетельствуют о проблемах с
              кодировкой.
            </p>
            <p>
              Если кракозябры в браузере - значит был некорректно указан метатег
              с атрибутом charset.
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
            (inital scale) не будет изменен (не отдален и не приближен, а равен
            1)
          </section>
          <section>
            <b>&lt;body /&gt; </b> - тег тела документа. Содержит визуальную
            часть HTML документа. На странице может быть только один &lt;body
            /&gt; тег.
          </section>
        </section>
        <section>
          <section>
            <h1>
              Структура <br /> &lt;body /&gt;
            </h1>
          </section>
          <section>
            <p>Визуальные теги делятся на:</p>
            <ul>
              <li>Блоки</li>
              <li>Строки</li>
            </ul>
          </section>
          <section>
            &lt;div /&gt; <i>(англ. division)</i> - универсальный блочный
            тег-контейнер.
          </section>
        </section>
      </div>
    </LessonTemplate>
  );
}
