
function App() {
  const [pageList, setPageList] = React.useState([<UserSelect changePage={ changePage } goBack={ goToPrevPage }/>])
  const [userType, setUserType] = React.useState("First-Responder");
  
  const goToPrevPage = () => {
    if (pageList.length <= 1 ) return;
    let pl = [...pageList]
    pl.pop();
    setPageList(pl);
  }

  const changePage = (page) => {
    if(!React.isValidElement(page)) return;
    setPageList([...pageList, page]);
  }

  React.useEffect(() => {

  }, [pageList])

  
  const changeUserType = (userType) => {
    setUserType(userType);
  }

  return (
    <div style={{
      position: "absolute",
      width:"100%",
      height: "100%"
    }}>
      <AppBackground page={pageList[pageList.length - 1]}/>
          
      </div>
  );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
