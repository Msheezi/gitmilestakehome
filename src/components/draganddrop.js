import React from 'react'
import { updateReward, removeReward, movingReward, clearState} from '../actions/rewardActions'
import { connect } from "react-redux";

import {
  MainContainer,
  RewardBox,
  Title,
  CategoriesContainer,
  CategoryColumn,
  PlacedReward,
  CloseButton,
  SpacerDiv,
  VertDiv
} from "./dragstyles";

const rewards = [
  { name: "r1", category: "c1", bgcolor: "#f5e6e8"},
  { name: "r2", category: "c2", bgcolor: "#a3f7b5"},
  { name: "r3", category: "c3", bgcolor: "#40c9a2"},
  { name: "r4", category: "c4", bgcolor: "#2f9c95"},
  { name: "r5", category: "c5", bgcolor: "#bee3ea"}
]

const colors = {
  r1: "#f5e6e8",
  r2: "#a3f7b5",
  r3: "#40c9a2",
  r4: "#2f9c95",
  r5: "#bee3ea"
}

 class DragAndDrop extends React.Component{
      

    onDragOver(ev) {
        ev.preventDefault()
    }

    onDragStart(ev, id, key) {
        console.log('dragstart:', id, 'key:', key);
        
        ev.dataTransfer.setData("id", id)
        ev.dataTransfer.setData("key", key)
    }

    onDrop(ev, cat) {
        
        /*
        1. Get the values from the on drag start
        2. On drop:
            if an existing reward, find the reward in props and pass to dispatch
              passing the full reward to avoid shallow copy issues with redux-undo
            if a new reward, create the object and pass to dispatch.
 
        */

        let id = ev.dataTransfer.getData("id")
        let key = ev.dataTransfer.getData("key") 

        
        let location = `${id}${cat}`
        let updatedObj = this.props.rewards.find(obj => {
           return obj.key === key
        })
        // console.log("key: ", key, "location: ", location, "UpdatedOBJ: ", updatedObj)
            
        /**
         * bug: while placing the same square in the same swin lane doesn't
         * duplicate, it does fire a redux action
         * revise the conditional so that if it matches key and location
         * do nothing else if key matches, do update else create obj
         */

        if (updatedObj && updatedObj.location !== location){
          // updatedObj.location = location
          this.props.movingReward(updatedObj, cat)

        } else if (!updatedObj) {
          
          const placedReward = {
            name: id,
            location: location,
            bgcolor: colors[id],
            key: key,
          };
          
          this.props.updateReward(placedReward);
               }
      
    }

    deletePlacedReward(key){
      this.props.removeReward(key)
    }

    renderDropZones(){
      let categories = ["c1","c2","c3","c4","c5"]
      let renderedDropZones = 
      categories.map(cat => {
      return (<CategoryColumn
        data-testid={`${cat}Dropzone`}
        key={cat}
        location={`${cat}header`}
        className="rewards1"
        onDragOver={(e) => this.onDragOver(e)}
        onDrop={(e) => this.onDrop(e, `${cat}`)}
      >
        <span className="category">{cat}</span>
      </CategoryColumn>)
      })
      return renderedDropZones
    }

    renderRewards(){
      const styledrewards = rewards.map(item => {
        /*
          this function is reading the rewards array and creating the starting items from 
          which users will drag a reward to a category
        */

        return (
          <RewardBox
            data-testid={`rewards${item.name}`}
            key={item.name}
            color={item.bgcolor}
            location={item.name}
            draggable
            onDragStart={(e) => this.onDragStart(e, item.name, Date.now())}
          >
            {item.name}
          </RewardBox>
        );
      })
      return styledrewards
    }


    renderPlacedRewards(){
      let placedReward
      if (this.props.rewards.length > 0) {
        placedReward = this.props.rewards.map((reward) => {

          /*
          this function is reading state for any placed rewards and creating dom nodes 
          to attach the values to
          */

          return (
            <PlacedReward
              data-testid={`reward ${reward.location}`}
              location={reward.location}
              key={reward.key}
              color={reward.bgcolor}
              draggable
              onDragStart={(e) => this.onDragStart(e, reward.name, reward.key)}
            >
              {reward.name}
              <CloseButton onClick={() => this.deletePlacedReward(reward.key)}>
                X
               </CloseButton>
            </PlacedReward>
          );
        });
      } 
      return placedReward
    }


   resetState(){
     localStorage.clear()
     this.props.clearState()
   }

    render(){

        
          let placedReward = this.renderPlacedRewards()
          let styledrewards = this.renderRewards()
          let drops = this.renderDropZones()
          return (

           <MainContainer>
            <SpacerDiv/>
            <Title style={{borderBottom: "1px solid black"}}location={"rewardheader"}>Rewards</Title>
            {styledrewards}
            <CategoriesContainer>
              <Title>Categories</Title>
            </CategoriesContainer>
            
            {drops}
            {placedReward}
            <VertDiv/>
              <div style={{
                gridArea: "resetbutton",
                paddingTop: "50px",
              }} >

              <button onClick={() => this.resetState()}>Reset Local Storage</button>
            </div>
          </MainContainer>
          )
          ;

    }
}

const msp = state => {
  const rewardState = state.rewards.present 
  const keys = Object.keys(rewardState)
  let rewards = keys.map(key => (rewardState[key]))
  return {
    rewards: rewards, 
    keys: keys
  }
}

const mdp = dispatch => ({
    updateReward: (reward) => dispatch(updateReward(reward)),
    removeReward: (key) => dispatch(removeReward(key)),
  movingReward: (reward, cat) => dispatch(movingReward(reward, cat)),
  clearState:() => dispatch(clearState()) 
})

export default connect(msp, mdp)(DragAndDrop)