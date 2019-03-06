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
    onChange(tags, callback) {
        this.setState({
            tags: tags
        }, () => {
            if (callback) {
                callback()
            }
        })
    }

    /**
     * Render element.
     * @return {Element}
     */
    render() {
        return (
            <section className="site fixed--layout" id="page">
                <div className="table--layout -full-height">
                    <div className="table__cell -vertical-align--middle">
                        <section className="module--container" id="App">
                            <div className="container">
                                <InputTags
                                    value={ this.state.tags }
                                    onChange={ this.onChange.bind(this) }
                                />
                                <footer className="footer">
                                    Fork me on <a href="https://github.com/fachririyanto/react-input-tags/">Github</a>. By <a href="https://fachririyanto.com">Fachri Riyanto.</a>
                                </footer>
                            </div>
                        </section>
                    </div>
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