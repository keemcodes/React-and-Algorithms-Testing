import React, { Component } from 'react';
import Counter2 from './counter2'

class Counters2 extends Component {
    state = { 
        counters: [
            { id: 1, value: 2 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 },
        ]
    }

    handleIncrement = counter => {
        // console.log(counter);
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        console.log(this.state.counters[index]);
        this.setState({ counters })
    }

    handleDelete = (counterId) => {
        // console.log('Event Handler Called', counterId);
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({ counters });
    };

    handleReset = () => {
        const counters = this.state.counters.map( c => {
            c.value = 0;
            return c;
        });
        this.setState({ counters })
    };
    render() { 
        return ( <div>
            {/* <Counter/>
            <Counter/>
            <Counter/>
            <Counter/>
            <Counter/> */}
            <button onClick={this.handleReset} className="btn btn-primary btn-sm m-2">Reset</button>
            { this.state.counters.map(counter => (
                <Counter2 key={counter.id} onDelete={this.handleDelete} onIncrement={this.handleIncrement} counter={counter}>
                    {/* <h4>Counter #{counter.id}</h4> */}
                </Counter2> 
            ))}
        </div> );
    }
}
 
export default Counters2;