var React = require('react');
var Validator = require('email-validator');

module.exports = React.createClass({
getInitialState : function(){
  return {valid : true,value : ''}
},
onChange : function(e){
  if(!Validator.validate(e.target.value)){
    this.setState({valid : false,value : e.target.value});
  }else{
    this.setState({valid : true,value : e.target.value});
  }
},
clear : function(){
  this.setState({valid:true,value:''});
},
  render : function(){
  var formClass = this.state.valid ? 'form-group' : 'form-group has-error';
    return (
      <div className={formClass}>
        <input className = 'form-control' onChange={this.onChange} placeholder='Email' value={this.state.value} />
      </div>
    );
  }
});
