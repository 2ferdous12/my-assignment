function busTicket(){

  const btn = document.getElementsByClassName('add-btn');
    let count = 0;
  for(const bttn of btn){
    bttn.addEventListener('click', function(e){
      count = count + 1;
      document.getElementById('bus-count').innerText = count;
  const btnName = (e.target.childNodes[1].innerText);

 const economys = document.getElementById('economy');
const li = document.createElement('li')
 const p = document.createElement('p');
 p.innerText = btnName;
 const p2 = document.createElement('p');
 p2.innerText = '';
 li.appendChild(p);
 li.appendChild(p2);

 economys.appendChild(li);


//  for(const price of prices){
//   price.addEventListener('click')
//   console.log(price.target);
//  }
     
      addElement(e.target.classList.add('bg-orange-400'));

      // const prices = document.getElementById('ticit-price').innerText;
      // const  = prices.innerText;
      // console.log(p.target.childNodes);
    })
  }
 
  
    hideElement('first-section');
    hideElement('first-scound-section');
    removeElement('middle-section');
    ;
    
    
}

  function addBtn(){
    removeElement('verify-section');
    hideElement('middle-section');
    console.log('ontora');
    
  }

  // function nextbut(e){
    // const bttnn = document.getElementById('verify-section');

    // for(const bto of bttnn){
    //   bto.addEventListener('click', function(e){
    //     console.log('hey brro');
    //   })
    // }
  // }

function removeElement(elmentid){
  const bgs = document.getElementById(elmentid);
  bgs.classList.remove('hidden')
}

function hideElement(elmentid){
    const bg = document.getElementById(elmentid);
    bg.classList.add('hidden');
}

function addElement(elmentid){
  const add = document.getElementsByClassName(elmentid);
  
}