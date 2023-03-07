import React, { useState } from 'react';

function UrlForm(props) {
  const [title, setTitle] = useState('')
  const [urlToShorten, setUrlToShorten] = useState('')
  //     this.props = props;
  //   }

  const submitURL = event => {
    event.preventDefault();
    const newURL = {
      // id: Date.now(),
      title,
      long_url: urlToShorten
    }
    props.addURL(newURL.title, newURL.long_url)
    clearInputs();
  }
  
  const clearInputs = () => {
    setTitle('')
    setUrlToShorten('')
  }
  
  return (
    <form>
        <input
          type='text'
          placeholder='Title...'
          name='title'
          value={title}
          onChange={e => setTitle(e.target.value)}
          />

        <input
          type='text'
          placeholder='URL to Shorten...'
          name='urlToShorten'
          value={urlToShorten}
          onChange={e => setUrlToShorten(e.target.value)}
        />

        <button onClick={submitURL}>
          Shorten Please!
        </button>
      </form>
    )
  }

  //   handleNameChange = e => {
    //     this.setState({ [e.target.name]: e.target.value });
//   }

//   handleSubmit = e => {
  //     e.preventDefault();
  //     this.clearInputs();
  //   }



export default UrlForm;
