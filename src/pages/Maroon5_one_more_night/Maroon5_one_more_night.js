import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import mp3_file from 'C:/Users/david/Desktop/ChineseTutor/rxshell-master/src/pages/Maroon5_one_more_night/Maroon-5-one-more-night-mp3.mp3'

const lyrics = `
"One More Night" <br>

You and I go hard at each other like we're going to war <br>
You and I go rough, we keep throwing things and slamming the door <br>
You and I get so damn dysfunctional, we stopped keeping score <br>
You and I get sick, yeah, I know that we can't do this no more <br>

Yeah, but baby there you go again, there you go again, making me love you <br>
Yeah, I stopped using my head, using my head, let it all go <br>
Got you stuck on my body, on my body, like a tattoo <br>
And now I'm feeling stupid, feeling stupid, crawling back to you <br>

So I cross my heart and I hope to die <br>
That I'll only stay with you one more night <br>
And I know I said it a million times <br>
But I'll only stay with you one more night <br>

Try to tell you "no" but my body keeps on telling you "yes" <br>
Try to tell you "stop", but your lipstick got me so out of breath <br>
I'll be waking up in the morning, probably hating myself <br>
And I'll be waking up, feeling satisfied but guilty as hell <br>

Yeah, but baby there you go again, there you go again, making me love you <br>
(Making me love you) <br>
Yeah, I stopped using my head, using my head, let it all go <br> 
(I let it all go) <br>
Got you stuck on my body, on my body, like a tattoo <br>
(Like a tattoo, yeah) <br>
And now I'm feeling stupid, feeling stupid, crawling back to you <br>

So I cross my heart and I hope to die <br>
(Yeah) <br>
That I'll only stay with you one more night <br>
(Oh) <br>
And I know I said it a million times <br>
(Yeah) <br>
But I'll only stay with you one more night <br>
(Yeah) <br>

Yeah, baby, give me one more night <br>
Yeah, baby, give me one more night (whoa, yeah) <br>
Yeah, baby, give me one more night (oh, yeah, yeah) <br>

Yeah, but baby there you go again, there you go again making me love you <br>
Yeah, I stopped using my head, using my head, let it all go <br>
Got you stuck on my body, on my body like a tattoo <br>
Yeah, yeah, yeah, yeah <br>

So I cross my heart and I hope to die <br>
(Oh oh oh oh, oh oh oh oh) <br>
That I'll only stay with you one more night <br>
(Oh oh oh oh oh oh) <br>
And I know I said it a million times <br>
(Oh, I said it a million times) <br>
But I'll only stay with you one more night <br>
(Yeah, baby give me one more night) <br>

So I cross my heart and I hope to die (yeah, yeah) <br>
That I'll only stay with you one more night (yeah, yeah) <br>
And I know I said it a million times (yeah, yeah) <br>
But I'll only stay with you one more night (yeah, yeah) <br>

I don't know, whatever <br>
`;


export default function Maroon5_one_more_night() {
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
