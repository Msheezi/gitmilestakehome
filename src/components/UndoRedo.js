import React from "react";
import { ActionCreators as UndoActionCreators } from "redux-undo";
import { connect } from "react-redux";
/* ... */

let UndoRedo = ({ canUndo, canRedo, onUndo, onRedo }) => (
  <p>
    <button type="undo" onClick={onUndo} disabled={!canUndo}>
      Undo
    </button>
    <button type="redo" onClick={onRedo} disabled={!canRedo}>
      Redo
    </button>
  </p>
);


/* ... */

const mapStateToProps = (state) => {
  return {
    canUndo: state.rewards.past.length > 0,
    canRedo: state.rewards.future.length > 0,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUndo: () => dispatch(UndoActionCreators.undo()),
    onRedo: () => dispatch(UndoActionCreators.redo()),
  };
};

UndoRedo = connect(mapStateToProps, mapDispatchToProps)(UndoRedo);

export default UndoRedo;