import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router'

/**
 * Component that alerts if you click outside of it
 */
export default class OutsideAlerter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      closeModal: false,
    }

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  /**
   * Set the wrapper ref
   */
  setWrapperRef(node) {
    this.wrapperRef = node;
    
  }

  /**
   * Alert if clicked on outside of element
   */
  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
    

      this.setState({
        closeModal: true
      })
      
     
    }
  }

  render() {
    return ( this.state.closeModal ? <Redirect to="/" /> : <div ref={this.setWrapperRef} id={'modalScroll'} className={'modalContainer'}>{this.props.children}</div>)
  }
}

OutsideAlerter.propTypes = {
  children: PropTypes.element.isRequired,
};