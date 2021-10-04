import React, { Component } from 'react';

class Counter2 extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         value: 'gg',
    //     };
    // }

    // doHandleIncrement = () => {
    //     this.handleIncrement({id:1})
    // }

    render() {
        // console.log("props", this.props);

        return (
            <>
                {/* <h1>1{this.state.value}1</h1>
                <h1>1{this.state2.count}1</h1>
                <h1>1{this.state2.tags}1</h1> */}
                <div>
                    {/* {this.props.children} */}
                    <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                    <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
                    {/* <ul>
                        { this.state2.tags.map(tag => <li key={tag}>{tag}</li>)}
                    </ul> */}
                    <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
                </div>
            </>
        );
    }


    getBadgeClasses() {
        let classes = "badge m-2 bg-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value: count } = this.props.counter;
        return count === 0 ? 'Zero' : count;

    }
}

export default Counter2;