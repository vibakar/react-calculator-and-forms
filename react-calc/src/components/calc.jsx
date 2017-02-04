var React = require('react');
var InputField = require('./inputField.jsx');
var Button = require('./button.jsx');

module.exports = React.createClass({
  add : function(){
      var num1 = this.refs.number1.state.value;
      var num2 = this.refs.number2.state.value;
      var sum = Number(num1)+Number(num2);
      this.refs.result.result(sum);
  },
  sub : function(){
      var num1 = this.refs.number1.state.value;
      var num2 = this.refs.number2.state.value;
      var sub = Number(num1)-Number(num2);
      this.refs.result.result(sub);
  },
  mul : function(){
      var num1 = this.refs.number1.state.value;
      var num2 = this.refs.number2.state.value;
      var mul = Number(num1)*Number(num2);
      this.refs.result.result(mul);
    },
  div : function(){
      var num1 = this.refs.number1.state.value;
      var num2 = this.refs.number2.state.value;
      var div = Number(num1)/Number(num2);
      this.refs.result.result(div);
    },
  clr : function(){
      this.refs.number1.clear();
      this.refs.number2.clear();
      this.refs.result.clear();
  },
  render : function(){
  var divStyle = {
      marginTop : 20
  };
  var bgStyle = {
      background : '#E9E9E9'
  };
  return (
  <div className='panel panel-warning'>
      <h1><center>Simple Calculator</center></h1>
    <div style={bgStyle} className='panel-body'>
      <div className='col-sm-12'>
        <div className='row'>
          <div className='col-sm-6'>
            <InputField example='Number eg:2018' ref='number1'  readonly="false" />
          </div>
          <div className='col-sm-6'>
            <InputField example='Number eg:1805' ref='number2'  readonly="false" />
          </div>
        </div>
      </div>
      <div style={divStyle} className='col-sm-12'>
        <div className='row'>
          <div className='col-sm-3'>
              <Button operation="+ Add" whenClick={this.add} />
          </div>
          <div className='col-sm-3'>
              <Button operation="- Subtract" whenClick={this.sub} />
          </div>
          <div className='col-sm-3'>
              <Button operation="* Multiply" whenClick={this.mul} />
          </div>
          <div className='col-sm-3'>
            <Button operation="/ Divide" whenClick={this.div} />
          </div>
        </div>
      </div>
      <div style={divStyle} className='col-sm-12'>
        <div className='row'>
          <div className='col-sm-8'>
            <InputField example='Result' ref='result' readonly="true" />
          </div>
          <div className='col-sm-4'>
            <Button operation="Clear" whenClick={this.clr} />
          </div>
        </div>
      </div>
    </div>
  </div>
      );
  }
});
