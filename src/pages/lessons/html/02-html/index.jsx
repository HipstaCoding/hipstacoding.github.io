import LessonTemplate from "templates/lesson-template";
import Section01 from "./slides/01.mdx";
import Section0200 from "./slides/02-00.mdx";
import Section0201 from "./slides/02-01.mdx";
import Section0202 from "./slides/02-02.mdx";

export default function SecondLesson(props) {
  return (
    <LessonTemplate>
      <Section01 />
      <section>
        <Section0200 />
        <Section0201 />
        <Section0202 />
      </section>
    </LessonTemplate>
  );
}
