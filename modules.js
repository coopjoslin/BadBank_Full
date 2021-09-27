var ui = {};
var target = document.getElementById("target");

ui.navigation = `
<nav class="navbar navbar-expand-lg navbar-light bg-light">
<a class="navbar-brand" href="#">BadBank</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNav">
  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" onclick="loadCreateAccount()" href="#/CreateAccount/">Create Account</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" onclick="loadLogin()" href="#/login/">Login</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" onclick="loadDeposit()" href="#/deposit/">Deposit</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" onclick="loadWithdraw()" href="#/withdraw/">Withdraw</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" onclick="loadBalance()" href="#/balance/">Balance</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" onclick="loadAllData()" href="#/alldata/">AllData</a>
    </li>          
  </ul>
</div>
</nav>
`;

var navigation = document.getElementById("navigation");
navigation.innerHTML += ui.navigation;

ui.createAccount = `
    <div class="card text-white bg-primary  mb-3" style="max-width:18rem;">
    <div class="card-header">Create Account</div>
    <div class="card-body">
      Name<br>
      <input type="input" class="form-control id="name" placeholder="Enter name"><br>
      Email Address<br>
      <input type="input" class="form-control" id="email" placeholder="Enter Email"><br>
      Password<br>
      <input type="password" class="form-control" id="password" placeholder="Enter Password"><br>
      <button type="submit" id="submit" class="btn" onclick="create()">Create Account</button>
      <div id="createStatus"></div>
      </div>
      </div>
`;

ui.login = `
<div class="card text-white bg-primary  mb-3" style="max-width:18rem;">
<div class="card-header">Create Account</div>
<div class="card-body">
Email<br/>
<input type="input" 
  class="form-control" 
  placeholder="Enter email" 
  value={email}/><br/>
Password<br/>
<input type="password" 
  class="form-control" 
  placeholder="Enter password" 
  value={password}/><br/>
<button type="submit" className="btn btn-light" onClick="login()">Login</button>
<div id="createLogin"></div>
  </div>
  </div>
`;

ui.balance = `
<div class="card text-white bg-primary  mb-3" style="max-width:18rem;">
<div class="card-header">Create Account</div>
<div class="card-body">
Email<br/>
<input type="input" 
  class="form-control" 
  placeholder="Enter email" 
  value={email} 
  onChange={e => setEmail(e.currentTarget.value)}/><br/>
<button type="submit" 
  class="btn" 
  onClick="balance()">
    Check Balance
</button>
<div id="balanceStatus"></div>
</div>
</div>
`;

ui.deposit = `
    <div class="card text-white bg-primary  mb-3" style="max-width:18rem;">
    <div class="card-header">Create Account</div>
    <div class="card-body">
    Email<br/>
    <input type="input" 
      className="form-control" 
      placeholder="Enter email" 
      value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
      
    Amount<br/>
    <input type="number" 
      className="form-control" 
      placeholder="Enter amount" 
      value={amount} onChange={e => setAmount(e.currentTarget.value)}/><br/>
    <button type="submit" 
      className="btn" 
      onClick="deposit()">Deposit</button>
      </div>
      </div>
`;

ui.withdraw = `
    <div class="card text-white bg-primary  mb-3" style="max-width:18rem;">
    <div class="card-header">Withdraw</div>
    <div class="card-body">
    Email<br/>
    <input type="input" 
      class="form-control" 
      placeholder="Enter email" 
      value={email} 
      onChange={e => setEmail(e.currentTarget.value)}/><br/>
    Amount<br/>
    <input type="number" 
      class="form-control" 
      placeholder="Enter amount" 
      value={amount} 
      onChange={e => setAmount(e.currentTarget.value)}/><br/>
    <button type="submit" 
      class="btn" 
      onClick="withdraw()">
        Withdraw
    </button>
      </div>
      </div>
`;

ui.alldata = `
<>
<h5>All Data in Store</h5>
<button type="button" class="btn" onclick="loadAllData()">Show All Data</button>
<div id="allDataStatus"></div>
</>
`;

ui.transaction = `
<>
<h5>Transaction</h5>
</>
`;

ui.default = `
<div class="card text-white bg-primary  mb-3" style="max-width:18rem;">
<div class="card-header">Welcome</div>
<div class="card-body">
      <h5 class="card-title">Welcome to the bank</h5>
      <img src="bank.png" class="img-fluid" alt="Responsive Image">
</div>
</div>
</div>
`;

var loadCreateAccount = function () {
  target.innerHTML = ui.createAccount;
};
var loadBalance = function () {
  target.innerHTML = ui.balance;
};

var loadLogin = function () {
  target.innerHTML = ui.login;
};

var loadTransaction = function () {
  target.innerHTML = ui.transaction;
};

var loadDeposit = function () {
  target.innerHTML = ui.deposit;
};

var loadWithdraw = function () {
  target.innerHTML = ui.withdraw;
};
var loadAllData = function () {
  target.innerHTML = ui.alldata;
};

var defaultModule = function () {
  target.innerHTML = ui.default;
};

defaultModule();