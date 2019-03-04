import React, { Component } from 'react'
import './style.scss'

/**
 * Get text from contenteditable.
 * @reference https://stackoverflow.com/questions/822452/strip-html-from-text-javascript
 * @param {ReactRefObj} inputtags
 * @return {String}
 */
function getText(inputtags) {
    return inputtags.textContent || inputtags.innerText || ''
}

/**
 * Tag item component.
 */
const TagItem = (props) => (
    <span className="tag__item">
        <label className="item__label">{ props.name }</label>
        <button className="item__button" onClick={ props.onRemove }>X</button>
    </span>
)

/**
 * Input tags component.
 * @author Fachri Riyanto
 * @version 1.0.0
 */
export default class InputTags extends Component {

    /**
     * Class constructor.
     */
    constructor(props) {
        super(props)

        /**
         * Initial state.
         */
        this.state = {
            value: ''
        }

        /**
         * Define input ref.
         */
        this.inputtags = null
    }

    /**
     * When user type a text.
     */
    onInput(event) {
        const text = getText(this.inputtags)
        this.setState({
            value: text
        })
    }

    /**
     * When user press a key.
     */
    onKeyDown(event) {
        const { keyCode } = event
        switch (keyCode) {
            /**
             * Add new tag when user press enter.
             */
            case 13 : {
                event.preventDefault()

                // get text
                const text = getText(this.inputtags)
                if (text.trim() === '') return

                // get current tags
                let tags = this.props.value
                tags = tags ? tags : []

                // add new tag
                tags.push(text)

                // clear text
                this.inputtags.innerText = ''

                // update tags
                this.props.onChange(tags)
                break
            }

            /**
             * Remove tag when user press backspace.
             */
            case 8 : {
                // get text
                const text = getText(this.inputtags)

                // get current tags
                let tags = this.props.value
                tags = tags ? tags : []

                // validate if empty text
                if (text === '' && tags.length > 0) {
                    this.inputtags.innerText = ''
                    this.inputtags.textContent = ''

                    // remove tag
                    tags.pop()

                    // update tags
                    this.props.onChange(tags)
                }
                break
            }
            default:
        }
    }

    /**
     * On remove tag.
     */
    onRemoveTag(event, index) {
        event.preventDefault()

        // get current tags
        let tags = this.props.value

        // remove value by index
        tags.splice(index)

        // update tags
        this.props.onChange(tags)
    }

    /**
     * Render element.
     * @return {Element}
     */
    render() {
        // get tags
        const { value } = this.props

        // tag lists element
        const taglists = value.map((tag, index) => <TagItem name={ tag } key={ index } onRemove={ event => this.onRemoveTag(event, index) } />)

        // get current text
        let text = ''
        if (this.inputtags) {
            text = getText(this.inputtags)
        }

        return (
            <div className="C--input-tags">
                <div className="tags__list">{ taglists }</div>
                <div className="tags__input">
                    { !this.inputtags || this.inputtags && text === '' ? <span className="input__placeholder">Add a tag...</span> : null }
                    <div
                        ref={ node => this.inputtags = node }
                        className="input__editor"
                        contentEditable={ true }
                        onInput={ this.onInput.bind(this) }
                        onKeyDown={ this.onKeyDown.bind(this) }>
                    </div>
                </div>
            </div>
        )
    }
}