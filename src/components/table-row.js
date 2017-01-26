import React from 'react';

class TableComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { distribution: 'constant',
      value: '',
      mean: '',
      std: '',
      min: '',
      max: ''
    };
    }

  entryArgs() {
    if (this.state.distribution === 'constant') {
      return (
        <div className="arg-values" key="arg-values">
          <label>
            Value
          </label>
          <input type="number" className="arg-value" value={this.state.value} onChange={this.onConstantValueChanged.bind(this)}/>
        </div>
      );
    } else {
      return (
        <div className="arg-values" key="arg-values">
          <label>
            Mean
          </label>
          <input type="number" className="arg-mean" value={this.state.mean} onChange={this.onMeanValueChanged.bind(this)}/>
          <label>
            Std
          </label>
          <input type="number" className="arg-std" value={this.state.std} onChange={this.onStdValueChanged.bind(this)}/>
          <label>
            Min
          </label>
          <input type="number" className="arg-min" value={this.state.min} onChange={this.onMinValueChanged.bind(this)}/>
          <label>
            Max
          </label>
          <input type="number" className="arg-max" value={this.state.max} onChange={this.onMaxValueChanged.bind(this)}/>
        </div>
      );
    }
  }

  onDistributionValueChange(ev) {
    this.setState({distribution: ev.target.value});
  }
  onConstantValueChanged(ev) {
    this.setState({value: ev.target.value});
  }
  onMeanValueChanged(ev) {
    this.setState({mean: ev.target.value});
  }
  onStdValueChanged(ev) {
    this.setState({std: ev.target.value});
  }
  onMinValueChanged(ev) {
    this.setState({min: ev.target.value});
  }
  onMaxValueChanged(ev) {
    this.setState({max: ev.target.value});
  }

  render() {

    return (
      <tr ref={this.props.name}>
        <td>{this.props.name}</td>
        <td>
          <select value={this.state.distribution} onChange={this.onDistributionValueChange.bind(this)}>
            <option defaultValue value="constant">Constant</option>
            <option value="truncated">Truncated normal</option>
          </select>
        </td>
        <td>
          {this.entryArgs()}
        </td>
      </tr>
    )
  }
}

export default TableComponent;


