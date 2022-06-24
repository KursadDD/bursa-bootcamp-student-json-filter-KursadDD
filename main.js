let newData=[];

let orangeRedMembers = [];
let deepPinkMembers = [];
let aliceBlueMembers = [];

async function getDataOrangeRed() {
  let data = await fetch("data.json")
    .then((res) => res.json())
    .then((list) => list);

  data.forEach((element) => {
    if (element.group == "OrangeRed") {
      orangeRedMembers.push(element);
    }
  });

  data.forEach((element) => {
    if (element.group == "DeepPink") {
      deepPinkMembers.push(element);
    }
  });

  data.forEach((element) => {
    if (element.group == "AliceBlue") {
      aliceBlueMembers.push(element);
    }
  });
  
  newData.push(
    {
      group: "OrangeRed",
      members: orangeRedMembers,
    },
    {
      group: "DeepPink",
      members: deepPinkMembers,
    },
    {
      group: "AliceBlue",
      members: aliceBlueMembers,
    } 
    
    )
  console.log(newData)
}

getDataOrangeRed()
  

  

 
  

  

  

  

