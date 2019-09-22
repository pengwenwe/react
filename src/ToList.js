import React, { Component,Fragment} from 'react';
import ToItem from "./ToItem";

class Tolist extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
    this.state = {
      inputValue: '',
      list: [],
      test: 'eric'
    }
  }
  render() {
    return (
      <Fragment>
        <div>
          <input value={this.state.inputValue} 
          onChange={this.handleInputChange} />
          <button onClick={this.handleButtonClick}>点击</button>
        </div>
        <ul>
          {
            this.state.list.map((item,index)=>{
              return (
              <div>
              <ToItem 
              content={item} 
              index={index}
              deleteItem={this.handleItemDelete}
              />
              </div>
              )
            })
          }
        </ul>
      </Fragment>
    );
  }
  handleInputChange(e){// 改变input框中的值
    const value = e.target.value;
    this.setState(() =>({
      inputValue: value  
    }))
  };
  handleButtonClick(){//点击按钮将input中的值放在ul中
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }))
   };
  handleItemDelete(index){//获取li的下标，点击哪一项删除哪一项，先复制一份原来的 然后在原来的数组中删除，不要直接删除this.state中的内容
    this.setState((prevState) =>{
      const list = [...prevState.list];
      list.splice(index,1);
      return{list}; 
    })
  }
  
}
export default Tolist;
