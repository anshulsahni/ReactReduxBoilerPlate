import { connect } from 'react-redux';
import AppView from '../Presentational/AppView';

const mapStateToProps = state => {
  return {
    example: state.example
  }
}

export default connect(mapStateToProps)(AppView);
