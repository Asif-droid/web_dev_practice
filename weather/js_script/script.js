let apikey='35cabb6221d53ad5d53c1ab6b76e5aed';
let city=document.querySelector('.weather_city');
let day=document.querySelector('.weather_day');
let humidity=document.querySelector('.weather_indicator--humiduty>.value');
let wind=document.querySelector('.weather_indicator--wind>.value');
let pressure=document.querySelector('.weather_indicator--pressure>.value');
let weather_forcast=document.querySelector('.weather_forcast');
let image=document.querySelector('.weather_img');
let temp=document.querySelector('.weather_temp>.value');
let search=document.querySelector('.weather_search');



let get_weather_forcast= async (id)=>{
    let basepoint='https://api.openweathermap.org/data/2.5/forecast?&units=metric&appid='+apikey;
    let endpoint=basepoint+'&id='+id;
    let forcast_result= await fetch(endpoint);
    let forcast_res_js=await forcast_result.json();
    let forcast_list=forcast_res_js.list;
    let daily=[];
    forcast_list.forEach(element => {
        let date=new Date(element.dt_txt.replace(" ","T"));
        let hr=date.getHours();
        if(hr===12){
            daily.push(element)
        }
        
    })
    return daily;
}
let get_weather = async (city)=>{
    let rqst='https://api.openweathermap.org/data/2.5/weather?q='+city+'&units=metric&appid='+apikey;
    let response=await fetch(rqst);
    let g_response=await response.json();
    //console.log(g_response);

    return g_response;

}
//get_weather('Dhaka');
search.addEventListener('keydown', async (e)=>{
    //console.log(e);
    if(e.keyCode=== 13){
        let weather=await get_weather(search.value)
        update_weather(weather);
        let city_id=weather.id;
        let forcasts=await get_weather_forcast(city_id);
        //console.log(forcasts);
        update_weather_forcast(forcasts);
    }

})
let update_weather=(data)=>{
    
    city.textContent=data.name;
    day.textContent=day_of_week();
    humidity.textContent=data.main.humidity;
    let w_pressure=data.main.pressure;
    let new_pressure=w_pressure*100/101325;
    pressure.textContent=new_pressure.toFixed(3);
    let direction=data.wind.deg;
    let w_dir;
    
    if(direction>45 && direction<=135){
        w_dir='East';
    }
    else if(direction>135 && direction<=225){
        w_dir='South';
    }
    else if(direction>2250 && direction<=315){
        w_dir='West';
    }
    else{
        w_dir='North';
    }
    wind.textContent=w_dir+' ,'+data.wind.speed;
    //console.log(data);
    let image_url='http://openweathermap.org/img/wn/'+data.weather[0].icon+'@2x.png';
    image.src=image_url;
    temp.textContent=data.main.temp;

}
let update_weather_forcast=(forcasts)=>{
    weather_forcast.innerHTML='';
    forcasts.forEach(day=>{
        let forcast_url='http://openweathermap.org/img/wn/'+day.weather[0].icon+'@2x.png';
        let day_name=day_of_week(day.dt*1000);
        let temp=day.main.temp;
        let forcast_block=`
            <article class="weather_forcast_item">
            <img src="${forcast_url}" alt="${day.weather[0].description}" class="weather_frocats_icon">
            <h3 class="weather_forcast_day">${day_name}</h3>
            <p class="weather_forcast_temp"><span class="va">${temp}</span> &deg;C</p>
            </article>
            `;
        weather_forcast.insertAdjacentHTML('beforeend',forcast_block);
            

    })

}
let day_of_week=(dt=new Date().getTime())=>{
    return new Date(dt).toLocaleDateString('en-EN',{'weekday':'long'});
}