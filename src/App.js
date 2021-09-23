import React from 'react';

const content = (
  <div id='nonSsr'>
    <div>
      <p id='title'>Title</p>
      <p>Subtitle</p>
    </div>
  </div>
);

const ssrContent = (
  <div>
    <div id='nonSsr'>
      <p>Title</p>
      <p style={{ color: 'red'}}>Subtitle</p>
    </div>
  </div>
)

// Initial App
// function App() {
//   return content;
// }

// Broken App
function App() {
  if (typeof window === 'undefined') {
    return ssrContent
  }

  return content;
}

// // Fixed App
// function App() {
//   const [hasMounted, setHasMounted] = React.useState(false);

//   React.useEffect(() => {
//     setHasMounted(true);
//   }, []);

//   if (!hasMounted) {
//     return ssrContent
//   }

//   return content;
// }

export default App;
