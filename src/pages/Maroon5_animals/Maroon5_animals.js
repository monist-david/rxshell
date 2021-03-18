import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import mp3_file from 'C:/Users/david/Desktop/ChineseTutor/rxshell-master/src/pages/Maroon5_animals/Maroon-5-Animals.mp3'

const lyrics = `
Baby I'm preying on you tonight <br>
Hunt you down eat you alive <br>
Just like animals <br>
Animals <br>
Like animals-mals <br>
Maybe you think that you can hide <br>
I can smell your scent for miles <br>
Just like animals <br>
Animals <br>
Like animals-mals <br>
Baby I'm <br>
So what you trying to do to me <br>
It's like we can't stop, we're enemies <br>
But we get along when I'm inside you, eh <br>
You're like a drug that's killing me <br>
I cut you out entirely <br>
But I get so high when I'm inside you <br>
Yeah you can start over you can run free <br>
You can find other fish in the sea <br>
You can pretend it's meant to be <br>
But you can't stay away from me <br>
I can still hear you making that sound <br>
Taking me down rolling on the ground <br>
You can pretend that it was me <br>
But no, oh <br>
Baby I'm preying on you tonight <br>
Hunt you down eat you alive <br>
Just like animals <br>
Animals <br>
Like animals <br>
Maybe you think that you can hide <br>
I can smell your scent for miles <br>
Just like animals <br>
Animals <br>
Like animals-mals <br>
Baby I'm <br>
So if I run it's not enough <br>
You're still in my head forever stuck <br>
So you can do what you wanna do, eh <br>
I love your lies I'll eat 'em up <br>
But don't deny the animal <br>
That comes alive when I'm inside you <br>
Yeah you can start over you can run free <br>
You can find other fish in the sea <br>
You can pretend it's meant to be <br>
But you can't stay away from me <br>
I can still hear you making that sound <br>
Taking me down rolling on the ground <br>
You can pretend that it was me <br>
But no, oh <br>
Baby I'm preying on you tonight <br>
Hunt you down eat you alive <br>
Just like animals <br>
Animals <br>
Like animals-mals <br>
Maybe you think that you can hide <br>
I can smell your scent for miles <br>
Just like animals <br>
Animals <br>
Like animals-mals <br>
Baby I'm <br>
Don't tell no lie, lie lie lie <br>
You can't deny, ny ny ny <br>
The beast inside, side side side <br>
Yeah yeah yeah <br>
No girl don't lie, lie lie lie (No girl don't lie) <br> 
You can't deny, ny ny ny (You can't deny) <br>
The beast inside, side side side <br>
Yeah yeah yeah <br>
Yo, <br>
Whoa <br>
Whoa <br>
Just like animals <br>
Animals <br>
Like animals-mals <br>
Just like animals (Yeah) <br>
Animals (Yeah) <br>
Like animals-mals (Yeah) <br>
Ow <br>
Baby I'm preying on you tonight <br>
Hunt you down eat you alive <br>
Just like animals <br>
Animals <br>
Like animals-mals <br>
Maybe you think that you can hide <br>
I can smell your scent for miles <br>
Just like animals <br>
Animals <br>
Like animals-mals <br>
Baby I'm <br>
Don't tell no lie, lie lie lie <br>
You can't deny, ny ny ny <br>
The beast inside, side side side <br>
Yeah yeah yeah <br>
No girl don't lie, lie lie lie (No girl don't lie) <br>
You can't deny, ny ny ny (You can't deny) <br>
The beast inside, side side side <br>
Yeah yeah yeah <br>
`;


export default function Maroon5_animals() {
  return (
    <div className="container">
      <h1>Hello, audio player!</h1>
      <AudioPlayer
        src={mp3_file}
        // Try other props!
      />
    <h4 dangerouslySetInnerHTML={{__html: lyrics}} style={{'text-align': 'center'}} />
    </div>
  );
}
