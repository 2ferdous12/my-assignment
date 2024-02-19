function busTicket(){

  const btn = document.getElementsByClassName('add-btn');
    let count = 0;
  for(const bttn of btn){
    bttn.addEventListener('click', function(e){

      count = count + 1;
      document.getElementById('bus-count').innerText = count;
  const btnName = (e.target.childNodes[1].innerText);

 const economys = document.getElementById('economy');
const tr = document.createElement('tr')
 const td = document.createElement('td');
 td.innerText = btnName;
 const td2 = document.createElement('td');
 td2.innerText = 'economy';
 const td3 = document.createElement('td');
 td3.innerText = '550';
 tr.appendChild(td);
 tr.appendChild(td2);
 tr.appendChild(td3);

 economys.appendChild(tr);



 const totalCost = document.getElementById('Total-Cost').innerText;
 const convertTotalCost = parseInt(totalCost);
 document.getElementById('Total-Cost').innerText = convertTotalCost + parseInt('550');

 const grandTotal = document.getElementById('Grand-total').innerText;

 const convertGrandTotal = parseInt(grandTotal);
 document.getElementById('Grand-total').innerText = convertGrandTotal + parseInt('550');



     
      addElement(e.target.classList.add('bg-green-500'));




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
    applyButton(catagory);
    
  }



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

