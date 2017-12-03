import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import s from '../FormFields/style';
import Moment from 'react-moment';

class DateUI extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      currentYearView: Moment.year(),
      currentMonthView: Moment.year(),
      currentDateView: Moment.year(),
      yearWrapPaddingRight: 0,
      monthWrapPaddingRight: 0,
      dateWrapPaddingRight: 0,
    }
  }

  renderYear() {
    return (
      <s.pickerWheelWrap innerRef={(element)=>{this.yearWrap = element}} onScroll={this.yearScrolled}>
        <s.pickerWheel>
          <div>2015</div>
          <div>2016</div>
          <div>2017</div>
          <div>2018</div>
          <div>2019</div>
        </s.pickerWheel>
      </s.pickerWheelWrap>
    )
  }

  renderMonth() {
    return (
      <s.pickerWheelWrap innerRef={(element)=>{this.yearWrap = element}} onScroll={this.monthScrolled}>
        <s.pickerWheel>
          <div>2015</div>
          <div>2016</div>
          <div>2017</div>
          <div>2018</div>
          <div>2019</div>
        </s.pickerWheel>
      </s.pickerWheelWrap>
    )
  }

  renderDate() {
    return (
      <s.pickerWheelWrap innerRef={(element)=>{this.yearWrap = element}} onScroll={this.dateScrolled}>
        <s.pickerWheel>
          <div>2015</div>
          <div>2016</div>
          <div>2017</div>
          <div>2018</div>
          <div>2019</div>
        </s.pickerWheel>
      </s.pickerWheelWrap>
    )
  }

  componentDidMount() {
    if(0) {
      const paddingRight = this.yearWrap.offsetWidth - this.yearWrap.clientWidth + "px";
      this.setState({...state,...{yearWrapPaddingRight: this.yearWrap}})
    }
  }

  render() {
  var child = document.getElementById('container2');
    return (
      <div>
        <div><button>Cancel</button></div>
        <div><button>Set</button></div>
        {this.renderYear()}
        {this.renderMonth()}
        {this.renderDate()}
      </div>
    );
  }
}

DateUI.defaultProps = {
  format: "mm-dd-yyyy"
}

DateUI.PropTypes = {
  format: PropTypes.string.isRequired,
  maxYear: PropTypes.integer,
  maxMonth: PropTypes.integer,
  maxDate: PropTypes.integer,
  maxHour: PropTypes.integer,
  maxSecond: PropTypes.integer,
  minYear: PropTypes.integer,
  minMonth: PropTypes.integer,
  minDate: PropTypes.integer,
  minHour: PropTypes.integer,
  minSecond: PropTypes.integer
}

export default Input;