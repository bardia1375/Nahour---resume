import React from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import { SubMain } from '../subMain/subMain';
// ...
 
class ScrollElement extends React.Component {
  render() {
    return (
      <StickyContainer>
        {/* Other elements can be in between `StickyContainer` and `Sticky`,
        but certain styles can break the positioning logic used. */}
        <Sticky  topOffset={180}>
        {({ style }) => <h1 style={style}>Sticky element</h1>}
          {/* {({
            style,
 
            // the following are also available but unused in this example
            isSticky,
            wasSticky,
            distanceFromTop,
            distanceFromBottom,
            calculatedHeight
          }) => (
            <header style={style}>
              <SubMain/>
            </header>
          )} */}
        </Sticky>
    
      </StickyContainer>
    );
  }
};
export default ScrollElement