import { connect } from 'react-redux';
import { availableOptionsSelector } from './options.selectors.js';
import Options from './Options.jsx';
import { toggleOption } from './option.actions.js';

const mapState = state => ({
  options: availableOptionsSelector(state),
});

const mapDispatch = {
  moveOption: toggleOption,
};

const connector = connect(mapState, mapDispatch);

export default connector(Options);
