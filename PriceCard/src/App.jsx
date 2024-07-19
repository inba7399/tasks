import PriceCard from "./PriceCard"
function App() {
return(
    <>
    <div className="Price">
     <PriceCard tiear="free" price={0} one={true} two={true} three={true} />
     <PriceCard tiear="Primium" price={499} one={true} two={true} three={true} four={true} five={true} />
     <PriceCard tiear="pro" price={999} SM={true} one={true} two={true} three={true} four={true} five={true} six={true} seven={true} eight={true} />
    </div>
    
    </>
    
)
}

export default App
