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

function DepositMsg(props){
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
  const [email, setEmail]   = React.useState('');
  const [amount, setAmount] = React.useState('');  
  console.log('depositform fired');
  function handle(){
    console.log('handle fired');
    fetch(`/account/update/${email}/${amount}`)
    .then(response => response.text())
    .then(text => {
        try {
            const data = JSON.parse(text);
            props.setStatus(JSON.stringify(data.value));
            props.setShow(false);
            console.log('JSON:', data);
        } catch(err) {
            props.setStatus('Deposit failed')
            console.log('err:', text);
        }
    });
  }

  return(<>

    Email<br/>
    <input type="input" 
      className="form-control" 
      placeholder="Enter email" 
      value={email} onChange={e=>setEmail(e.currentTarget.value)}/><br/>
      
    Amount<br/>
    <input type="number" 
      className="form-control" 
      placeholder="Enter amount" 
      value={amount} onChange={e=>setAmount(e.currentTarget.value)}/><br/>

    <button type="submit" 
      className="btn" 
      onClick={handle}>Deposit</button>

  </>);
}