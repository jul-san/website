import React, { useState } from 'react';
import { Stack, Box, Container, Image, Radio, RadioGroup, useToast } from '@chakra-ui/react';
import Navbar from '../../../components/Navbar'; // Assuming you have this component created
import Confetti from 'react-confetti';

const Valentine: React.FC = () => {
    const [answer, setAnswer] = useState<string | undefined>(undefined);
    const toast = useToast();
    const phrases = ["No", "Are you sure?", "Pookie please 🥺", "I'm gonna cry...😢", "Don't do this :(", "💔"];
    const [phraseIndex, setPhraseIndex] = useState(0); // Start with the first phrase
    const [showConfetti, setShowConfetti] = useState<boolean>(false);

    const gifUrls = [
        "https://wannabemyvalentine.netlify.app/img/cat-yes.jpg",
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-X1N08sDoEKA%2FTo14hhVbETI%2FAAAAAAAACro%2FkHX79YSDBFU%2Fs1600%2F3d%2Bgif%2Banimation%2Bblogspot%2Bfree%2Bdownload%2BCats%2Bin%2BLove%2BAnimated%2BGifs%2BAnimated%2BGifs%2Bof%2BCats%2Bin%2BLove%2BPictures%2Band%2Banimated%2Bimages%2Bof%2BCats%2Bin%2BLove.%2BAnimated%2Bgifs%2Band%2Banimations%2Bgifts%2BCats%2Bin%2BLove.gif&f=1&nofb=1&ipt=ea23c4aaface102ac3aaf6c35c777b35dcf213292f315df1d79c5e3f2e7c80fb&ipo=images",
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia1.tenor.com%2Fimages%2F12303bb80f998c5b5720386c26ceff20%2Ftenor.gif%3Fitemid%3D14656677&f=1&nofb=1&ipt=f296cd8128ce809fa19334f6f811b01ad85ae81fb5b6491e2ffc69e15aeca0f2&ipo=images"
    ];

    const [noRadioButtonPosition, setNoRadioButtonPosition] = useState<React.CSSProperties>({
        marginLeft: '8px',
        transition: 'top 0.5s ease, left 0.5s ease',
    });

    const handleRadioChange = (value: string) => {
        setAnswer(value);
        if (value === 'yes') {
          toast({
            title: 'YAYYYYYYYYYYYY!',
            description: ':D',
            status: 'success',
            duration: 10000,
            isClosable: true,
          });
          setShowConfetti(true);
          // Optionally, set a timeout to stop the confetti after a few seconds
        } else {
          // Ensure confetti is not shown if "No" is selected
          setShowConfetti(false);
        }
      };
  
    // Function to handle "No" radio button clicks
    const handleNoRadioClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.preventDefault(); // Prevent the radio from being selected on click
        const nextIndex = (phraseIndex + 1) % phrases.length;
        setPhraseIndex(nextIndex);
        // Calculate new random positions for the "No" button
        const newPosition: React.CSSProperties = {
            position: 'absolute', // Use 'relative' to keep within the RadioGroup or adjust as needed
            top: `${Math.random() * 100 + 50}%`, // Ensure some margin from edges
            left: `${Math.random() * 80 + 10}%`,
        };

        setNoRadioButtonPosition(newPosition);
    };
  
    return (
      <>
        <Navbar />
        {showConfetti && <Confetti />}

            <Container paddingTop='10px' paddingBottom='20px'>
                <Box textAlign="center" position="relative" minHeight="300px" maxWidth="600px" margin="0 auto" padding="20px">
                    <p>Will you be my Valentine?</p>
                    <RadioGroup onChange={handleRadioChange} value={answer}>
                        <Stack direction="row" spacing={4} justifyContent="center" alignItems="center">
                            <Radio value="yes">Yes</Radio>
                            {answer !== 'yes' && (
                                <Box style={noRadioButtonPosition} onClick={handleNoRadioClick}>
                                    <Radio value="no">{phrases[phraseIndex]}</Radio>
                                </Box>
                            )}
                        </Stack>
                    </RadioGroup>
                    {answer === 'yes' && gifUrls.map((url, index) => (
                    <Image key={index} src={url} alt={`Valentine Celebration ${index + 1}`} boxSize="250px" m="auto" />
                ))}
                </Box>
            </Container>
      </>
    );
  };
  
  export default Valentine;

