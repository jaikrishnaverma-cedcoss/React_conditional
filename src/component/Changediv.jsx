import React, { Component } from 'react';
class Changediv extends Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        if(this.props.colo%2===0)
        {
        return (<>
            <div className="box-red" >
                <p>
                    Before paying to learn programming, checkout freeCodeCamp.org
                    <br />
                    The HTML, CSS, and JavaScript curricula would take you from zero to hero
                    in web development.
                </p>
                <p>
                    There is a Python curriculum that will get you a considerable knowledge
                    in Python <br />
                    And an upcoming Data Science curriculum.
                </p>
            </div>
        </>);
        }
        else{
            return (<>
                <div className="box-blue">
                    <p>
                        Before paying to learn programming, checkout freeCodeCamp.org
                        <br />
                        The HTML, CSS, and JavaScript curricula would take you from zero to hero
                        in web development.
                    </p>
                    <p>
                        There is a Python curriculum that will get you a considerable knowledge
                        in Python <br />
                        And an upcoming Data Science curriculum.
                    </p>
                </div>
            </>);
        }
    }
}

export default Changediv;