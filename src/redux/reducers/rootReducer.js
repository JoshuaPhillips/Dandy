const initialState = {
  currentSection: 0,
  currentChapter: 2
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_CHAPTER":
      return {
        ...state,
        currentSection: action.payload.section,
        currentChapter: action.payload.chapter
      };

    default:
      return state;
  }
};

export default rootReducer;
