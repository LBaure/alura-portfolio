const colors = ["#F8F6F4", "#E3F4F4", "#D2E9E9", "#C4DFDF", "#B3C8CF", "#BED7DC", "#F1EEDC", "#E5DDC5"];

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
  }


  const divs = document.getElementsByClassName("skills__box");

// console.log("divs", divs);


// window.onload = function() {
//     for (let item of divs) {
//             console.log("entro for each");
//         console.log(item);
//         item.querySelector('ul').style.background = getRandomColor();
//     }
//   }