import React from 'react'

import {
  MainContainer,
  RewardsContainer,
  RewardBox,
  Title,
  CategoriesContainer,
  CategoryColumn,
  PlacedReward,
} from "./dragstyles";

const initialState = [{ name: "r2", location: "r2c3", bgcolor: "yellow", key:"1" }] ;

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

    state= { stateRewards: initialState
        
        // items: [
        //     { name: "r1", category: "c1", bgcolor: "green" },
        //      { name: "r2", category: "c2", bgcolor: "yellow" },
        //      { name: "r3", category: "c3", bgcolor: "pink" },
        //      { name: "r4", category: "c4", bgcolor: "skyblue" },
        //      { name: "r5", category: "c5", bgcolor: "orange" }
        // ]

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
        // get the data and create an object to add to state
        // grab the drop location and the r name, concat and create the object
        // render in the correct location


        //need to add logic to remove the current value and move it to the new location
        // if it already exists in state


        // if (state.stateRewards.id){
        // change the location do the nw location
        // }

        const colors = {
          r1: "green",
          r2: "yellow",
          r3: "pink",
          r4: "skyblue",
          r5: "orange",
        };

        let id = ev.dataTransfer.getData("id")
        let key = Date.now()

        

        let newReward = {name: id, location: `${id}${cat}`, bgcolor: colors[id], key: key}
        // let tasks = this.state.tasks.filter(task => {
        //     if (task.name === id) {
        //         task.category = cat
        //     }
        //     return task
        // })
        let newState = this.state.stateRewards.push(newReward)
        this.setState({
            newState
        })
    }



    render(){

        const items = {
            c1: [],
            c2: [],
            c3: [],
            c4: [],
            c5: [],
            // when you push the items into the array, update the gridarea prop with the proper grid area location
            // grid-area: category or something like that
        }

       const styledrewards =  rewards.map( item => {
          
       
        return (
          <RewardBox
            key={item.name}
            color={item.bgcolor}
            location={item.name}
            draggable
            onDragStart={(e) => this.onDragStart(e, item.name)}
          >
            {item.name}
          </RewardBox>
        );
        })

        // this.state.items.forEach(item=> {
        //     items[item.category].push(
        //         <div
        //             key={item.name}
        //             draggable 
        //             className="draggable"
        //             onDragStart={e=>this.onDragStart(e,item.name)}
        //         >{item.name}
        //         {/* need to put the rewards here for grabbing */}
        //         </div>
        //     )
        // })

        const placedReward = this.state.stateRewards.map((reward) => {
          
            return (
            <PlacedReward location={reward.location}
                key={reward.key}
                color={reward.bgcolor}
                draggable
                onDragStart={e=> this.onDragStart(e,reward.name, reward.key)}
                
            >
              {reward.name}
            </PlacedReward>
          );
        });


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
              C2
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
            {/* <div 
            style={{
                backgroundColor: "red"
                , height: "100px"
                , width: "100px"
                , gridArea: "r2c2"}}
            >Test
            </div> */}
            
            {placedReward}
          </MainContainer>
        );

    }
}