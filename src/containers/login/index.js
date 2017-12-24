import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import LoginForm from './login';

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => bindActionCreators({
    enter: () => push('/')
}, dispatch)

export default connect(
    mapDispatchToProps,
    mapDispatchToProps
)(LoginForm)
