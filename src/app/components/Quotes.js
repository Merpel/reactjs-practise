import React from "react";

// Styling for the page and form
const labelStyle = {
    display: 'flex', justifyContent: 'space-between', marginBottom: '0.6em', paddingLeft: '0.6em', paddingRight: '0.6em'
};

const inputStyle1 = {
    border: '1px solid gray'
};

const inputStyle2 = {
    border: '1px solid gray', width: '6em'
};

// A global list that stores the quotes.
var savedQuotes = [{
    "title": "Dream big",
    "author": "Ellen Johnson Sirleaf",
    "yearOfQuote": 2009,
    "publishedIn": "The Child Will Be Great: Memoir of Remarkable Life by Africa's First Woman President ",
    "rating": 3.5,
    "quoteContent": "If your dreams do not scare you, they are not big enough."
}, {
    "title": "Choose carefully",
    "author": "Caroline Myss",
    "yearOfQuote": 2000,
    "publishedIn": "Unknown",
    "rating": 3.3,
    "quoteContent": "Always go with the choice that scares you the most, because that's the one that is going to help you grow."
}];

/**
 * Component that handles adding new Quotes and listing the existing ones.
 */
export class Quotes extends React.Component {
    constructor() {
        super();
        this.state = {
            listVisible: false,
            quotes: savedQuotes,
            title: "",
            author: "Unknown",
            yearOfQuote: 1900,
            publishedIn: "Unknown",
            quoteContent: "",
            rating: 0.0,
            submitStatus: false
        }
    }

    /**
     * Changes the listVisible parameter from state, that is used to control if the page should show the list or not.
     */
    changeListStatus() {
        this.setState({
            listVisible: !this.state.listVisible
        });
    }

    /**
     * Handles the creation of a new quote.
     * @param {*} event 
     */
    addQuote(event) {
        event.preventDefault();
        let newQuote = {
            "title": this.state.title,
            "author": this.state.author,
            "yearOfQuote": this.state.yearOfQuote,
            "publishedIn": this.state.publishedIn,
            "quoteContent": this.state.quoteContent,
            "rating": this.state.rating,
        };

        savedQuotes.push(newQuote);

        this.setState({
            submitStatus: !this.state.submitStatus,
            quotes: savedQuotes,
            title: "",
            author: "Unknown",
            yearOfQuote: 1900,
            publishedIn: "Unknown",
            quoteContent: "",
            rating: 0.0
        });
    }

    render() {
        let listCmp = "";
        if (this.state.listVisible) {
            listCmp = this.state.quotes.map((quote, i) => (
                <div key={i}>
                    <h1>{quote.title}</h1>
                    <p>{quote.quoteContent}</p>
                    <p>Author: {quote.author}, year: {quote.yearOfQuote} Rating: {quote.rating}</p>
                    <p>{quote.publishedIn}</p>
                </div>))
        }
        return (
            <div style={{
                backgroundColor: 'aliceblue',
                display: 'flex',
                flexDirection: 'column',
                marginTop: '0.5em'
            }}>
                <div id="formarea" style={{ marginBlock: '5%' }}>
                    <form id="bookingform" onSubmit={this.addQuote.bind(this)}>
                        <fieldset id="fieldset1" style={{ width: '70 %' }}>
                            <legend id="legend1" style={{
                                paddingLeft: '40%'
                            }}>Quote details</legend>
                            <div className="information" style={{ display: 'flex', marginRight: '5%', flexDirection: 'column' }}>
                                <label htmlFor="title" style={labelStyle}>
                                    Title of the quote.
                                <input required id="title" type="text" size="40" style={inputStyle1} name="title" value={this.state.title} onChange={event => this.setState({ title: event.target.value })} />
                                </label>
                                <label htmlFor="author" style={labelStyle}>
                                    Name of the author
                                <input required id="author" type="text" size="40" style={inputStyle1} name="author" value={this.state.author} onChange={event => this.setState({ author: event.target.value })} />
                                </label>
                                <label htmlFor="yearOfQuote" style={labelStyle}>
                                    The year the quote was published
                                <input type="number" id="yearOfQuote" required min="1" max="2020" name="yearOfQuote" style={inputStyle2} value={this.state.yearOfQuote} onChange={event => this.setState({ yearOfQuote: event.target.value })} />
                                </label>
                                <label htmlFor="publishedIn" style={labelStyle}>
                                    Where the quote was published
                                <input id="publishedIn" type="text" size="40"
                                        name="publishedIn" style={inputStyle1} value={this.state.publishedIn} onChange={event => this.setState({ publishedIn: event.target.value })} />
                                </label>
                                <label htmlFor="rating" style={labelStyle}>
                                    Rating of the quote in scale of 1 to 5
                                <input type="number" id="rating" min="0" step="0.1" max="5" name="rating" style={inputStyle1} value={this.state.rating} onChange={event => this.setState({ rating: event.target.value })} />
                                </label>
                                <label htmlFor="quoteContent" style={labelStyle}>
                                    The content of the quote
                                        <textarea name="quoteContent" value={this.state.quoteContent} onChange={event => this.setState({ quoteContent: event.target.value })} />
                                </label>
                            </div>
                        </fieldset>
                        <div id="button">
                            <button style={{ marginTop: '0.3em' }}>Submit</button>
                        </div>
                    </form>
                </div>
                <hr />
                <div id="quoteList">
                    <button onClick={this.changeListStatus.bind(this)} id="listQuotes">List quotes</button>
                    {listCmp}
                </div>
            </div >
        );
    }

}