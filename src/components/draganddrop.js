import React from 'react'
import { updateReward, removeReward, movingReward} from '../actions/rewardActions'
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
} from "./dragstyles";

const rewards = [
     { name: "r1", category: "c1", bgcolor: "green"},
     { name: "r2", category: "c2", bgcolor: "yellow"},
     { name: "r3", category: "c3", bgcolor: "pink"},
     { name: "r4", category: "c4", bgcolor: "skyblue"},
     { name: "r5", category: "c5", bgcolor: "orange"}
]

const colors = {
    r1: "green",
    r2: "yellow",
    r3: "pink",
    r4: "skyblue",
    r5: "orange"
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
        let myState = [...this.props.rewards]
        

        let updatedObj = myState.find(obj => obj.key === key)
        
        

        if (updatedObj){
          
          this.props.movingReward(updatedObj, cat)

        } else if (!updatedObj) {
                 const placedReward = {
                   name: id,
                   location: `${id}${cat}`,
                   bgcolor: colors[id],
                   key: key,
                 };
                 myState.push(placedReward);
                 this.props.updateReward(placedReward);
               }
      
    }

    deletePlacedReward(key){
      this.props.removeReward(key)
    }

    render(){


       const styledrewards =  rewards.map( item => {
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

        let placedReward
          if (this.props.rewards.length > 0){
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


        return (
          <MainContainer>
            <SpacerDiv/>
            <Title location={"rewardheader"}>Rewards</Title>
            {styledrewards}
            <CategoriesContainer>
              <Title>Categories</Title>
            </CategoriesContainer>
            <CategoryColumn
              data-testid="c1Dropzone"
              location={"c1header"}
              className="rewards1"
              onDragOver={(e) => this.onDragOver(e)}
              onDrop={(e) => this.onDrop(e, "c1")}
            >
              <span className="category">C1</span>
            </CategoryColumn>
            <CategoryColumn
              location={"c2header"}
              className="rewards1"
              onDragOver={(e) => this.onDragOver(e)}
              onDrop={(e) => this.onDrop(e, "c2")}
            >
              <span className="category">C2</span>
            </CategoryColumn>
            <CategoryColumn
              location={"c3header"}
              className="rewards1"
              onDragOver={(e) => this.onDragOver(e)}
              onDrop={(e) => this.onDrop(e, "c3")}
            >
              <span className="category">C3</span>
            </CategoryColumn>
            <CategoryColumn
              location={"c4header"}
              className="rewards1"
              onDragOver={(e) => this.onDragOver(e)}
              onDrop={(e) => this.onDrop(e, "c4")}
            >
              <span className="category">C4</span>
            </CategoryColumn>
            <CategoryColumn
              location={"c5header"}
              className="rewards1"
              onDragOver={(e) => this.onDragOver(e)}
              onDrop={(e) => this.onDrop(e, "c5")}
            >
              <span className="category">C5</span>
            </CategoryColumn>
            {placedReward}
          </MainContainer>
        );

    }
}

const msp = state => {
  let rewards = Object.values(state.rewards.present)
  return {
    rewards: rewards
  }
}

const mdp = dispatch => ({
    updateReward: (reward) => dispatch(updateReward(reward)),
    removeReward: (key) => dispatch(removeReward(key)),
  movingReward: (reward, cat) => dispatch(movingReward(reward, cat))
})

export default connect(msp, mdp)(DragAndDrop)