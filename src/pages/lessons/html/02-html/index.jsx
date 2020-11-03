import styled from "styled-components";
import LessonTemplate from "templates/lesson-template";
import Slides from "./slides/index.mdx";
import { MDXProvider } from "@mdx-js/react";

export default function SecondLesson(props) {
  return (
    <LessonTemplate>
        <MDXProvider>
          <Slides />
        </MDXProvider>
    </LessonTemplate>
  );
}
