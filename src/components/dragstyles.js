import styled from "styled-components";

export const MainContainer = styled.div`
         display: grid;
         width: 80vw;
         grid-template-columns: minmax(150px,1fr) 0.5fr minmax(150px,1fr) minmax(150px,1fr) minmax(150px,1fr) minmax(150px,1fr) minmax(150px,1fr);
         /* 150px 50px 150px 150px 150px 150px 150px  */
          
         grid-template-rows: auto;
         /* grid-gap: 20px; */
         grid-template-areas:
           "rewardheader vertspacer categoryheader . . . ."
           ".  . c1header  c2header  c3header  c4header  c5header"
           ". . . spacer . . ."
           "r1 . r1c1 r1c2 r1c3 r1c4 r1c5"
           "r2 . r2c1 r2c2 r2c3 r2c4 r2c5"
           "r3 . r3c1 r3c2 r3c3 r3c4 r3c5"
           "r4 . r4c1 r4c2 r4c3 r4c4 r4c5"
           "r5 . r5c1 r5c2 r5c3 r5c4 r5c5"
           ". . . resetbutton . . .";
       `;
       //update your column widths and grid gaps
       // add in the barriers between columns


export const RewardBox = styled.div`
  cursor: pointer;
  box-sizing: border-box;
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.color};
  text-align: center;
  line-height: 100px;
  margin: 20px auto;
  grid-area: ${(props) => props.location};


`;

export const Title = styled.h2`
  text-align: center;
  grid-area: ${(props)=> props.location};
  /* border-bottom: 1px solid black; */
  margin: 20px auto;
  /* text-decoration: underline; */
  
`;

export const CategoriesContainer = styled.div`
   grid-column-start: 3 ;
   grid-column-end: 8;
   border-bottom: 1px solid black;
   margin-bottom: 10px;
   

`

export const CategoryColumn = styled.div`
    grid-area: ${(props)=> props.location};
    grid-row-start: 2;
    grid-row-end: span 7;
    text-align: center;
    border-right: 1px solid black;
`

export const PlacedReward = styled.div`
         line-height: 100px;
         margin: 20px auto;
         background-color: ${(props)=> props.color};
         grid-area: ${(props)=> props.location};
         text-align: center;
         height: 100px;
         width:100px;
         position: relative;
         


       `;

export const CloseButton = styled.div`
  
  line-height:20px;
  width: 20px;
  position: absolute;
  top: 2px;
  right:2px;
  cursor: pointer;
  border-radius: 10px;
  background-color: white;
`
export  const SpacerDiv = styled.div`
grid-area: spacer;
height: 50px;

`

export const VertDiv = styled.div`
  grid-area: vertspacer;
  grid-row-start: 1;
  grid-row-end: span 8;
  border-right: 1px solid black;
  margin: 10px;
`
