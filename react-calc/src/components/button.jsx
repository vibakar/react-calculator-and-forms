var React = require('react');

module.exports = React.createClass({
  render : function(){
      return(
        <button className='btn btn-primary' onClick={this.props.whenClick}>{this.props.operation}</button>
      );
  }

});
