import React, { Component } from 'react';
import classnames from 'classnames';
import { InputCoreProps } from './PropsType';
import Icon from '../icon';

export interface InputState {
  value: any;
  focused: boolean;
}

export function fixControlledValue(value: string | number | null | undefined) {
  if (typeof value === 'undefined' || value === null) {
    return '';
  }
  return String(value);
}

class Input extends Component<InputCoreProps, InputState> {
  static defaultProps = {
    prefixCls: 'zw-input',
    type: 'text',
    size: 'md',
    shape: 'radius',
    bordered: true,
    clearable: false,
  };

  static getDerivedStateFromProps(nextProps) {
    if ('value' in nextProps) {
      return {
        value: nextProps.value,
      };
    }
    return null;
  }

  inputRef = React.createRef<HTMLInputElement>();

  constructor(props) {
    super(props);
    const value = typeof props.value === 'undefined' ? props.defaultValue : props.value;
    this.state = {
      value,
      focused: false,
    };
  }

  getInputCls = () => {
    const { prefixCls, className, size, shape, disabled, bordered, readOnly } = this.props;
    return classnames(prefixCls, className, {
      [`${prefixCls}--${size}`]: size,
      [`${prefixCls}--${shape}`]: shape,
      [`${prefixCls}--disabled`]: disabled,
      [`${prefixCls}--readOnly`]: readOnly,
      [`${prefixCls}--underline`]: bordered === 'underline',
      [`${prefixCls}--bordered`]: bordered === true,
      [`${prefixCls}--nobordered`]: bordered === false,
    });
  };

  handleReset = (e) => {
    const { onChange } = this.props;
    const inputNode = this.inputRef.current;

    e.persist();
    this.setState({ value: '' }, () => {
      if (onChange) {
        if (inputNode) {
          let event = e;
          event = Object.create(e);
          event.target = inputNode;
          event.currentTarget = inputNode;
          const originalInputValue = inputNode.value;
          inputNode.value = '';
          onChange(event);
          inputNode.value = originalInputValue;
        }
      }
      inputNode!.focus();
    });
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { onChange } = this.props;

    this.setState({ value: e.target.value });
    if (onChange) {
      onChange(e);
    }
  };

  onFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    const { onFocus } = this.props;
    if (onFocus) {
      onFocus(event);
    }
    this.setState({
      focused: true,
    });
  };

  onBlur = (event: React.FocusEvent<HTMLInputElement & HTMLTextAreaElement>) => {
    const { onBlur } = this.props;
    if (onBlur) {
      onBlur(event);
    }
    this.setState({
      focused: false,
    });
  };

  renderClearIcon = () => {
    const { prefixCls, clearable, disabled } = this.props;
    const { value } = this.state;
    if (!clearable || disabled || value === undefined || value === null || value === '') {
      return null;
    }
    return (
      <Icon
        type="wrong-round-fill"
        theme="default"
        className={`${prefixCls}__clear-icon`}
        role="button"
        onClick={this.handleReset}
      />
    );
  };

  renderSuffix = () => {
    const { prefixCls, suffix, clearable } = this.props;

    if (suffix || clearable) {
      return (
        <span className={`${prefixCls}__suffix`}>
          {this.renderClearIcon()}
          {suffix}
        </span>
      );
    }

    return null;
  };

  renderBaseInput = () => {
    const {
      prefixCls,
      defaultValue,
      shape,
      size,
      className,
      style,
      disabled,
      readOnly,
      prefix,
      suffix,
      bordered,
      addonBefore,
      addonAfter,
      clearable,
      onFocus,
      onBlur,
      ...others
    } = this.props;
    const { value } = this.state;
    const cls = this.getInputCls();

    return !readOnly ? (
      <input
        {...others as React.HtmlHTMLAttributes<HTMLInputElement>}
        className={cls}
        style={style}
        disabled={disabled}
        ref={this.inputRef}
        onChange={this.handleChange}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        value={fixControlledValue(value)}
      />
    ) : (
      <div className={`${prefixCls}--readOnly ${prefixCls}--${size}`}>
        {fixControlledValue(value)}
      </div>
    );
  };

  renderLabeledIconInput = () => {
    const {
      prefixCls,
      style,
      size,
      className,
      prefix,
      suffix,
      clearable,
      readOnly,
      bordered,
    } = this.props;
    const { value, focused } = this.state;

    if (!prefix && !suffix && !clearable && bordered !== 'underline') {
      return this.renderBaseInput();
    }

    const prefixNode = prefix ? (
      <span className={`${prefixCls}__prefix`}>{prefix}</span>
    ) : null;
    const suffixNode = (suffix || clearable) ? (
      <span className={`${prefixCls}__suffix`}>
        {this.renderClearIcon()}
        {suffix}
      </span>
    ) : null;
    const underlineNode = (bordered === 'underline' && !readOnly) ? (
      <div>
        <div className={`${prefixCls}__line`} />
        <div className={`${prefixCls}__focus-line`} />
      </div>
    ) : null;
    const affixWrapperCls = classnames(className, `${prefixCls}__affix-wrapper`, {
      [`${prefixCls}__affix-wrapper--${size}`]: size,
      [`${prefixCls}__affix-wrapper--underline`]: bordered === 'underline',
      [`${prefixCls}__affix-wrapper--clearable`]: suffix && clearable && value,
      [`${prefixCls}--focused`]: focused,
    });
    const inputCls = this.getInputCls();

    return (
      <div className={affixWrapperCls} style={style}>
        {prefixNode}
        {React.cloneElement(this.renderBaseInput(), {
          style: null,
          className: classnames(inputCls),
        })}
        {suffixNode}
        {underlineNode}
      </div>
    );
  };

  renderLabeledInput = () => {
    const { addonBefore, addonAfter, prefixCls, style, size, shape } = this.props;
    if (!addonBefore && !addonAfter) {
      return this.renderLabeledIconInput();
    }

    const groupCls = classnames(`${prefixCls}-group`, {
      [`${prefixCls}-group--${size}`]: size,
      [`${prefixCls}-group--${shape}`]: shape,
      [`${prefixCls}-group--prepend`]: addonBefore,
      [`${prefixCls}-group--append`]: addonAfter,
    });
    const wrapperCls = classnames(`${prefixCls}-group__wrapper`);
    const prependCls = classnames(`${prefixCls}-group__prepend`);
    const appendCls = classnames(`${prefixCls}-group__append`);
    const addonBeforeNode = addonBefore ? <span className={prependCls}>{addonBefore}</span> : null;
    const addonAfterNode = addonAfter ? <span className={appendCls}>{addonAfter}</span> : null;

    return (
      <div className={groupCls} style={style}>
        <div className={wrapperCls}>
          {addonBeforeNode}
          {React.cloneElement(this.renderLabeledIconInput(), { style: null })}
          {addonAfterNode}
        </div>
      </div>
    );
  };

  render() {
    return this.renderLabeledInput();
  }
}

export default Input;
