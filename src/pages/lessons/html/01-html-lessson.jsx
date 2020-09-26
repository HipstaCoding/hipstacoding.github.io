import React from "react";
import LessonTemplate from "../../../templates/lesson-template";

export default function FirstLesson() {
  return (
    <LessonTemplate>
      <div className="slides">
        <section>
          <h3>Урок 1. </h3>
          <h2>Героическое вступление <br /> в HTML</h2>
          <p>
            reveal.js enables you to create beautiful interactive slide decks
            using HTML. This presentation will show you examples{" "}
          </p>
        </section>
        <section>
          Slide 2<section>yo</section>
          <section>section 2</section>
        </section>
      </div>
    </LessonTemplate>
  );
}
