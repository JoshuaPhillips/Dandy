import React from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";

import story from "../../data/story/story";

import classes from "./SideNav.module.scss";

const sideNav = props => {
  return (
    <React.Fragment>
      <nav className={classes.SideNav}>
        <h1 className={classes.Header} onClick={() => props.changeChapter(null, null)}>
          <Link to='/'>D&amp;Dy</Link>
        </h1>

        {story.map((section, sectionIndex) => {
          return (
            <React.Fragment key={`${section.name}`}>
              <h2>{section.name}</h2>

              <ul>
                {section.chapters.map((chapter, chapterIndex) => {
                  return (
                    <li
                      key={`${section.name}__${chapter.title}`}
                      onClick={() => props.changeChapter(sectionIndex, chapterIndex)}>
                      <NavLink
                        to={`/${section.name.toLowerCase().replace(/\s+/g, "-")}/${chapter.title
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}>
                        {chapter.title}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </React.Fragment>
          );
        })}
        <hr />
        <p onClick={() => props.changeChapter(null, null)}>
          <Link to='/our-party'>Our Party</Link>
        </p>
      </nav>
    </React.Fragment>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    changeChapter: (section, chapter) =>
      dispatch({ type: "CHANGE_CHAPTER", payload: { section: section, chapter: chapter } })
  };
};

export default connect(null, mapDispatchToProps)(sideNav);
