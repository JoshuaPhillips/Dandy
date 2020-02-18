import Introduction from "./Introduction";
import ChapterOne from "./ChapterOne";
import ChapterTwo from "./ChapterTwo";

export default {
  name: "Prologue",
  chapters: [
    {
      title: "Complications",
      content: Introduction
    },
    {
      title: "A New Assignment",
      content: ChapterOne
    },
    {
      title: "Reclamation",
      content: ChapterTwo
    }
  ]
};
