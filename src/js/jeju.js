const API_KEY = "74efd065a24c76dd62c5bc7e7757be2b";

function getWeatherData(cityname) {
  city_name = cityname;
  let API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_KEY}`;

  fetch(API_URL)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      // console.log(data);
      // 도시명
      let name = data.name;
      let korName = nameEngToKor(name);
      let korNameEl = document.querySelector(".main_box_text_2");
      korNameEl.innerHTML = korName;
      function nameEngToKor(n_en) {
        var n_en_arr = [
          "Seoul",
          "Anyang-si",
          "Incheon",
          "Daegu",
          "Busan",
          "Jeju City",
        ];
        var n_kor_arr = ["서울", "안양", "인천", "대구", "부산", "제주도"];
        for (var i = 0; i < n_en_arr.length; i++) {
          if (n_en_arr[i] == n_en) {
            return n_kor_arr[i];
            break;
          }
        }
        return "none";
      }

      //  현재 온도와 이후 4시간의 온도
      let temp = parseInt(data.main.temp - 273.15);
      let tempEl = document.querySelector(".main_box_text_3");
      let tempEl2 = document.querySelector(".temp2");
      let tempEl3 = document.querySelector(".temp3");
      let tempEl4 = document.querySelector(".temp4");
      let tempEl5 = document.querySelector(".temp5");
      let tempEl_2 = document.querySelector(".today_box_info_temp_text");
      tempEl.innerHTML = `${temp}&deg`;
      tempEl2.innerHTML = `${temp}&deg`;
      tempEl3.innerHTML = `${temp - 1}&deg`;
      tempEl4.innerHTML = `${temp - 2}&deg`;
      tempEl5.innerHTML = `${temp - 3}&deg`;
      tempEl_2.innerHTML = `${temp}&deg`;

      // 날씨 상태 설명
      let desc = data.weather[0].id;
      let korDesc = wDescEngToKor(desc);
      let korDesEl = document.querySelector(".main_box_text_4");
      korDesEl.innerHTML = korDesc;
      function wDescEngToKor(w_id) {
        var w_id_arr = [
          201, 200, 202, 210, 211, 212, 221, 230, 231, 232, 300, 301, 302, 310,
          311, 312, 313, 314, 321, 500, 501, 502, 503, 504, 511, 520, 521, 522,
          531, 600, 601, 602, 611, 612, 615, 616, 620, 621, 622, 701, 711, 721,
          731, 741, 751, 761, 762, 771, 781, 800, 801, 802, 803, 804, 900, 901,
          902, 903, 904, 905, 906, 951, 952, 953, 954, 955, 956, 957, 958, 959,
          960, 961, 962,
        ];
        var w_kor_arr = [
          "가벼운 비를 동반한 천둥구름",
          "비를 동반한 천둥구름",
          "폭우를 동반한 천둥구름",
          "약한 천둥구름",
          "천둥구름",
          "강한 천둥구름",
          "불규칙적 천둥구름",
          "약한 연무를 동반한 천둥구름",
          "연무를 동반한 천둥구름",
          "강한 안개비를 동반한 천둥구름",
          "가벼운 안개비",
          "안개비",
          "강한 안개비",
          "가벼운 적은비",
          "적은비",
          "강한 적은비",
          "소나기와 안개비",
          "강한 소나기와 안개비",
          "소나기",
          "악한 비",
          "중간 비",
          "강한 비",
          "매우 강한 비",
          "극심한 비",
          "우박",
          "약한 소나기 비",
          "소나기 비",
          "강한 소나기 비",
          "불규칙적 소나기 비",
          "가벼운 눈",
          "눈",
          "폭설",
          "진눈깨비",
          "소나기 진눈깨비",
          "약한 비와 눈",
          "비와 눈",
          "약한 소나기 눈",
          "소나기 눈",
          "강한 소나기 눈",
          "박무",
          "연기",
          "연무",
          "모래 먼지",
          "안개",
          "모래",
          "먼지",
          "화산재",
          "돌풍",
          "토네이도",
          "구름 한 점 없는 맑은 하늘",
          "약간의 구름이 낀 하늘",
          "드문드문 구름이 낀 하늘",
          "구름이 거의 없는 하늘",
          "구름으로 뒤덮인 흐린 하늘",
          "토네이도",
          "태풍",
          "허리케인",
          "한랭",
          "고온",
          "바람부는",
          "우박",
          "바람이 거의 없는",
          "약한 바람",
          "부드러운 바람",
          "중간 세기 바람",
          "신선한 바람",
          "센 바람",
          "돌풍에 가까운 센 바람",
          "돌풍",
          "심각한 돌풍",
          "폭풍",
          "강한 폭풍",
          "허리케인",
        ];
        for (var i = 0; i < w_id_arr.length; i++) {
          if (w_id_arr[i] == w_id) {
            return w_kor_arr[i];
            break;
          }
        }
        return "none";
      }

      //  최대 기온, 최저 기온
      let tempMax = parseInt(data.main.temp_max - 273.15);
      let tempMin = parseInt(data.main.temp_min - 273.15);
      let tempMaxEl = document.querySelector(".main_box_text_6");
      let tempMinEl = document.querySelector(".main_box_text_7");
      let tempMaxMinEl = document.querySelector(".max_min_text");
      let tempMaxMinEl2 = document.querySelector(".max_min_text2");
      let tempMaxMinEl3 = document.querySelector(".max_min_text3");
      let tempMaxMinEl4 = document.querySelector(".max_min_text4");
      let tempMaxMinEl5 = document.querySelector(".max_min_text5");
      let tempMaxMinEl6 = document.querySelector(".max_min_text6");
      let tempMaxMinEl7 = document.querySelector(".max_min_text7");
      let tempMaxMinEl8 = document.querySelector(".max_min_text8");
      tempMaxEl.innerHTML = `H&nbsp:&nbsp${tempMax}&deg`;
      tempMinEl.innerHTML = `L&nbsp:&nbsp${tempMin}&deg`;
      tempMaxMinEl.innerHTML = `${tempMax} / ${tempMin}`;
      tempMaxMinEl2.innerHTML = `${tempMax - 2} / ${tempMin - 2}`;
      tempMaxMinEl3.innerHTML = `${tempMax - 1} / ${tempMin - 1}`;
      tempMaxMinEl4.innerHTML = `${tempMax - 2} / ${tempMin - 3}`;
      tempMaxMinEl5.innerHTML = `${tempMax} / ${tempMin}`;
      tempMaxMinEl6.innerHTML = `${tempMax - 1} / ${tempMin - 2}`;
      tempMaxMinEl7.innerHTML = `${tempMax - 2} / ${tempMin - 3}`;
      tempMaxMinEl8.innerHTML = `${tempMax - 3} / ${tempMin - 4}`;

      // 날씨 아이콘
      let wIconEl = document.querySelector(".today_img");
      let weather_icon = data.weather[0].icon;
      let w_icon_src = wIcon(weather_icon);
      wIconEl.src = w_icon_src;
      function wIcon(weather_icon) {
        var w_icon_arr = [
          "01d",
          "01n",
          "02d",
          "02n",
          "03d",
          "03n",
          "04d",
          "04n",
          "09d",
          "09n",
          "10d",
          "10n",
          "11d",
          "11n",
          "13d",
          "13n",
          "50d",
          "50n",
        ];
        var w_icon_src_arr = [
          "../images/clear_sky_d.svg",
          "../images/clear_sky_n.svg",
          "../images/few_clouds_d.svg",
          "../images/few_clouds_n.svg",
          "../images/scattered_clouds_d.svg",
          "../images/scattered_clouds_n.svg",
          "../images/broken_clouds_d.svg",
          "../images/broken_clouds_n.svg",
          "../images/shower_rain_d.svg",
          "../images/shower_rain_n.svg",
          "../images/rain_d.svg",
          "../images/rain_n.svg",
          "../images/thunderstorm_d.svg",
          "../images/thunderstorm_n.svg",
          "../images/snow_d.svg",
          "../images/snow_n.svg",
          "../images/mist_d.svg",
          "../images/mist_n.svg",
        ];
        for (var i = 0; i < w_icon_arr.length; i++) {
          if (w_icon_arr[i] == weather_icon) {
            return w_icon_src_arr[i];
            break;
          }
        }
        return "none";
      }

      // 일출, 일몰
      let sunRiseEl = document.querySelector(".sunrise_text");
      let sunRise = data.sys.sunrise;
      let sunRiseTrans = Unix_timestamp(sunRise);
      sunRiseEl.innerHTML = `${sunRiseTrans}`;

      let sunSetEl = document.querySelector(".sunset_text");
      let sunSet = data.sys.sunset;
      let sunSetTrans = Unix_timestamp(sunSet);
      sunSetEl.innerHTML = `${sunSetTrans}`;

      function Unix_timestamp(t) {
        let date = new Date(t * 1000);
        let hour = date.getHours();
        let minute = date.getMinutes();
        let pe = "오전";
        if (hour == 0) {
          hour = 12;
        }
        if (hour > 12) {
          hour = hour - 12;
          pe = "오후";
        }
        return `${pe} ${hour}:${minute}`;
      }

      // 습도
      let humidity = data.main.humidity;
      let humidityEl = document.querySelector(".humidity");
      humidityEl.innerHTML = `${humidity}%`;

      // 풍속
      let wind = data.wind.speed;
      let windEl = document.querySelector(".wind");
      windEl.innerHTML = `${wind}m/s`;

      // 날씨 배경
      let video_src = video(weather_icon);
      console.log(video_src);
      const videoEl = document.querySelector(".video");
      videoEl.src = video_src;
      console.log(videoEl.src);

      function video(weather) {
        var video_arr = [
          "01d",
          "01n",
          "02d",
          "02n",
          "03d",
          "03n",
          "04d",
          "04n",
          "09d",
          "09n",
          "10d",
          "10n",
          "11d",
          "11n",
          "13d",
          "13n",
          "50d",
          "50n",
        ];
        var video_src_arr = [
          "../video/clear_sky.mp4",
          "../video/clear_sky.mp4",
          "../video/few_clouds.mp4",
          "../video/few_clouds.mp4",
          "../video/scattered_clouds.mp4",
          "../video/scattered_clouds.mp4",
          "../video/broken_clouds.mp4",
          "../video/broken_clouds.mp4",
          "../video/shower_rain.mp4",
          "../video/shower_rain.mp4",
          "../video/rain.mp4",
          "../video/rain.mp4",
          "../video/thunderstorm.mp4",
          "../video/thunderstorm.mp4",
          "../video/snow.mp4",
          "../video/snow.mp4",
          "../video/mist.mp4",
          "../video/mist.mp4",
        ];
        for (var i = 0; i < video_arr.length; i++) {
          if (video_arr[i] == weather) {
            return video_src_arr[i];
            break;
          }
        }
        return "none";
      }
    });
}
getWeatherData("Jeju City");
