import React from "react";
import LessonTemplate from "../../../templates/lesson-template";

export default function FirstLesson() {
  return (
    <LessonTemplate>
      <div className="slides">
        <section>
          <h1>HTML как </h1>
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
