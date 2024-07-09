
import Lottie from 'react-lottie';
import animationData from '../../lib/animatebook.json';

const LottieAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return <Lottie options={defaultOptions} height={220} width={600} />;
};

export default LottieAnimation;
