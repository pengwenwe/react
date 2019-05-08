import React,{Component}from "react";
class ToItem extends  Component {
  constructor(props){
    super(props)
    this.handleItemClick = this.handleItemClick.bind(this);
  }
  render (){
    const content = this.props;
    return (
      <div onClick={this.handleItemClick}>
        {content}
      </div>
    );
  }
  handleItemClick(){//解构赋值
    const {deleteItem , index} = this.props;
    deleteItem(index);
  }
}
export default ToItem;