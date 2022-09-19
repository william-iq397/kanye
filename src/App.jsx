import React from "react";
import "./index.css";

function App() {
  return (
    <>
      <div className="inner-container">
        <div className="video-container">
          <h1>Heartless Lyrics</h1>
          <h4>Kanye West</h4>
          <div className="inner-video">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Co0tTeuUVhU"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="lyrics-container">
          <pre className="lyrics">
            {`In the night I hear 'em talk
The coldest story ever told
Somewhere far along this road

He lost his soul to a woman so heartless
How could you be so heartless?
Oh, how could you be so heartless?

How could you be so, cold as the winter wind when it breeze,
yo Just remember that you talkin' to me though
You need to watch the way you talkin' to me, yo
I mean after all the things that we've been through
I mean after all the things we got into
Ayo, I know of some things that you ain't told me
Ayo, I did some things, but that's the old me
And now you wanna get me back and you gon' show me
So you walk around like you don't know me
You got a new friend, well, I got homies
But in the end it's still so lonely
In the night I hear 'em talk
The coldest story ever told
Somewhere far along this road
He lost his soul to a woman so heartless
How could you be so heartless?
Oh, how could you be so heartless?
How could be so Dr. Evil?
You bringin' out a side of me that I don't know
I decided we weren't gon' speak so
Why we up 3:00 a.m. on the phone?
Why do she be so mad at me for?
Homie, I don't know, she's hot and cold
I won't stop, won't mess my groove up
'Cause I already know how this thing go
You run and tell your friends that you're leaving me (hey)
They say that they don't see what you see in me (hey)
You wait a couple months then you gon' see (hey)
You'll never find nobody better than me
In the night I hear 'em talk
The coldest story ever told
Somewhere far along this road
He lost his soul to a woman so heartless
How could you be so heartless?
Oh, how could you be so heartless?
Talk and talk and talk and talk
Baby let's just knock it off
They don't know what we been through
They don't know 'bout me and you
So I got something new to see
And you just gon' keep hatin' me
And we just gon' be enemies
I know you can't believe
I could just leave it wrong
And you can't make it right
I'm gon' take off tonight
Into the night
In the night I hear 'em talk
The coldest story ever told
Somewhere far along this road
He lost his soul to a woman so heartless
How could you be so heartless?
Oh, how could you be so heartless?
`}
          </pre>
        </div>
      </div>
    </>
  );
}

export default App;
