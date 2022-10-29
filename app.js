function weather_data()
    {
        const key = 'f5ff7fb5af5699a48135187947f9037a';
        let city = document.getElementById("city").value;
        let table = document.querySelector("table");
        table.innerHTML = '';
        let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
        fetch(api)
        .then(response => 
            response.json()
            .then(data => ({
            data: data,
            status: response.status
            })
        )
        .then(res => {
            var h1 = document.getElementById("cityname").innerHTML = res.data.name;
            // 1
            var tr = document.createElement("tr");
            var td = document.createElement("td");
            td.innerText='Temperature';
            tr.appendChild(td);
            var td = document.createElement("td");
            td.innerText=res.data.main.temp+"K";
            tr.appendChild(td);
            table.appendChild(tr);
            // 2
            var tr = document.createElement("tr");
            var td = document.createElement("td");
            td.innerText='Maximum Temperature';
            tr.appendChild(td);
            var td = document.createElement("td");
            td.innerText=res.data.main.temp_max+"K";
            tr.appendChild(td);
            table.appendChild(tr);
            // 3
            var tr = document.createElement("tr");
            var td = document.createElement("td");
            td.innerText='Minimum Temperature';
            tr.appendChild(td);
            var td = document.createElement("td");
            td.innerText=res.data.main.temp_min+"K";
            tr.appendChild(td);
            table.appendChild(tr);
            // 4
            var tr = document.createElement("tr");
            var td = document.createElement("td");
            td.innerText='Humidity';
            tr.appendChild(td);
            var td = document.createElement("td");
            td.innerText=res.data.main.humidity+"%";
            tr.appendChild(td);
            table.appendChild(tr);
            // 5
            var tr = document.createElement("tr");
            var td = document.createElement("td");
            td.innerText='Pressure';
            tr.appendChild(td);
            var td = document.createElement("td");
            td.innerText=res.data.main.pressure+" hPa";
            tr.appendChild(td);
            table.appendChild(tr);
            
            //6
            var tr = document.createElement("tr");
            var td = document.createElement("td");
            td.innerText='Feels like';
            tr.appendChild(td);
            var td = document.createElement("td");
            td.innerText=res.data.main.feels_like+"K";
            tr.appendChild(td);
            table.appendChild(tr);
            // 7
            var tr = document.createElement("tr");
            var td = document.createElement("td");
            td.innerText='Weather Condition';
            tr.appendChild(td);
            var td = document.createElement("td");
            td.innerText=res.data.weather[0].main;
            tr.appendChild(td);
            table.appendChild(tr);
            //8
            var tr = document.createElement("tr");
            var td = document.createElement("td");
            td.innerText='Weather Description';
            tr.appendChild(td);
            var td = document.createElement("td");
            td.innerText=res.data.weather[0].description;
            tr.appendChild(td);
            table.appendChild(tr);
            //9
            var tr = document.createElement("tr");
            var td = document.createElement("td");
            td.innerText='Wind Speed';
            tr.appendChild(td);
            var td = document.createElement("td");
            td.innerText=res.data.wind.speed+" m/s";
            tr.appendChild(td);
            table.appendChild(tr);
        }));
        document.getElementById("city").value = '';
}