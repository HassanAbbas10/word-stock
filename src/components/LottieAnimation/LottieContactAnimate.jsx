import Lottie from 'react-lottie';
import animationData from '../../lib/ContactAnimate.json';

const LottieAContactnimate = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return <Lottie options={defaultOptions} height={400} width={800} />;
};

export default LottieAContactnimate