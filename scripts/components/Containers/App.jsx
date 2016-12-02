import { connect } from 'react-redux';
import AppView from '../Presentational/AppView';

const mapStateToProps = state => ({
  example: state.example,
});

export default connect(mapStateToProps)(AppView);
