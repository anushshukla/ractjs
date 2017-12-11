import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import s from './style';
import Moment from 'react-moment';

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

    this.yearScrolled = this.yearScrolled.bind(this);
    this.monthScrolled = this.monthScrolled.bind(this);
    this.dateScrolled = this.dateScrolled.bind(this);
  }

  yearScrolled(event) {
    event.preventDefault();
    console.log("here");
  }

  monthScrolled(event) {
    event.preventDefault();
    console.log("here");
  }

  dateScrolled(event) {
    event.preventDefault();
    console.log("here");
  }

  renderYear() {
    return (
      <s.pickerWheelOuterWrap>
        <s.pickerWheelWrap
          innerRef={(element)=>{this.yearWrap = element}}
          onScroll={this.yearScrolled}
          paddingRight={this.state.yearWrapPaddingRight}
        >
          <s.pickerWheel>2015</s.pickerWheel>
          <s.pickerWheel>2016</s.pickerWheel>
          <s.pickerWheel>2017</s.pickerWheel>
          <s.pickerWheel>2018</s.pickerWheel>
          <s.pickerWheel>2019</s.pickerWheel>
        </s.pickerWheelWrap>
      </s.pickerWheelOuterWrap>
    )
  }

  renderMonth() {
    return (
      <s.pickerWheelOuterWrap>
        <s.pickerWheelWrap
          innerRef={(element)=>{this.monthWrap = element}}
          onScroll={this.monthScrolled}
          paddingRight={this.state.monthWrapPaddingRight}
        >
          <s.pickerWheel>January</s.pickerWheel>
          <s.pickerWheel>February</s.pickerWheel>
          <s.pickerWheel>March</s.pickerWheel>
          <s.pickerWheel>April</s.pickerWheel>
          <s.pickerWheel>May</s.pickerWheel>
          <s.pickerWheel>June</s.pickerWheel>
          <s.pickerWheel>July</s.pickerWheel>
          <s.pickerWheel>August</s.pickerWheel>
          <s.pickerWheel>September</s.pickerWheel>
          <s.pickerWheel>October</s.pickerWheel>
          <s.pickerWheel>November</s.pickerWheel>
          <s.pickerWheel>December</s.pickerWheel>
        </s.pickerWheelWrap>
        </s.pickerWheelOuterWrap>
    )
  }

  renderDate() {
    return (
      <s.pickerWheelOuterWrap>
        <s.pickerWheelWrap
          innerRef={(element)=>{this.dateWrap = element}}
          onScroll={this.dateScrolled}
          paddingRight={this.state.dateWrapPaddingRight}
        >
          <s.selectedValueEffect />
          <s.pickerWheel>1</s.pickerWheel>
          <s.pickerWheel>2</s.pickerWheel>
          <s.pickerWheel>3</s.pickerWheel>
          <s.pickerWheel>4</s.pickerWheel>
          <s.pickerWheel>5</s.pickerWheel>
        </s.pickerWheelWrap>
      </s.pickerWheelOuterWrap>
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
    const newState = {...this.state,...{yearWrapPaddingRight, monthWrapPaddingRight, dateWrapPaddingRight, modalTop, modalLeft}};
    this.setState(newState);
  }

  render() {
    return (
      <s.modalWrap innerRef={(element)=>{this.modalWrap = element}}>
        <s.modalOverlay />
        <s.btnWrap>
          <s.closeBtn>
            Close
          </s.closeBtn>
          <s.setBtn>
            Set
          </s.setBtn>
        </s.btnWrap>
        <s.pickerWheelsWrap>
          {this.renderYear()}
          {this.renderMonth()}
          {this.renderDate()}
        </s.pickerWheelsWrap>
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