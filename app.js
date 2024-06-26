// search masterplayer open
const music = new Audio("test.mp3");
const songs = [
  {
    id: "zani",
    songName: `zany_(have you seen a God)_<br>Prod_Space Burstice 
    <div class="subtitle"></div>
  </h5>`,
    poster: "img/zani.jpg",
  },

  {
    id: "Smart-Kizzy",
    songName: `Smart-Kizzy_(Shimayam)_<br>Prod_Space Burstice 
    <div class="subtitle"></div>
  </h5>`,
    poster: "img/Smart-Kizzy.jpg",
  },
];

Array.from(document.getElementsByClassName("songItem")).forEach(
  (element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].poster;
    element.getElementsByTagName("h2")[0].innerHTML = songs[i].songName;
  }
);

let masterPlay = document.getElementById("masterPlay");
let wave = document.getElementsByClassName("wave")[0];
masterPlay.addEventListener("click", () => {
  if (music.paused || music.currentTime <= 0) {
    music.play();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
    wave.classList.add("active2");
  } else {
    music.pause();
    masterPlay.classList.add("fa-play");
    masterPlay.classList.remove("fa-pause");
    wave.classList.remove("active2");
  }
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("fa-regular")).forEach(
    (element) => {
      element.classList.add("fa-play-circle");
      element.classList.remove("fa-pause-circle");
    }
  );
};

let index = 0;
let poster_master_play = document.getElementById("poster_master_play");
let title = document.getElementById("title");
Array.from(document.getElementsByClassName("fa-regular")).forEach((element) => {
  element.addEventListener("click", (e) => {
    index = e.target.id;
    makeAllPlays();
    e.target.classList.remove("fa-play-circle");
    e.target.classList.add("fa-pause-circle");
    music.src = `songs/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele) => {
      return ele.id == index;
    });

    song_title.forEach((ele) => {
      let { songName } = ele;
      title.innerHTML = songName;
    });
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
    wave.classList.add("active2");
    music.addEventListener("ended", () => {
      masterPlay.classList.add("fa-play");
      masterPlay.classList.remove("fa-pause");
      wave.classList.remove("active2");
    });
  });
});

let currentStart = document.getElementById("currentStart");
let currentEnd = document.getElementById("currentEnd");
let seek = document.getElementById("seek");
let bar2 = document.getElementById("bar2");
let dot = document.getElementsByClassName("dot")[0];

music.addEventListener("timeupdate", () => {
  let music_curr = music.currentTime;
  let music_dur = music.duration;

  let min = Math.floor(music_dur / 60);
  let sec = Math.floor(music_dur % 60);
  if (sec < 10) {
    sec = `0${sec}`;
  }
  currentEnd.innerText = `${min}:${sec}`;
  let min1 = Math.floor(music_curr / 60);
  let sec1 = Math.floor(music_curr % 60);
  if (sec1 < 10) {
    sec1 = `0${sec1}`;
  }
  currentStart.innerText = `${min1}:${sec1}`;
});
// search masterplayer open
// search engine open
const search = () => {
  const searchbox = document.getElementById("search-item").value.toUpperCase();
  const storeitems = document.getElementById("product-list");
  const product = document.querySelectorAll(".product");
  const pname = document.getElementsByTagName("h2");

  for (var i = 0; i < pname.length; i++) {
    let match = product[i].getElementsByTagName("h2")[0];

    if (match) {
      let textvalue = match.textContent || match.innerHTML;

      if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
        product[i].style.display = "";
      } else {
        product[i].style.display = "none";
      }
    }
  }
};
// search engine close

// Phone size open
const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});
// phone size close
