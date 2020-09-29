import React from "react";
import LessonTemplate from "templates/lesson-template";
import htmlLogo from "./html-logo.png";
import Editor from "components/editor";
import InlineCode from "components/InlineCode";
import { Image, Relative } from "components/Reveal";

import markupDefinition from "raw-loader!./markup-definition.html";

import browsers from "./browsers.png";
import rip from "./rip.png";

export default function FirstLesson() {
  const [code, setCode] = React.useState(markupDefinition);

  return (
    <LessonTemplate>
      <div className="slides">
        <section>
          <h3>Урок 1. </h3>
          <h1>Героическое вступление в</h1>
          <Image height="30vh" src={htmlLogo} />
        </section>
        <section>
          <h2>Основные понятия</h2>
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
            <p dangerouslySetInnerHTML={{ __html: code }} />
            <Editor value={code} onChange={e => setCode(e.target.value)} />
          </section>
          <section>
            <b>HTML Tag</b> - инструкция разметки HTML документа. С помощью
            тегов <b>браузер</b> понимает как нужно отображать содержимое тега.
            <p>
              <ul>
                <li className="fragment">
                  Структура: <br />{" "}
                  <InlineCode>{"<тег>содержимое тега</тег>"}</InlineCode>
                </li>
                <li className="fragment">
                  Парность: <br /> <InlineCode>{"<тег />"}</InlineCode>
                </li>
                <li className="fragment">
                  Вложенность:
                  <br />{" "}
                  <InlineCode>{"<тег><вложенный_тег/></тег>"}</InlineCode>
                </li>
              </ul>
            </p>
          </section>
        </section>
      </div>
    </LessonTemplate>
  );
}
