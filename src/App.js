import Box from "./components/Box";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div
      style={{
        display: 'grid',
        justifyContent:'center',
        gridTemplateColumns: 'repeat(auto-fill, 335px)',
        marginTop:'4em',
        gap:'25px',
        width:'100%'
      }}
      >
        <Card head='What is Perspective API?' details="Perspective is a free API that uses machine learning to identify TOXICITY, making it easier to host better conversations online" id='1'/>
        <Card head='How it Works?' details='Perspective uses machine learning models to identify abusive comments. The models score a phrase based on the perceived impact the text may have in a conversation.' id='2'/>
        <Card head='How to use?' details='Type a sentence in the input field to see its toxicity score. Perspective returns a percentage that represents the likelihood that someone will perceive the text as toxic.' id='3'/>
        <Card head='How it helps?' details='Toxicity online poses a serious challenge for platforms and publishers. Online abuse and harassment silence important voices in conversatione. Perspective is an API that makes it easier to host better conversations. ' id='4'/>
      </div>
      <Box />
      <Footer />
    </>
  );
}

export default App;
