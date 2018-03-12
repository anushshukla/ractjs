import React, { PureComponent } from 'react';
import PropTypes from '../../../PropTypes';

class AutoComplete extends PureComponent {
  static getFakeChangeEvent({ value, type = 'change' }) {
    return {
      type,
      forceCloseMenu: true,
      target: {
        value,
      },
    };
  }

  constructor(props) {
    super(props);
    const { valueSelectedIndex, valueSelectedOption, options } = props.options.reduce(this.getAutoCompleteList.bind(this), {
      options: [],
      valueSelectedIndex: -1,
      moveBy: 0,
      userInputTxt: props.userInputTxt,
    });
    this.state = {
      valueSelectedIndex,
      valueSelectedOption,
      activeIndex: valueSelectedIndex,
      options,
    };
  }

  componentWillReceiveProps(props) {
    let moveBy = 0;
    if (props.moveDown !== this.props.moveDown) {
      moveBy += 1;
    } else if (props.moveUp !== this.props.moveUp) {
      moveBy -= 1;
    }

    const { valueSelectedIndex, valueSelectedOption, options } = props.options.reduce(this.getAutoCompleteList.bind(this), {
      options: [],
      valueSelectedIndex: -1,
      valueSelectedOption: {},
      moveBy,
      userInputTxt: props.userInputTxt,
    });

    this.setState({
      valueSelectedIndex,
      valueSelectedOption,
      options,
    });

    if (!props.isVisible || (!props.userInputTxt && !moveBy) || !options) {
      this.setState({
        activeIndex: -1,
        activeOption: {},
      });
    }

    if (props.enterKeyPressed !== this.props.enterKeyPressed && this.state.activeOption) {
      this.onClick({}, this.state.activeOption, this.state.activeIndex);
    }
  }

  onClick(event, option, index) {
    this.setState({
      activeIndex: index,
      activeOption: option,
      valueSelectedIndex: index,
      valueSelectedOption: option,
    });
    this.props.onClick(this.constructor.getFakeChangeEvent({ value: option.text }));
  }

  getAutoCompleteList(listInfo, option, index, options) {
    const { moveBy, userInputTxt, options: { length: actualIndex } = [] } = listInfo;
    const { activeIndex, options: { length: optsCnt } = [], valueSelectedOption: { text: selectedOptionText = '' } = {} } =
      this.state || {};
    const optionText = String(option.text);
    const userInputTxtTrimmed = String(userInputTxt).trim();
    if (optionText === userInputTxtTrimmed) {
      listInfo.valueSelectedIndex = actualIndex;
      listInfo.valueSelectedOption = option;
    }
    const isOptionSelected = selectedOptionText === userInputTxtTrimmed;
    if (userInputTxtTrimmed && !optionText.toLowerCase().includes(userInputTxtTrimmed.toLowerCase()) && !isOptionSelected) {
      return listInfo;
    }
    const Li = this.props.li;
    let isActive = !moveBy && listInfo.valueSelectedIndex === actualIndex;
    if (moveBy) {
      let newActiveIndex = activeIndex + moveBy;
      if (newActiveIndex > optsCnt - 1) {
        newActiveIndex = this.props.allowCircularUpDown ? 0 : optsCnt - 1;
      } else if (newActiveIndex < 0) {
        newActiveIndex = this.props.allowCircularUpDown ? this.state.options.length : 0;
      }
      isActive = newActiveIndex === actualIndex;
      if (isActive) {
        this.setState({
          activeIndex: newActiveIndex,
          activeOption: option,
        });
      }
    }
    listInfo.options.push(
      <Li isActive={isActive} key={actualIndex} onClick={event => this.onClick(event, option, actualIndex)}>
        {option.text}
      </Li>,
    );

    return listInfo;
  }

  render() {
    const Wrap = this.props.div;
    const Ul = this.props.ul;
    let options = this.state.options;
    if (!options.length && this.props.canShowNoResultsFound) {
      const LI = this.props.li;
      options = <LI>{this.props.noResultsFoundText}</LI>;
    }
    const canShowAutoComplete = (options.length || this.props.canShowNoResultsFound) && this.props.isVisible;
    return (
      <Wrap isVisible={canShowAutoComplete}>
        <Ul>{options}</Ul>
      </Wrap>
    );
  }
}

AutoComplete.defaultProps = {
  onClick() {},
  userInputTxt: '',
  moveUp: 0,
  moveDown: 0,
  isVisible: false,
  enterKeyPressed: 0,
  canShowNoResultsFound: true,
  noResultsFoundText: 'No results found',
  allowCircularUpDown: false,
};

AutoComplete.propTypes = {
  div: PropTypes.func.isRequired,
  ul: PropTypes.func.isRequired,
  li: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
  userInputTxt: PropTypes.string.isRequired,
  noResultsFoundText: PropTypes.string.isRequired,
  moveUp: PropTypes.number.isRequired,
  moveDown: PropTypes.number.isRequired,
  enterKeyPressed: PropTypes.number.isRequired,
  isVisible: PropTypes.bool.isRequired,
  canShowNoResultsFound: PropTypes.bool.isRequired,
  allowCircularUpDown: PropTypes.bool.isRequired,
};

export default AutoComplete;
