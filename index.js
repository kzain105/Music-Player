let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let recent_volume = document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');
let track_image = document.querySelector('#track_image');
let auto_play = document.querySelector('#auto');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let artist = document.querySelector('#artist');

let timer;
let autoPlay = 0;
let index_no = 0;

let playing_song = false;

let track = document.createElement('audio');

let All_song = [
    {
        name: 'The Last Ride',
        path: 'music/the-last-ride.mp3',
        img: 'img/the-last-ride.jpg',
        singer: 'Sindhu Moosewala',
    },

    {
        name: 'We Rollin',
        path: 'music/we-rollin.mp3',
        img: 'img/we-rollin.jpg',
        singer: 'Subh Baller',
    }, 

    {
        name: 'Expert Jatt',
        path: 'music/expert-jutt.mp3',
        img: 'img/expert-jutt.jpg',
        singer: 'Mista Baaz',
    },

    {
        name: 'Sitaray Humaray',
        path: 'music/Sab Sitaray Humaray.mp3',
        img: 'img/sab.jpg',
        singer: 'Shae Gill, Asim Azhar, & Faris Shafi',
    },
];

// Functions 

function loadTrack(index_no){
    track.src = All_song[index_no].path;
    title.innerHTML = All_song[index_no].name;
    track_image.src = All_song[index_no].img;
    artist.innerHTML = All_song[index_no].singer;
    track.load();

    total.innerHTML = All_song.length;
    present.innerHTML = index_no + 1;
    timer = setInterval(range_slider, 1000);
}

loadTrack(index_no);

//Checking the song plays \\ not

function justplay(){
    if(playing_song == false){
        playsong();

    }else {
        pausesong();
    }
}

//play song

function playsong(){
    track.play();
    playing_song = true;
    play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'
}

// pause song

function pausesong(){
    track.pause();
    playing_song = false;
    play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>'
}

//next song

function next_song(){
    if(index_no < All_song.length - 1){
        index_no += 1;
        loadTrack(index_no);
        playsong();
        

    }else{
        index_no = 0;
        loadTrack(index_no);
        pausesong();
    }
}

// previous song

let previous_song = () =>{
    if(index_no > 0){
        index_no -= 1
        loadTrack(index_no);
        playsong();

    } else {
        index_no = All_song.length;
        loadTrack(index_no);
        playsong();
    }
}

let volume_change = () => {
    volume_show.innerHTML = recent_volume.value;
    track.volume = recent_volume.value / 100;
}

// change slider position 
let change_duration = () => {
	slider_position = track.duration * (slider.value / 100);
	track.currentTime = slider_position;
}

function range_slider() {
	let position = 0;

	// update slider position
	if (!isNaN(track.duration)) {
		position = track.currentTime * (100 / track.duration);
		slider.value = position;
	}
}