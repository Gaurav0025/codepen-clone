import Home from'../src/Components/Home';
import DataProvider from './Context/DataProvider';
function App(){
    return(
        <DataProvider>
        <Home/>
        </DataProvider>
    );
}
export default App;