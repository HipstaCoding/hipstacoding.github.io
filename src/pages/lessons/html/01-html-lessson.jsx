import React from "react";
import LessonTemplate from "../../../templates/lesson-template";

export default function FirstLesson() {
  return (
    <LessonTemplate>
      <div className="slides">
        <section data-background-color="aquamarine">
          <h2>Hello There</h2>
          <p>
            reveal.js enables you to create beautiful interactive slide decks
            using HTML. This presentation will show you examples{" "}
          </p>
          <section>yo</section>
        </section>
        <section>Slide 2</section>
      </div>
    </LessonTemplate>
  );
}
