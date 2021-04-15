import React from 'react';
import { Pane, Heading, SearchInput } from 'evergreen-ui';
import Container from '../components/container';
import Header from '../components/header';
const MicRecorder = require('mic-recorder-to-mp3');
 
const recorder = new MicRecorder({
    bitRate: 128
});

function startRecord(recorder) {
    let win
    try {
        console.log("something else")
        win = window
        recorder.start().then(() => {

        }).catch((e) => {
            console.error(e);
        });

    } catch (error) {
        win = {} 
        console.log("could not find window");
    } 
}

function stopRecord(recorder) {
    console.log("something")
    try {
        console.log("something")
        recorder.stop().getMp3().then(([buffer, blob]) => {
            // do what ever you want with buffer and blob
            // Example: Create a mp3 file and play
            const file = new File(buffer, 'me-at-thevoice.mp3', {
            type: blob.type,
            lastModified: Date.now()

            
        });
        const player = new Audio(URL.createObjectURL(file));
        player.play();

        }).catch((e) => {
            alert('We could not retrieve your message');
            console.log(e);
        });
    } catch (error) {
        console.log(error)
    }
}

const HomePage: React.FC = () => ( 
    <Pane
    width="100%"
    minHeight="100vh"
    maxHeight="100%"
    paddingY={20}
    background="blueTint"
    >
        <Container>
            <Header />
        </Container>
        <Container>
            <div>
                <button onClick={() => startRecord(recorder)}>record</button>
                <button onClick={() => stopRecord(recorder)}>play</button>
            </div>
        </Container>
    </Pane>
);

export default HomePage;
