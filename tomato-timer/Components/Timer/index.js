import { connect } from 'react-redux';
import Timer from './presenter';

function mapStateToProps(state) {
  const { isPlaying, elasedTime, timerDuration } = state;
  return {
    isPlaying,
    elasedTime,
    timerDuration
  }
}

export default connect(mapStateToProps)(Timer);