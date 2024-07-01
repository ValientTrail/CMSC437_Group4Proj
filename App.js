
function App() {
  const [userType, setUserType] = React.useState("First-Responder");
  const changeUserType = (userType) => {
    setUserType(userType);
  }

  return (
    <div style={{
      position: "absolute",
      width:"100%",
      height: "100%"
    }}>
      <AppBackground page={<UserSelect />} />
      
    </div>
  );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
