function App(props) {
  const [pageList, setPageList] = React.useState([]);
  const [userType, setUserType] = React.useState(" ");
  const [showBack, setShowBack] = React.useState(false);

  const goToPrevPage = async () => {
    if (pageList.length <= 1) return;
    await setPageList(prevArray => {
      const pl = [...prevArray];
      pl.pop();
      return pl;
    });
    if(pageList.length <= 2){
      setUserType(" ")
    }
  };

  const changePage = (page) => {
    if(!React.isValidElement(page)) return;
    setPageList(prevArray => [...prevArray, React.cloneElement(page)]);
  };

  const changeUserType = (userType) => {
    setUserType(userType);
  };

  const pageUtil = () => {
    if (pageList.length === 0) {
      setPageList([<UserSelect changePage={changePage} changeUserType={changeUserType} userType={userType} />]);
    }
    if (pageList.length > 1) setShowBack(true);
    else setShowBack(false);
  };

  const getCurrentPage = (pageList) => {
    return pageList[pageList.length - 1];
  };

  React.useEffect(() => {
    pageUtil();
  }, [pageList, userType]);

  const currentPage = getCurrentPage(pageList);

  return (
    <div style={{
      position: "absolute",
      width: "100%",
      height: "100%"
    }}>
      <AppBackground 
        showBack={showBack} 
        goBack={goToPrevPage} 
        page={currentPage} 
        userType={userType} 
      />
    </div>
  );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
