import React, { Component } from 'react'
import { FormattedMessage, injectIntl } from 'react-intl'
import { connect } from 'react-redux'
class Demo extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  change = () => {
    const { locale, changlanguage } = this.props
    changlanguage(locale === 'zh-CN' ? 'en-US' : 'zh-CN')
  }
  render() {
    const { intl } = this.props
    const t = intl.messages
    return (
      <div>
        <a href="#" onClick={this.change}>
          <FormattedMessage id="exchange"></FormattedMessage>
        </a>
        <ul>
          <li>{t.back}</li>
          <li>{t.all}</li>
          <li>{t.logout}</li>
          <li>{t.unbind}</li>
        </ul>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    locale: state.locale.locale,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    changlanguage: (value) =>
      dispatch({
        type: 'CHANGE_LANGUAGE',
        value,
      }),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(Demo))
