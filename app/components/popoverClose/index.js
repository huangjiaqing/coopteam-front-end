import React from 'react';

/**
 * 用于手动关闭antd的Popover
 * @param {*ReactComponent} Component 
 */
export default function PopoverClose (Component) {

  return class extends React.Component {

    state = {
      isShowSelf: true,
    }

    closeSelf = () => {
      setTimeout(() => {
        this.setState({
          isShowSelf: false
        }, () => {
          this.setState({
            isShowSelf: true
          });
        });
      }, 100);
    }

    render() {
      const { isShowSelf } = this.state;
      const visible = isShowSelf ? {} : { visible: false };

      return (
        <Component
          visible={visible}
          closePopover={this.closeSelf}
          {...this.props}
        />
      );
    }
  };
}