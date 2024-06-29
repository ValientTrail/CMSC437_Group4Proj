
function App() {
  return (
    <div style={{
      position: "absolute",
      width:"100%",
      height: "100%"
    }}>
      <AppBackground page={<PatientInfoScreen />}/>
          
      </div>
  );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
