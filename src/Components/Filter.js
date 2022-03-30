import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <div className = "filter">
                <div className = "filter-result">{this.props.count} Products</div>
                <div className = "filter-sort">
                    Order{""}
                <select value = {this.props.sort} onChange={this.props.sortProducts}>
                    <option>Select</option>
                    <option value= "high">High</option>
                    <option value = "low">Low</option>
                </select>
                </div>
            </div>
        )
    }
}
