// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup, fireEvent } from "@testing-library/react";
import {Provider} from 'react-redux'
import React from "react";
import configureStore2 from 'redux-mock-store'
import renderer from 'react-test-renderer'

import ReactDOM from "react-dom";
import DragAndDrop from "./components/draganddrop";
import UndoRedo from './components/UndoRedo'
import configureStore from "./store/store";
import rootReducer from './reducers/rootReducer';
import { saveState } from './store/localStorage';
import { createStore } from 'redux';
import {testState} from './testState'

const mockStore = configureStore2([])

const renderWithRedux = (
  component, 
  { initialState,
     store = createStore(rootReducer, initialState)} ={}
) => {
return {
  ...render(<Provider store={store}>{component}</Provider>),
store,
}
}

test("It renders without Crashing", () => {
  const div = document.createElement("div");
  const store = configureStore();
  store.subscribe(()=> {
    saveState.getState()
  })
  ReactDOM.render(<DragAndDrop store={store} />, div);
  //   const { getByText } = render(<DragandDrop />);

  //   const linkElement = getByText(/learn react/i);
  //   expect(linkElement).toBeInTheDocument();
});

test("Reward r1 renders", () => {
  const { getByTestId } = renderWithRedux(<DragAndDrop />);
  expect(getByTestId("rewardsr1"));
});

test("Reward r2 renders", () => {
  const { getByTestId } = renderWithRedux(<DragAndDrop />);
  expect(getByTestId("rewardsr1"));
});

test("Reward r3 renders", () => {
  const { getByTestId } = renderWithRedux(<DragAndDrop />);
  expect(getByTestId("rewardsr1"));
});

test("Reward r4 renders", () => {
  const { getByTestId } = renderWithRedux(<DragAndDrop />);
  expect(getByTestId("rewardsr1"));
});

test("Reward r5 renders", () => {
  const { getByTestId } = renderWithRedux(<DragAndDrop />);
  expect(getByTestId("rewardsr1"));
});



describe("Stored Rewards Render Correctly", () => {
  let store 
  let component

  beforeEach(()=> {
    store = mockStore({
      rewards: {
        present: [
          {
            name: "r5",
            location: "r5c1",
            bgcolor: "orange",
            key: "1592096048040",
          },
        ],
        future: [],
        group: null,
        _latestUnfiltered: [
          {
            name: "r5",
            location: "r5c1",
            bgcolor: "orange",
            key: "1592096048040",
          },
        ],
        index: 44,
        limit: 45,
      },
    });
    component = renderer.create(
      <Provider store={store}>
        <DragAndDrop/>
      </Provider>
    )
  })
    
  it('should render with given state', () =>{
    expect(component.toJSON()).toMatchSnapshot()
  })

  // it('should place rewards when dropped in swimlane', ()=>{
  //   renderer.act(()=> {
  //     component.root.findByType
  //   })
  // })
})

describe("Should allow User to Undo Actions", ()=> {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      rewards: {
        past: [
          [],
          [
            {
              name: "r1",
              location: "r1c1",
              bgcolor: "green",
              key: "1592131225077",
            },
          ],
        ],
        present: [
          {
            name: "r1",
            location: "r1c1",
            bgcolor: "green",
            key: "1592131225077",
          },
          {
            name: "r2",
            location: "r2c2",
            bgcolor: "yellow",
            key: "1592131226860",
          },
        ],
        future: [],
        group: null,
        _latestUnfiltered: [
          {
            name: "r1",
            location: "r1c1",
            bgcolor: "green",
            key: "1592131225077",
          },
          {
            name: "r2",
            location: "r2c2",
            bgcolor: "yellow",
            key: "1592131226860",
          },
        ],
        index: 2,
        limit: 3,
      },
    });
    component = renderer.create(
      <Provider store={store}>
       <DragAndDrop />
        <UndoRedo/>
      </Provider>
    );
  })
  
  it('Should Allow Undo', ()=>{
    renderer.act(()=>{
      component.root.findByProps({type:"undo"}).props.onCLlick()
    })
    expect(store.dispatch).toHaveBeenCalledTimes(1)
  })
})

