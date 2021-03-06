import React, { useState } from 'react';
import { IconButton, Pane, Text, RecordIcon } from 'evergreen-ui';
import { motion } from 'framer-motion';
import axios from 'axios';
import { useRouter } from 'next/dist/client/router';

const MicRecorder = require('mic-recorder-to-mp3');

const recorder = new MicRecorder({
  bitRate: 128
});

let isRecording: boolean = false;
var clicked: boolean = false;

const HomePage: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const startRecord = (recorder) => {
    if (loading) return;

    let win;
    if (!clicked) {
      var text = document.getElementById('click_me');
      text.innerText = 'Click again to search for news!';
      clicked = true;
    } else {
      var text = document.getElementById('click_me');
      text.innerText = 'Click me and ask for some news!';
      stopRecord(recorder);
      clicked = false;
    }
    try {
      win = window;
      recorder.start().then(() => {});
      isRecording = true;
    } catch (error) {
      win = {};
      console.log(error);
    }
  };

  const stopRecord = (recorder) => {
    setLoading(true);

    isRecording = false;
    try {
      recorder
        .stop()
        .getMp3()
        .then(([buffer, blob]) => {
          const file = new File(buffer, 'recording.mp3', {
            type: blob.type,
            lastModified: Date.now()
          });

          const formData = new FormData();
          formData.append('file', file);

          axios
            .post(`${process.env.NEXT_PUBLIC_API_URL}/search`, formData)
            .then(({ data }) => {
              router.push(`/results/${data.id}`);
            })
            .catch((e) => {
              console.error(e);
              setLoading(false);
            });

          // const player = new Audio(URL.createObjectURL(file));
          // player.play();
        })
        .catch((e) => {
          alert('We could not retrieve your audios');
          console.log(e);
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <Pane
      width="100%"
      minHeight="100vh"
      maxHeight="100%"
      paddingY={20}
      background="blueTint"
    >
      <link rel="stylesheet" href="/styles/styles.css" />

      <Pane display="flex" width="100%" justifyContent="center" marginTop={250}>
        <Text fontSize="20px" fontWeight="bold" id="click_me">
          Click me and ask for some news!{' '}
        </Text>
      </Pane>
      <Pane display="flex" width="100%" justifyContent="center" marginTop={20}>
        <motion.div
          drag="x"
          dragConstraints={{ left: -100, right: 100 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9, color: '#FF0000' }}
        >
          <IconButton
            icon={RecordIcon}
            intent="danger"
            height={100}
            borderRadius="100%"
            onClick={() => startRecord(recorder)}
          />
        </motion.div>
      </Pane>
    </Pane>
  );
};

export default HomePage;
