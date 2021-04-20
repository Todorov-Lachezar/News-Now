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
        win = window
        recorder.start().then(() => {})
    } catch (error) {
        win = {} 
        console.log(error);
    } 
}

function stopRecord(recorder) {
    try {
        recorder.stop().getMp3().then(([buffer, blob]) => {
            const file = new File(buffer, 'recording.mp3', {
            type: blob.type,
            lastModified: Date.now()
        });
        const player = new Audio(URL.createObjectURL(file));
        player.play();

        }).catch((e) => {
            alert('We could not retrieve your audios');
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
