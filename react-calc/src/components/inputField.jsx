var React = require('react');

module.exports = React.createClass({
  getInitialState : function(){
    return {value:''};
  },
  onChange : function(e){
    this.setState({value:e.target.value});
  },
  clear : function(){
    this.setState({value:''});
  },
  result : function(val){
    this.setState({value:val});
  },
  render : function(){
  return (
      <input type='number' placeholder={this.props.example} onChange={this.onChange} value={this.state.value} readonly={this.props.readonly}/>
      );
  }
});
