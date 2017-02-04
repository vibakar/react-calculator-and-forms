var React = require('react');
var EmailField = require('./email.jsx');
var NameField = require('./nameField.jsx');

module.exports = React.createClass({
  onSubmit : function(e){
    if(!this.refs.fieldEmail.state.valid){
      alert('Enter valid Email');
    }else{
      var details ={
        firstName :this.refs.fieldName.state.value,
        email :this.refs.fieldEmail.state.value
      };
      console.log(details);
      this.refs.fieldName.clear();
      this.refs.fieldEmail.clear();
    }
  },
  render : function(){
    return (
      <div className='col-sm-3'>
        <div className='panel panel-default'>
          <div className='panel-body'>
              <NameField type='First' ref="fieldName"/>
              <EmailField ref="fieldEmail"/>
              <button className='btn btn-primary' onClick={this.onSubmit}>Submit</button>
          </div>
          </div>
      </div>
    );
  }
});
