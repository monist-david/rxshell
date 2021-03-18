import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import mp3_file from 'C:/Users/david/Desktop/ChineseTutor/rxshell-master/src/pages/Maroon5_sugar/Maroon 5 - Sugar.mp3'


const lyrics = `
Sugar Lyrics Maroon 5 <br>

I’m hurting, baby, I’m broken down <br>
I need your loving, loving, I need it now <br>
When I’m without you <br>
I’m something weak <br>
You got me begging <br>
Begging, I’m on my knees <br>
I don’t wanna be needing your love <br>
I just wanna be deep in your love <br>
And it’s killing me when you’re away <br>
Ooh, baby, <br>
‘Cause I really don’t care where you are <br>
I just wanna be there where you are <br>
And I gotta get one little taste <br>
Your sugar <br>
Yes, please <br>
Won’t you come and put it down on me <br>
I’m right here, ’cause I need <br>
Little love and little sympathy <br> 
Yeah you show me good loving <br>
Make it alright <br>
Need a little sweetness in my life <br>
Your sugar <br>
Yes, please <br>
Won’t you come and put it down on me <br>
My broken pieces <br>
You pick them up <br>
Don’t leave me hanging, hanging <br>
Come give me some <br>
When I’m without ya <br>
I’m so insecure <br> 
You are the one thing <br>
The one thing, I’m living for <br>
I don’t wanna be needing your love <br>
I just wanna be deep in your love <br>
And it’s killing me when you’re away <br>
Ooh, baby, <br>
‘Cause I really don’t care where you are <br>
I just wanna be there where you are <br>
And I gotta get one little taste <br>
Your sugar <br>
Yes, please <br>
Won’t you come and put it down on me <br>
I’m right here, ’cause I need <br>
Little love and little sympathy <br>
Yeah you show me good loving <br>
Make it alright <br>
Need a little sweetness in my life <br>
Your sugar (your sugar) <br>
Yes, please (yes, please) <br>
Won’t you come and put it down on me <br>
Yeah <br>
I want that red velvet <br>
I want that sugar sweet <br>
Don’t let nobody touch it <br>
Unless that somebody’s me <br>
I gotta be a man <br>
There ain’t no other way <br>
‘Cause girl you’re hotter than southern California Bay <br>
I don’t wanna play no games <br>
I don’t gotta be afraid <br>
Don’t give all that shy shit <br>
No make up on, that’s my <br>
Sugar <br>
Yes, please <br>
Won’t you come and put it down on me (down on me) <br>
Oh, right here (right here), <br>
‘Cause I need (I need) <br>
Little love and little sympathy <br>
Yeah you show me good loving <br>
Make it alright <br>
Need a little sweetness in my life <br>
Your sugar (sugar) <br>
Yes, please (yes, please) <br>
Won’t you come and put it down on me <br>
Your sugar <br>
Yes, please <br>
Won’t you come and put it down on me <br>
I’m right here, ’cause I need <br>
Little love and little sympathy <br>
Yeah you show me good loving <br>
Make it alright <br>
Need a little sweetness in my life <br>
Your sugar <br>
Yes, please <br>
Won’t you come and put it down on me <br>
(Down on me, down on me) <br>
`;

export default function Maroon5_sugar() {
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
