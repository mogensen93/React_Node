import React, {Component} from 'react';
import MoonLoader from 'react-loader-spinner';
import './App.css';


export default class Cat extends Component {

    state = {
        cat: {},
        loading: true
    }

    async componentDidMount() {
        const res = await fetch(`https://api.thecatapi.com/v1/images/search`);
        const cat = await res.json();
        this.setState({cat, loading: false})
       
    }   
    render() {
        const {loading, cat} = this.state;
        return(
            <div className="catContainer">  
                { loading 
                    ? 
                    <div>
                        <h1 className = "alignCenter"> Did someone say Cats?</h1>
                        <MoonLoader type="MoonLoader" height={100} width={100} className ="fullAlign"/>
                    </div>
                    : 
                    <div className="alignCenter catContainer"> 
                
                        {
                            <tr>
                            {cat.map((catInfo, index) => 
                                (<th key={"table-header" + index}>
                                    <img className="catPicture" src={catInfo.url} alt="cat"/>
                                </th>))}
                            </tr>
                        
                        }

                    </div>
                }
               
            </div>
        );
    }
}