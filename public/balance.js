function Balance(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');  

  return (
    <Card
      bgcolor="info"
      header="Balance"
      status={status}
      body={show ?
        <BalanceForm setShow={setShow} setStatus={setStatus}/> :
        <BalanceMsg setShow={setShow} setStatus={setStatus}/>}
    />
  )

}

function BalanceMsg(props){
  return(<>
    <h5>Success</h5>
    <button type="submit" 
      className="btn" 
      onClick={() => {
      }}>
        Check balance again
    </button>
  </>);
}

function BalanceForm(props){
  const [email, setEmail]   = React.useState('');
  const [balance, setBalance] = React.useState('');  

  function handle(){
    const userName = document.getElementById("name").value;
    var ref = firebase.database().ref("users/" + userName + '/balance');
    ref.once("value")
    .then(
    function(snapshot) {
    const key = snapshot.val();
    console.log(key);
    const target = document.getElementById("target")
    target.innerHTML= "<p>" + key + "</p>";
  }); 
  }

  return (<>

    Name<br/>
    <input type="input" 
    id = "name"
      className="form-control" 
      placeholder="Enter email" /><br/>

    <button type="submit" 
      className="btn" 
      onClick={handle}>
        Check Balance
    </button>
    <div id="target"></div>

  </>);
}