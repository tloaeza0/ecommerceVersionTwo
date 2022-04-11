import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <div className = "filter">
                <div className = "filter-result">{this.props.count} Products</div>
                <div className = "filter-sort">
                    SORT{""}
                <select id="select" value = {this.props.sort} onChange={this.props.sortProducts}>
                    <option>Select</option>
                    <option value= "high">High</option>
                    <option value = "low">Low</option>
                </select>
                <div className = "filter-light">
                    LIGHT {" "}
                    <select id = "select" value = {this.props.light} onChange={this.props.filterProducts}>
                        <option>None</option>
                        <option value = "Low Light">Low Light</option>
                        <option value = "Medium Light">Medium Light</option>
                        <option value = "Bright Light">Bright Light</option>
                    </select>
                </div>
                </div>
            </div>
        )
    }
}
