export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("savedState");
    if (serializedState === null) {
      return undefined;
    }
    let rewardsState = JSON.parse(serializedState);
    return rewardsState.rewards.present;
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("savedState", serializedState);
  } catch {
    //ignore write errors
  }
};
