import React, { Component } from 'react'
import { render } from 'react-dom'

// import styles
import './style.scss'

// import input tags
import InputTags from './input-tags/layout'

/**
 * Main app component.
 */
class App extends Component {

    /**
     * Class constructor.
     */
    constructor(props) {
        super(props)

        /**
         * Initial state.
         */
        this.state = {
            /**
             * List of tags.
             * @var {Array}
             */
            tags: ['ReactJS']
        }
    }

    /**
     * On change tags value.
     */
    onChange(tags) {
        this.setState({
            tags: tags
        })
    }

    /**
     * Render element.
     * @return {Element}
     */
    render() {
        return (
            <section className="module--container" id="App">
                <div className="container">
                    <InputTags
                        value={ this.state.tags }
                        onChange={ this.onChange.bind(this) }
                    />
                    <footer className="footer">
                        Fork me on <a href="https://github.com/fachririyanto/react-input-tags/">Github</a>. <a href="https://fachririyanto.com">Fachri Riyanto.</a>
                    </footer>
                </div>
            </section>
        )
    }
}

/**
 * Render app.
 */
render(
    <App />,
    document.getElementById('root')
)