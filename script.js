function busTicket(){

  const btn = document.getElementsByClassName('add-btn');
    let count = 0;
  for(const bttn of btn){
    bttn.addEventListener('click', function(e){

      count = count + 1;
      document.getElementById('bus-count').innerText = count;
  const btnName = (e.target.childNodes[1].innerText);
  const price = document.getElementById('main-price').innerText;
 
const firstBusCount = getConvertValue('bus-count');
if(firstBusCount + 1 > 5){
  alert('limit complete');
}

  const seat = getConvertValue('total-sit');
  document.getElementById('total-sit').innerText = seat - 1;


 const economys = document.getElementById('economy');
const tr = document.createElement('tr')
 const td = document.createElement('td');
 td.innerText = btnName;
 const td2 = document.createElement('td');
 td2.innerText = 'economy';
 const td3 = document.createElement('td');
 td3.innerText = price;
 tr.appendChild(td);
 tr.appendChild(td2);
 tr.appendChild(td3);

 economys.appendChild(tr);


 
      addElement(e.target.classList.add('bg-green-500'));
      updateTotalcost(price);
      updateGranTotalCost();
  
    })
  }
 
  
    hideElement('first-section');
    hideElement('first-scound-section');
    
    ;

}

function updateTotalcost(value){
  const totalcost = getConvertValue("Total-Cost");
  const sum = totalcost + parseInt(value);
  document.getElementById("Total-Cost").innerText = sum;
}

function updateGranTotalCost(status){
  const totalcost = getConvertValue("Total-Cost");
  if(status == undefined){
    document.getElementById('Grand-total').innerText = totalcost;
  }
  else{
    const copunCode = document.getElementById('coupun-code').value;
    if(copunCode == 'Couple 20'){
      const discount = totalcost * 0.2;
      document.getElementById('Grand-total').innerText = totalcost - discount;
    }
else if(copunCode == 'NEW15'){
    const discount = totalcost * 0.15;
    document.getElementById('Grand-total').innerText = totalcost - discount;
    }
    else{
      alert('please enter vaild coupon Code');
    }
  }
  
 
 

}


  function addBtn(){
    removeElement('verify-section');
    applyButton(catagory);
    
  }

  function getConvertValue(id){
    const price = document.getElementById(id).innerText;
    const convertPrice = parseInt(price);
    return convertPrice;
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
  return add;
  
}

