function Withdraw(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');  

  return (
    <Card
      bgcolor="success"
      header="Withdraw"
      status={status}
      body={show ? 
        <WithdrawForm setShow={setShow} setStatus={setStatus}/> :
        <WithdrawMsg setShow={setShow} setStatus={setStatus}/>}
    />
  )
}

function WithdrawMsg(props){
  return(<>
    <h5>Success</h5>
    <button
      className="btn" 
      onClick={Withdraw}>
        Withdraw again
    </button>
    
    <a className="btn" href="/#/deposit" onClick={Deposit}>Deposit</a>
  </>);
}

function WithdrawForm(props){
  const [email, setEmail]   = React.useState('');
  const [amount, setAmount] = React.useState('');

  function handle(){
    const userName = document.getElementById("name").value;
    const amount = document.getElementById("amount").value;

    var ref = firebase.database().ref("users/" + userName + '/balance');
    ref.once("value")
    .then(function(snapshot) {
    var key = snapshot.val();
    const currentBalance = parseInt(key) - parseInt(amount);
    console.log(currentBalance);
    firebase.database().ref("users/" + userName)
    .update(
      {balance: currentBalance},
    );
  });
  };

  return(<>

    Name<br/>
    <input type="input" 
    id="name"
      className="form-control" 
      placeholder="Enter email"/><br/>

    Amount<br/>
    <input type="number" 
    id="amount"
      className="form-control" 
      placeholder="Enter amount"/><br/>

    <button type="submit" 
      className="btn" 
      onClick={handle}>
        Withdraw
    </button>

  </>);
}
