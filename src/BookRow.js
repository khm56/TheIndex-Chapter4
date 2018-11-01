import React, { Component } from "react";

class BookRow extends Component {
  render() {
    let book = this.props.book;
    let author = book.authors.map(author => <div>{author.name}</div>);
    return (
      <tr>
        <td>{book.title}</td>
        <td>{author}</td>
        <td>
          <button className="btn" style={{ backgroundColor: book.color }} />
        </td>
      </tr>
    );
  }
}

export default BookRow;
