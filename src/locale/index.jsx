import React, { Component } from 'react'
import { IntlProvider } from 'react-intl'
import { connect } from 'react-redux'
import enUS from './en-US'
import zhCN from './zh-CN'
const message = {
  'en-US': enUS,
  'zh-CN': zhCN,
}
class Locale extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { locale } = this.props
    return (
      <IntlProvider locale={locale} messages={message[locale]}>
        {this.props.children}
      </IntlProvider>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    locale: state.locale.locale,
  }
}
export default connect(mapStateToProps)(Locale)
