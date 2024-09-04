const dailyBtn = document.getElementById("daily-btn");
const weeklyBtn = document.getElementById("weekly-btn");
const monthlyBtn = document.getElementById("monthly-btn");
const btns = document.querySelectorAll('.btn');




const daily = document.querySelectorAll('.daily');
const weekly = document.querySelectorAll(".weekly");
const monthly = document.querySelectorAll(".monthly");

const titles = document.querySelectorAll(".header");


let i = 0;
const appendItem = (item) =>{
    titles[i].insertAdjacentHTML ("afterbegin", `
    <p>${item.title}</p>`);
    daily[i].insertAdjacentHTML ("afterbegin" , `
      <p>${item.timeframes.daily.current}hrs</p>
      <p>last day - ${item.timeframes.daily.previous}hrs</p>`);

    weekly[i].insertAdjacentHTML("afterbegin",`
      <p>${item.timeframes.weekly.current}hrs</p>
      <p>last week - ${item.timeframes.weekly.previous}hrs</p>`);
    
    monthly[i].insertAdjacentHTML("afterbegin",`
        <p>${item.timeframes.monthly.current}hrs</p>
        <p>last month - ${item.timeframes.monthly.previous}hrs</p>`);
    

    i++;
};

fetch('./data.json')
.then((response) => {
    if (!response) {
        throw new Error(`http error: ${response.status}`);
    }
    return response.json();
})
.then(data =>{
    data.forEach(item => {
        appendItem(item); 
    });
});


dailyBtn.classList.add('active-btn');

if (dailyBtn.classList.contains('active-btn')) {
    daily.forEach(ele =>{
        ele.classList.add("active-timeframe")
    });    
};

btns.forEach(btn => {
    
    btn.addEventListener('click',() =>{
        document.querySelector('.active-btn').classList.remove('active-btn');
        btn.classList.add('active-btn');
        
        if (dailyBtn.classList.contains('active-btn')) {
            document.querySelectorAll('.active-timeframe').forEach(card =>{
                card.classList.remove('active-timeframe');
            });

            daily.forEach(ele =>{
                ele.classList.add("active-timeframe")
            });    
        };
        
        if (weeklyBtn.classList.contains('active-btn')) {
            document.querySelectorAll('.active-timeframe').forEach(card =>{
                card.classList.remove('active-timeframe');
            });

            weekly.forEach(ele =>{
                ele.classList.add("active-timeframe");
            });
        
        };
        
        if (monthlyBtn.classList.contains('active-btn')) {
            document.querySelectorAll('.active-timeframe').forEach(card =>{
                card.classList.remove('active-timeframe');
            });

            monthly.forEach(ele =>{
                ele.classList.add("active-timeframe");
            });
                
        };
        
    });
});


