const firebaseConfig = {
    apiKey: "AIzaSyCzLdWJEq0vOWSjfVA3C5OQxX--HO3kJmI",
    authDomain: "badbank-bb18b.firebaseapp.com",
    projectId: "badbank-bb18b",
    storageBucket: "badbank-bb18b.appspot.com",
    messagingSenderId: "745789819925",
    appId: "1:745789819925:web:8ae5823019b3ac9692d21c",
};
firebase.initializeApp(firebaseConfig);
function Spa() {
  return (
    <HashRouter>
      <div>
        <NavBar/>        
        <UserContext.Provider value={{users:[{name:'abel',email:'abel@mit.edu',password:'secret',balance:100}]}}>
          <div className="container" style={{padding: "20px"}}>
            <Route path="/" exact component={Home} />
            <Route path="/login/" component={Login} />
            <Route path="/deposit/" component={Deposit} />
            <Route path="/withdraw/" component={Withdraw} />
            <Route path="/transaction/" component={transaction} />
            <Route path="/balance/" component={Balance} />
            <Route path="/alldata/" component={AllData} />
          </div>
        </UserContext.Provider>
      </div>
    </HashRouter>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);
