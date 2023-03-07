import React, { useState, useEffect } from 'react';
import './App.css';
import { getUrls, postData } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

export default function App() {
  const [ urls, setUrls] = useState([])
  const [ error, setError] = useState('')
  
  const fetchData = async () => {
    try {
      const data = await getUrls()
      const urlData = data.urls
      setUrls(urlData)
      console.log('data?', urls) //object --> array
    } catch (error) {
      setError(error.message)
    }
  }
  
  useEffect(() => {
    fetchData()
  }, [])
  
  const addURL = (newTitle, newURL) => {
    postData(newTitle, newURL)
      .then(data => {
        setUrls([...urls, data])
      })
      .catch(error => {
        setError(error.message)
      })
  }

  console.log('urls', urls)
  
    return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm addURL={addURL}/>
        </header>

        <UrlContainer urls={urls}/>
      </main>
    )
}