import React from 'react';
import './styles.css'

// In reality, this is actually `isSsr`
// You might do this somewhere as an escape-hatch for your jest tests...
// You might think you are doing `isJest`, but really, you're doing `isSsr`
const complexBoolean = typeof window === 'undefined'

// --- Initial App --- //

function App() {
  return (
    <div className='red'>
      <p>Title</p>
    </div>
  );
}

// --- Mismatched Attributes --- //

/**
 * React expects that the rendered content is identical between the server and the client.
 * It can patch up differences in text content, but you should treat mismatches as bugs and fix them.
 * In development mode, React warns about mismatches during hydration.
 * There are no guarantees that attribute differences will be patched up in case of mismatches.
 * This is important for performance reasons because in most apps, mismatches are rare,
 * and so validating all markup would be prohibitively expensive.
 */

// function App() {
//   if (complexBoolean) {
//     return (
//       <div className='blue'>
//         <p>Title</p>
//       </div>
//     )
//   }

//   return (
//     <div className='red'>
//       <p>Title</p>
//     </div>
//   );
// }

// --- Mismatched Tags --- //

// function App() {
//   if (complexBoolean) {
//     return (
//       <div className='blue'>
//         <div>
//           <p>Title</p>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className='red'>
//       <p>Title</p>
//     </div>
//   );
// }

// --- A Simple Fix: Two-Pass Rendering --- //

/**
 * If you intentionally need to render something different on the server and the client,
 * you can do a two-pass rendering. Components that render something different on the client
 * can read a state variable like this.state.isClient, which you can set to true in componentDidMount().
 * This way the initial render pass will render the same content as the server, avoiding mismatches,
 * but an additional pass will happen synchronously right after hydration.
 * Note that this approach will make your components slower because they have to render twice, so use it with caution.
 */

// function App() {
//   const [hasMounted, setHasMounted] = React.useState(false);

//   React.useEffect(() => {
//     setHasMounted(true);
//   }, []);

//   if (!hasMounted || complexBoolean) {
//     return (
//       <div className='blue'>
//         <p>Title</p>
//       </div>
//     )
//   }

//   return (
//     <div className='red'>
//       <p>Title</p>
//     </div>
//   );
// }

// --- NoScript Is Strange --- //

// function App() {
//   return <div>
//     <noscript>
//       <noscript></noscript>
//       <button className='red'>noscript button</button>
//     </noscript>
//     <button className='blue'>normal button</button>
//   </div>
// }


// --- No, Really. NoScript Is WEIRD --- //

// function App() {
//   return (
//     <>
//       [VIDEO]
//       <noscript>
//         <div>
//           <noscript>
//             <>noscript video</>
//           </noscript>
//         </div>
//       </noscript>
//       { complexBoolean ? '[SSR IMAGE]' : '[IMAGE]'}
//     </>
//   )
// }

export default App;
