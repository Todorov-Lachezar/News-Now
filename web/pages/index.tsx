import React from 'react';
import Image from 'next/image';
import { Pane, Text } from 'evergreen-ui';
import Container from '../components/container';
import Header from '../components/header';
import { motion } from "framer-motion"

const MicRecorder = require('mic-recorder-to-mp3');

const recorder = new MicRecorder({
    bitRate: 128
})

let isRecording:boolean = false
var clicked:boolean = false

function startRecord(recorder) {
    let win
    if (!clicked) {
        var text = document.getElementById("click_me")
        text.innerText = "Click again to search for news!"
        clicked = true
    } else {
        var text = document.getElementById("click_me")
        text.innerText = "Click me and ask for some news!"
        stopRecord(recorder)
        clicked = false
    }
    try {
        win = window
        recorder.start().then(() => {})
        isRecording = true
    } catch (error) {
        win = {} 
        console.log(error);
    } 
}

function stopRecord(recorder) {
    isRecording = false;   
    try {
        recorder.stop().getMp3().then(([buffer, blob]) => {
            const file = new File(buffer, 'recording.mp3', {
            type: blob.type,
            lastModified: Date.now()
        });
        const player = new Audio(URL.createObjectURL(file))
        player.play()

        }).catch((e) => {
            alert('We could not retrieve your audios')
            console.log(e)
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
    background="blueTint">
        <link rel="stylesheet" href="/styles/styles.css"/>
        <Container>
            <Header />
        </Container>
        <Pane display="flex" width="100%" justifyContent="center" marginTop={250}>
            <Text fontSize="20px" fontWeight="bold" id="click_me">
             Click me and ask for some news! </Text>
        </Pane>
        <Pane display="flex" width="100%" justifyContent="center" marginTop={20}>  
            <motion.div drag="x"
                        dragConstraints={{ left: -100, right: 100 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9, color: "#FF0000" }}>
                <Image src="/mic_off.png"
                        alt="mic_button"
                        width={120}
                        height={120} onClick={() => startRecord(recorder)}
                        className="img-container"
                        id="mic_img"
                        />
            </motion.div>
        </Pane>
    </Pane>
);

export default HomePage;
