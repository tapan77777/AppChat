import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './Component/ChatFeed';
import LoginForm from './Component/LoginForm';
import './App.css';

const projectID = 'f5944e4f-e298-44ca-a999-38c6479fdf41';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

// infinite scroll, logout, more customizations...

export default App;