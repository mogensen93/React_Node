import React, {Component} from 'react';
import Table from './../table/Table'
import TableUI from './../table/tableUI'
import { css } from "@emotion/core";
// First way to import
import { ClipLoader } from "react-spinners";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  `;  


export default class Cities extends Component {

    state = {
        cities: []
,
        loading: true
    }
    async componentDidMount() {
        // aSync -> ligger i 1_intro_files -> async.js
                const res  = await fetch("https://indian-cities-api-nocbegfhqg.now.sh/cities");
                const cities = await res.json();
                this.setState({cities, loading:false})
        };
    

    render(){
        const { cities, loading} = this.state;
        //const rows = [{id: 1, city: "Copenhagen"}, {id: 2, city: "Barcelona"}, {id: 3, city: "Paris"}]
        return(
            <div>  <TableUI />
                {  loading ? 
                   <ClipLoader
                   css={override}
                   size={150}
                   //size={"150px"} this also works
                   color={"#123abc"}
                   loading={this.state.loading}
                 />
                :
                <Table columns = {["City", "State", "District"]} rows={cities} />
              
                }
            </div>
        );
    }
}