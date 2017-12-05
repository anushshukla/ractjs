import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import s from '../FormFields/style';
import Moment from 'react-moment';
console.log(Moment);
class DateUI extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      currentYearView: 2017/*(new Moment).year()*/,
      currentMonthView: 2017/*(new Moment).year()*/,
      currentDateView: 2017/*(new Moment).year()*/,
      yearWrapPaddingRight: 0,
      monthWrapPaddingRight: 0,
      dateWrapPaddingRight: 0,
      modalTop: 0,
      modalBottom: 0,
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
      <s.pickerWheelWrap innerRef={(element)=>{this.monthWrap = element}} onScroll={this.monthScrolled}>
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
      <s.pickerWheelWrap innerRef={(element)=>{this.dateWrap = element}} onScroll={this.dateScrolled}>
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
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    const modalTop = windowHeight - this.modalWrap.innerHeight;
    const modalLeft = windowWidth - this.modalWrap.innerHeight;
    const yearWrapPaddingRight = this.yearWrap.offsetWidth - this.yearWrap.clientWidth + "px";
    const monthWrapPaddingRight = this.monthWrap.offsetWidth - this.monthWrap.clientWidth + "px";
    const dateWrapPaddingRight = this.dateWrap.offsetWidth - this.dateWrap.clientWidth + "px";
    this.setState({...state,...{yearWrapPaddingRight: this.yearWrap, monthWrapPaddingRight: this.monthWrapPaddingRight, dateWrapPaddingRight: this.dateWrapPaddingRight, modalTop: modalTop, modalLeft: modalLeft}});
  }

  render() {
    var child = document.getElementById('container2');
    return (
      <s.modalWrap innerRef={(element)=>{this.modalWrap = element}}>
        <div><button>Close</button></div>
        <div><button>Set</button></div>
        {this.renderYear()}
        {this.renderMonth()}
        {this.renderDate()}
      </s.modalWrap>
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

export default DateUI;