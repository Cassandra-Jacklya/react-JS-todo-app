import * as React from 'react';
import AppWrapper from './Components/Commons/AppWrapper';
import ContentBlock from './Components/Commons/ContentBlock';
import Layout from './Components/Commons/Layout';
import LeftBlock from './Components/Commons/LeftBlock';
import RightBlock from './Components/Commons/RightBlock';

function App() {
  React.useEffect(() => {
    document.title = "Todo App"
  }, []);

  return (
    <div>
      <AppWrapper> 
        <Layout>
          <LeftBlock>
          </LeftBlock>
          <ContentBlock>
          </ContentBlock>
          <RightBlock>
          </RightBlock>
        </Layout>
      </AppWrapper>
    </div>
    
  );
}

export default App;
