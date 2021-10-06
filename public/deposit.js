const db = firebase.database();

function Deposit(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');  
  console.log("deposit fired");
  
  return (
    <Card
      bgcolor="warning"
      header="Deposit"
      status={status}
      body={show ? 
        <DepositForm setShow={setShow} setStatus={setStatus}/> :
        <DepositMsg setShow={setShow} setStatus={setStatus}/>}
    />
  )
}

function DepositMsg(){
  console.log('depositmsg fired');
  return (<>
    <h5>Success</h5>
    <button type="submit" 
      className="btn" 
      onClick={() => {Deposit}}>
        Deposit again
    </button>
    <a className="btn" href="/#/withdraw" onClick={Withdraw}>Withdraw</a>
  </>);
} 

function DepositForm(props){

  console.log('depositform fired');

  function handle(){
    const userName = document.getElementById("name").value;
    const amount = document.getElementById("amount").value;

    var ref = firebase.database().ref("users/" + userName + '/balance');
    ref.once("value")
    .then(function(snapshot) {
    var key = snapshot.val();
    const currentBalance = parseInt(amount) + parseInt(key);
    console.log(currentBalance);
    firebase.database().ref("users/" + userName)
    .update(
      {balance: currentBalance},
    );
  });
  };

  return(<>

    Name<br/>
    <input type="string" 
      id = "name"
      className="form-control" 
      placeholder="Enter name"/><br/>
      
    Amount<br/>
    <input type="number" 
      id="amount"
      className="form-control" 
      placeholder="Enter amount" 
      /><br/>

    <button type="submit" 
      className="btn" 
      onClick={handle}>Deposit</button>

  </>);
}