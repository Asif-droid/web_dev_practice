
let notes=['C','D','E','F','G','A','B'];
let keybord=document.querySelector('.piano_keyboard');
let play_btn=document.querySelector('.piano_play_btn');
let song_select=document.querySelector('.piano_song');
let titanic=['G4',,,'G4','G4',,'G4',,'F#4',,'G4',,,,'G4',,'F#4',,'G4',,,,'A4',,'B4',,,,'A4'
,,,,'G4',,,'G4','G4',,'G4',,'F#4',,'G4',,,,'G4',,'D4',,,,,
'G4',,,,'G4','A4',,,'D4',,'D5',,,'C5',,'B4',,'A4',,,'B4',,'C5',,'B4',,,'A4',,'G4',,'F#4',,'G4',,,
,'G4',,'F#4',,'G4',,,'A4',,'B4',,,'A4',,,'G4',,,,];

let hall_fame_r=[,,,'A#4','A4','A#4','A4','A#4','A4','A#4','A4','A#4','F#3',
'F#5','F#3','A#4','F#3','F#5','F#3',,,,'D4','A#3','F#5','A#3','F5','A#3',
'C4','F3','C4','F3','F5','F3','C4','F3','F5','F3',,,,];
let hall_fame_l=['G2',,'F#2',,,'A#2',,'F2',,,];

let demon=[,,'A#4','A#4','A#4','A#4',,,,'G4',,,'A#4',,'A#4','A#4','A#4',,'F#4',,,
'D4',,,'C4',,'G4','G4','G4','G4',,'G4',,'G#4',,,'G#4','G#4','G#4','G#4',,,'G4',,
'G4',,,'F#4','F#4','F#4','F#4',,,'F#4',,,'D4',,,'D4','D4','D4','D4',,,'C4',,,'C4',,,
'G4','G4','G4','G4',,,'G4',,,'G#4',,,,'G#4','G#4','G#4','G#4',,,'G4',,'G4',,,,];

let d_l=['A#2',,,,,,,,,,,,,'F2',,,,,,,,,,,,,,'G2',,,,,,,,,,,,'G#2',,,];
let happybirthday=['G4','G4','A3',,'G4',,'C5',,'B4',,,,'G4','G4','A3',,'G4',
,'D5',,'C5',,,,'G4','G4','G5',,'E3',,'C5',,'B2',,'A3',,'F5','F5','E5',,'C5',,'D5',,'C5',,,,];
let caribian=['D5',,'D5','D5',,'D5','D5',,'D5','D5','D5','D5'
,'D5',,'D5','D5',,'D5','D5',,'D5','D5','D5','D5'
,'D5',,'D5','D5',,'D5','D5',,'D5','D5','D5','D5'
,'D5',,'D5','D5',,'D5','D5',
,'A5','C5','D5',,'D5',,'D5','E5',
,'F5','F5','F5',,'G5',,'F5','E5',,'D5','C5',,'C5',,'D5'
,'A5','C5','D5',,'D5',,'D5','E5',
,'F5','F5','F5',,'G5',,'F5','E5',,'D5','C5',,'C5',,'D5'
,'A5','C5','D5',,'D5',,'D5',,'F5',,'G5','G5','G5',,'A5',,'A#5','A#5',,'A5','G5',,'A5','F5'
,'D5','E5','F5',,'F5',,'G5',,'A5','D5'
,'D5','E5','F5',,'F5',,'E5','D5',,'E5',,];


let init = ()=>{
    for(let i=1;i<=5;i++){
        for(let j=0;j<7;j++){
            let key=create_key('w',notes[j],i);
            keybord.appendChild(key);
            if(j!=2 && j!=6){
                 key=create_key('b',notes[j],i);
                 let empty_space=document.createElement('div');
                 empty_space.className='empty_space';
                 empty_space.appendChild(key);
                 keybord.appendChild(empty_space);

            }
        }
    }
    

}
play_btn.addEventListener('mousedown',()=>{
    //console.log(dataset)
    let song=song_select.value;
    switch(song){
        case '1':play_song(titanic,3);
                break;
        case '2':play_song(happybirthday,3);
                break;
        case '3':left_hand(hall_fame_l,12);
                right_hand(hall_fame_r,3);
                break;
        case '4':play_song(demon,2);
                left_hand(d_l,2);
                break;
        case '5':play_song(caribian,2);
    }
    
})
let right_hand=(song,tempo)=>{
    let btn;
    let note=0;
    let m_don=new Event('mousedown');
    let m_up=new Event('mouseup');
    let interval=setInterval(()=>{
        if(note<song.length){
            if(btn){
                btn.dispatchEvent(m_up);
            }
            if(song[note]!=null){

            btn=document.querySelector(`[data-latter-notes="${song[note]}"]`);
            console.log(btn);
            btn.dispatchEvent(m_don);

            }
            
            
            note++;

        }else{
            

            clearInterval(interval);
        }


    },tempo*100)
}
let left_hand=(song,tempo)=>{
    let btn;
    let note=0;
    let m_don=new Event('mousedown');
    let m_up=new Event('mouseup');
    let interval=setInterval(()=>{
        if(note<song.length){
            if(btn){
                btn.dispatchEvent(m_up);
            }
            if(song[note]!=null){

            btn=document.querySelector(`[data-latter-notes="${song[note]}"]`);
            console.log(btn);
            btn.dispatchEvent(m_don);

            }
            
            
            note++;

        }else{
            

            clearInterval(interval);
        }


    },tempo*100)

}
let play_song=(song,tempo)=>{
    let btn;
    let note=0;
    let m_don=new Event('mousedown');
    let m_up=new Event('mouseup');
    let interval=setInterval(()=>{
        if(note<song.length){
            if(btn){
                btn.dispatchEvent(m_up);
            }
            if(song[note]!=null){

            btn=document.querySelector(`[data-latter-notes="${song[note]}"]`);
            console.log(btn);
            btn.dispatchEvent(m_don);

            }
            
            
            note++;

        }else{
            

            clearInterval(interval);
        }


    },tempo*100)


}



let create_key=(type,note,octave)=>{
    let key=document.createElement('button');
    key.className=`piano_btn piano_btn_${type}`;
    key.dataset.latterNotes= type == 'w'? note+octave : note+'#'+octave;
    key.dataset.musicnotes= type == 'w'? note+octave : note+'s'+octave;
    key.textContent=key.dataset.latterNotes;
    key.addEventListener('mousedown',()=>{
        playsound(key);
        
        key.classList.add('piano_key_playing');
    })
    key.addEventListener('mouseup',()=>{
        key.classList.remove('piano_key_playing');
    })
    key.addEventListener('mousemove',()=>{
        key.classList.remove('piano_key_playing');
    })
    return key;


}
let playsound=(key)=>{
    console.log(key.dataset.musicnotes);
        
    let audio=document.createElement('audio');
    audio.src='sounds/'+key.dataset.musicnotes+'.mp3';
    audio.play().then(()=>audio.remove());

}
init();
/*
<button class="piano_btn piano_btn_w">C1</button>
            <div class="empty_space">
                <button class="piano_btn piano_btn_b">C#1</button>
            </div>
            
            <button class="piano_btn piano_btn_w">D1</button>
            <div class="empty_space">
                <button class="piano_btn piano_btn_b">D#1</button>
            </div>
            
            <button class="piano_btn piano_btn_w">E</button>
            <button class="piano_btn piano_btn_w">F</button>

*/