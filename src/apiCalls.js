const getUrls = async () => {
  const response = await fetch('http://localhost:3001/api/v1/urls')
  return await response.json()
}

const postData = async (title, urlToShorten) => {
  const buildOut = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: title,
      long_url: urlToShorten
    })
  }
  console.log('here', buildOut)
  const response = await fetch('http://localhost:3001/api/v1/urls', buildOut)
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json()
}

export { getUrls, postData }