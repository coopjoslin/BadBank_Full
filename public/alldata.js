function AllData(){
    //const [data, setData] = React.useState('');
    console.log('alldata fired');
    var ref = firebase.database().ref("users");
    ref.once("value")
    .then(
    function(snapshot) {
    const key = snapshot.val();
    console.log(key);
    const keyString = JSON.stringify(key)
    target.innerHTML= "<p>" + keyString + "</p>";
    });
    return (<>
        <h5>All Data in Store:</h5>
        <div id="target"></div>
    </>);
}