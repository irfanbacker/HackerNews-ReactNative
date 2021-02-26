const getTopStoriesIDAsync = async () => {
  try {
    let response = await fetch(
      'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty',
    );
    let json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};

const getStoryByIDAsync = async (id) => {
  try {
    let response = await fetch(
      'https://hacker-news.firebaseio.com/v0/item/' + id + '.json?print=pretty',
    );
    let json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};

const getTopStoriesAsync = async () => {
  let storyIds = await getTopStoriesIDAsync();
  let stories = [];
  let storyPromise = storyIds.slice(0, 30).map(async (id) => {
    let item = await getStoryByIDAsync(id);
    if (item.type === 'story') {
      stories.push(item);
    }
  });
  await Promise.all(storyPromise);
  return stories;
};

export default getTopStoriesAsync;
