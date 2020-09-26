import React from "react";
import LessonTemplate from "../../../../templates/lesson-template";
import htmlLogo from "./html-logo.png";
import styled from "styled-components";
import markupDefinition from "raw-loader!./markup-definition.html";
import Editor from "../../../../components/editor";

const Logo = styled.img`
  height: 30vh;
  width: auto;
`;

export default function FirstLesson() {
  const [code, setCode] = React.useState(markupDefinition);

  return (
    <LessonTemplate>
      <div className="slides">
        <section>
          <h3>Урок 1. </h3>
          <h1>Героическое вступление в</h1>
          <Logo src={htmlLogo} />
        </section>
        <section>
          <h2>Основные понятия</h2>
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
        </section>
      </div>
    </LessonTemplate>
  );
}
