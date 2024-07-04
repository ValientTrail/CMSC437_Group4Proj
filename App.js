
function App(props) {
  const [pageList, setPageList] = React.useState([])
  const [userType, setUserType] = React.useState("First-Responder");
  const [showBack, setShowBack] = React.useState(false)
  
  

  const goToPrevPage = () => {
    if (pageList.length <= 1 ) return;
    setPageList(prevArray => {
      const pl = [...prevArray];
      pl.pop();
      return pl;
    })
  
  }

  const changePage = (page) => {
    
    if(!React.isValidElement(page)) return;
    setPageList(prevArray => [...prevArray, React.cloneElement(page)]);
  }

  
  const changeUserType = (userType) => {
    setUserType(userType);
  }

  const pageUtil = () => {
    if(pageList.length == 0)
      setPageList([<UserSelect changePage={ changePage } />]);
    
    if(pageList.length > 1)
      setShowBack(true)
    else
      setShowBack(false)
  }

  const getCurrentPage = (pageList) => {
    return pageList[pageList.length-1]
  }

  React.useEffect(() => {
    pageUtil()
  }, [pageList])

  return (
    <div style={{
      position: "absolute",
      width:"100%",
      height: "100%"
    }}>
      
      <AppBackground showBack = {showBack} goBack={ goToPrevPage } page={getCurrentPage(pageList)}/>
      
      
      
          
      </div>
  );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
