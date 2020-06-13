import React from 'react'

import {
  MainContainer,
  RewardBox,
  Title,
  CategoriesContainer,
  CategoryColumn,
  PlacedReward,
  CloseButton,
} from "./dragstyles";

// const initialState = [{ name: "r2", location: "r2c3", bgcolor: "yellow", key:"1" }] ;

// consider initializing state as an object with the key value being the key to the data
// that way on the deletes, you can reference the object key and delete
// may need to change eyour render methods to accomodate that.
// objects get a key when they are added to the placed grid

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

// r1: { name: "r1", category: "c1", bgcolor: "green" },
// r2: { name: "r2", category: "c2", bgcolor: "yellow" },
// r3: { name: "r3", category: "c3", bgcolor: "pink" },
// r4: { name: "r4", category: "c4", bgcolor: "skyblue" },
// r5: { name: "r5", category: "c5", bgcolor: "orange" }

export default class DragAndDrop extends React.Component{

    state= { stateRewards: []
        
        // items: [
        //     { name: "r1", category: "c1", bgcolor: "green" },
        //      { name: "r2", category: "c2", bgcolor: "yellow" },
        //      { name: "r3", category: "c3", bgcolor: "pink" },
        //      { name: "r4", category: "c4", bgcolor: "skyblue" },
        //      { name: "r5", category: "c5", bgcolor: "orange" }
        // ]

    }

    // component did mount to retrieve from local storage
    //component will unmount to save state to local storage

    componentDidMount(){
      if (localStorage.getItem("savedState")){
      let stuff = localStorage.getItem("savedState");
      this.setState({ stateRewards: JSON.parse(stuff) })}
    }
    
    componentWillUnmount(){
      if (this.state.stateRewards.length === 0){
        
        localStorage.clear()
      } else  {
        let stuff = localStorage.setItem("savedState", JSON.stringify(this.state.stateRewards))
        localStorage.setItem("savedState", stuff)
      }
    }

    saveToStorage(){
      /*
        Save to storage only occurs if the current local state has values, otherwise it remains clear
        Thought is there is no need to run the function if there are no values to place in storage
      */
      if(this.state.stateRewards.length > 0){
        localStorage.clear()
        localStorage.setItem(
          "savedState",
          JSON.stringify(this.state.stateRewards)
          );
        }
    }

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
        2. set my updated flag - using this to control whether I am changing a 
        location on an existing object in state or creating a new object in state
        3a. if I am changing an existing value, update state with the copied values
        3b. If object is not found, create a new object and update state with the new object
        4. Need to dispact the add to a reducer for redux
        */

        let id = ev.dataTransfer.getData("id")
        let key = ev.dataTransfer.getData("key") 
        let myState = this.state.stateRewards
        
        let updated = false
        myState.forEach( obj => {
          if (obj.key === key){
            obj.location = `${id}${cat}`
            updated = true
          }
        })

        if (updated){
          this.setState({stateRewards : myState}, this.saveToStorage())
        } else if (!updated) {
          const placedReward = { name: id, location: `${id}${cat}`, bgcolor: colors[id], key: key }
          myState.push(placedReward)
          this.setState({ stateRewards: myState }, this.saveToStorage());
        }
        

        
    }

    deletePlacedReward(key){
        /*
          When function executes, clear the local storage, set state and update storage with the current completed state
          saveToStorage added as callback to avoid race condition
        */ 

        localStorage.clear()
          let rewards = this.state.stateRewards.filter(rewardObj => rewardObj.key !== key)
          this.setState({stateRewards: rewards}, this.saveToStorage)

    }

    render(){


       const styledrewards =  rewards.map( item => {
          /*
            this function is reading the rewards array and creating the starting items from 
            which users will drag a reward to a category
          */
       
        return (
          <RewardBox
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
        if (this.state.stateRewards.length > 0 ){

           placedReward = this.state.stateRewards.map((reward) => {
            /*
            this function is reading state for any placed rewards and creating dom nodes to attached the values to
            */
           return (
             <PlacedReward
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
            <Title location={"rewardheader"}>Rewards</Title>
            {styledrewards}

            <CategoriesContainer>
              <Title>Categories</Title>
            </CategoriesContainer>

            <CategoryColumn
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

// const msp = state => {

// }

// const mdp = dispatch => {

// }