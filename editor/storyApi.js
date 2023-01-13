export async function countStory(dispatch) {
  const result = await fetch(
    'https://data.mongodb-api.com/app/young-klxvd/endpoint/storycounter',
  )
    .then(res => res.json())
    .then(res => parseInt(res))
    .then(res => parseInt(res / 10))
    .then(res => dispatch({type: 'SET_PAGE', index: res}))
    .catch(err => alert('index error! : ' + err));

  return result;
}

export async function createPageIndex(dispatch) {
  const result = await fetch(
    'https://data.mongodb-api.com/app/young-klxvd/endpoint/storycounter',
  )
    .then(res => res.json())
    .then(res => parseInt(res))
    .then(res => parseInt(res / 10) + 1)
    .then(res => dispatch({type: 'SET_PAGE_INDEX', index: res}))
    .catch(err => alert('index error! : ' + err));

  return result;
}

export async function getPage(query, dispatch) {
  const result = await fetch(
    'https://data.mongodb-api.com/app/young-klxvd/endpoint/lasysender',
    {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(query),
    },
  )
    .then(res => res.json())
    .then(
      res =>
        dispatch({
          type: 'SET_STORY_FOR_THIS_PAGE',

          data: res,
        }),
      // console.log(res),
    )
    .then(res => console.log('이야기 받아옴'))
    .catch(err => alert('story download error! : ' + err));

  return result;
}
