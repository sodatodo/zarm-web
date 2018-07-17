import React, { Component } from 'react';
import Popover from '../Popover';
import Button from '../Button';
import PropsType from './PropsType';

const noop = () => {};

class Popconfirm extends Component<PropsType, any> {
  static defaultProps = {
    prefixCls: 'ui-popover',
    className: null,
    visible: false,
    trigger: 'click',
    direction: 'bottomLeft',
    onCancel: noop,
    onOk: noop,
    okText: '确认',
    cancelText: '取消',
    content: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.visible !== nextProps.visible) {
      this.setState({
        visible: !!nextProps.visible,
      });
    }
  }

  handleCancel() {
    const { onCancel } = this.props;
    this.setState({
      visible: false,
    });
    onCancel();
  }

  handleConfirm() {
    const { onOk } = this.props;
    this.setState({
      visible: false,
    });
    onOk();
  }

  render() {
    const { visible } = this.state;
    const {
      children,
      content,
      prefixCls,
      className,
      trigger,
      direction,
      okText,
      cancelText,
    } = this.props;

    // eslint-disable-next-line
    const popContent = () => {
      return (
        <div>
          {content}
          <div className={`${prefixCls}-actions`}>
            <Button onClick={() => this.handleCancel()}>{cancelText}</Button>
            <Button theme="info" onClick={() => this.handleConfirm()}>
              {okText}
            </Button>
          </div>
        </div>
      );
    };

    return (
      <Popover
        content={popContent}
        visible={visible}
        direction={direction}
        prefixCls={prefixCls}
        className={className}
        trigger={trigger}
      >
        {children}
      </Popover>
    );
  }
}

export default Popconfirm;