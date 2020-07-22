import React from "react";
import data from './../data';
import trashIcon from "./../img/trashIcon.png";
import ModalEdit from './ModalEdit';


const Row = ({cashie,product,category,price,no,clickDelete,id}) => {
    return(
        <tr>
           <td>{no}</td>
           <td>{cashie}</td>
           <td>{product}</td>
           <td>{category}</td>
           <td>{price}</td>
           <td>
              <ModalEdit 
                id = {id}
                cashie={cashie}  
                product={product} 
                category={category} 
                price={price}  />
              <a onClick={clickDelete} data-id={id}><img width="40" src={trashIcon} alt="trash"  /></a>
           </td>
       </tr>
    );
}

class Table extends React.Component{
    constructor(){
        super();
        this.state = {
            data : data
        }
    }

    clickDelete = (event) => {
        let filteredData = this.state.data.filter((el)=>{
            return el.id != event.target.parentNode.dataset.id;
        })
        console.log(filteredData);
        this.setState({data: filteredData});
    }

    refreshData = () =>{
        this.setState({data:data})
    }

    
    render(){
        let { data } = this.state;
        let i = 0;
        return(
            <div className="mt-4" style={{width:"70%",margin:"auto"}}>
                <table className="table">
                    <thead className="thead-dark">
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Cashie</th>
                        <th scope="col">Product</th>
                        <th scope="col">Category</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                       {data.map((el)=>{
                           return <Row 
                                key={el.id}
                                no={++i}
                                id={el.id}
                                cashie={el.cashie}  
                                product={el.product} 
                                category={el.category} 
                                price={el.price} 
                                clickDelete={this.clickDelete}/>
                       })}
                    </tbody>
                </table>
                <button onClick={this.refreshData}>Refresh</button>
            </div>
        );
    }
}

export default Table;