const database = firebase.database();

function AllData(){
    //const [data, setData] = React.useState('');
    console.log('alldata fired');
    var stringData = firebase.database().toString();

    return (<>
        <h5>All Data in Store:</h5>
        { stringData }
    </>);
}

export default AllData;